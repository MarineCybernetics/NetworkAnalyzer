"use strict";

var fs = require('fs'),
    nmapProvider = require('./provider/nmapProvider'),
    hierarchyProvider = require('./provider/hierarchyProvider'),
    summaryProvider = require('./provider/FramesBytesTimeProvider'),
    tcpudpCovProvider = require('./provider/tcpudpCovProvider'),
    linkmeasTCPProvider = require('./provider/linkmeasTCPProvider'),
    linkmeasUDPProvider = require('./provider/linkmeasUDPProvider'),
    udpMCovProvider = require('./provider/udpMCovProvider'),
    udpNodeCovProvider = require('./provider/udpNodeCovProvider'),
    udpProvider = require('./provider/udpProvider'),
    tcpProvider = require('./provider/tcpProvider'),
    snmpProvider = require('./provider/snmpProvider'),
    txtData = "./dev/txtdata/",
    _ = require('underscore');    

module.exports = {
  getSNMP: function() {
    var filePath = txtData + "snmp.txt";
    console.log(snmpProvider(filePath).getLatest());
    return snmpProvider(filePath).getLatest();
  },  
  getNmapData: function(nodeId) {
    var filePath = txtData + nodeId + "_nmap.txt";
    return nmapProvider(filePath).getLatest();
  },
  getHierarchy: function() {
    var filePath = txtData + "hierarchy.txt";
    return hierarchyProvider(filePath).getLatest();
  },
  getSummary: function() {
    var filePath = txtData + "summary.txt";
    var s = summaryProvider(filePath).getLatest();
    var summary = s.resolutions[0];
    
    var avgpps = (parseFloat(summary.frames)/parseFloat(summary.end)).toFixed(1);
    var avgps =  (parseFloat(summary.bytes)/parseFloat(summary.frames)).toFixed(1);
    var avgbps = (parseFloat(summary.bytes)/parseFloat(summary.end)).toFixed(1);
    summary.avgpps = avgpps;
    summary.avgps = avgps;
    summary.avgbps = avgbps;
    s.resolutions[0] = summary;

    return s;
  },
  getTCPData: function(nodeIP) {
    var filePath1 = txtData + nodeIP + "_tcp.txt";
    var filePath2 = txtData + "summary.txt";
    var result = {};
    console.log(filePath1);
    result.resolutions = tcpProvider(filePath1, nodeIP).getLatest().resolutions;
    result.sum = summaryProvider(filePath2).getLatest().resolutions;
    return result;
  },
  getUDPData: function(nodeIP) {
    var filePath1 = txtData + nodeIP + "_node_udp.txt";
    var filePath2 = txtData + nodeIP + "_udp.txt";
    var filePath3 = txtData + "summary.txt";
    var result = {};
    result.resolutions1 = udpNodeCovProvider(filePath1, nodeIP).getLatest().resolutions;
    result.resolutions2 = udpProvider(filePath2, nodeIP).getLatest().resolutions;
    result.sum = summaryProvider(filePath3).getLatest().resolutions;
    return result;
  },  
  getTopoLinkMeas: function(topologies) {
    var topo = JSON.parse(JSON.stringify(topologies));
    var nodes = topo.nodes;
    var linkmeas = [];

    if(topo.linkmeas == undefined){
      topo.linkmeas = [];

      _.map(nodes, function(node, index){ 
        if(node.IP != "N_A"){
          var rest = _.rest(nodes, index);
          if(rest.length>0){
            _.map(rest, function(restnode, restindex){ 
              var pair = {};
              if(restnode.IP != "N_A" && node.IP<restnode.IP){
                pair = {"id":node.IP + "_" + restnode.IP, "x1":node.x+64, "y1":node.y+64, "x2":restnode.x+64, "y2":restnode.y+64, "tcpinfo":"", "udpinfo":""};
                linkmeas.push(pair);
              }else if(restnode.IP != "N_A" && node.IP>restnode.IP){
                pair = {"id":restnode.IP + "_" + node.IP, "x1":restnode.x+64, "y1":restndoe.y+64, "x2":node.x+64, "y2":node.y+64, "tcpinfo":"", "udpinfo":""};
                linkmeas.push(pair);
              }
            });
          }
        }
      });

      var filePathTCP = txtData + "iperf_TCP.txt";
      var LinkmeasTCP = linkmeasTCPProvider(filePathTCP).getLatest().resolutions;

      var IPs = _.filter(LinkmeasTCP, function(o){ return o.type == "IP"; });
      var MeasData = _.filter(LinkmeasTCP, function(o){ return o.type == "Meas"; });

      var TCPmeas = _.map(IPs, function(oo){ 
        var meas = _.find(MeasData, function(oi){ return oi.mark == oo.mark; });

        if(oo.firstIP < oo.secondIP){
          return {"firstIP": oo.firstIP, "firstPort": oo.firstPort, "secondIP": oo.secondIP, "secondPort": oo.secondPort, "Bandwidth": meas.Bandwidth};
        }else{
          return {"firstIP": oo.secondIP, "firstPort": oo.secondPort, "secondIP": oo.firstIP, "secondPort": oo.firstPort, "Bandwidth": meas.Bandwidth};
        }

      });
     
      for (var i = 0; i < TCPmeas.length; i++) {
          var id = TCPmeas[i].firstIP+"_"+TCPmeas[i].secondIP;

          for(var j = 0; j < linkmeas.length; j++){
            if(linkmeas[j].id == id){
              console.log("5");
              linkmeas[j].tcpinfo = linkmeas[j].tcpinfo + "<tr><td colspan='3'>" 
                                      + TCPmeas[i].firstIP + ":" + TCPmeas[i].firstPort 
                                      + "&harr;" 
                                      + TCPmeas[i].secondIP + ":" + TCPmeas[i].secondPort
                                      + "</td></tr><tr><td>"
                                      + TCPmeas[i].Bandwidth
                                      + "</td><td/><td/></tr>";
              break;
            }
          }

      }

      topo.linkmeas = linkmeas;

      var filePathUDP = txtData + "iperf_UDP.txt";
      var LinkmeasUDP = linkmeasUDPProvider(filePathUDP).getLatest().resolutions;
      console.log(JSON.stringify(LinkmeasUDP));

      var IPs = _.filter(LinkmeasUDP, function(o){ return o.type == "IP"; });
      var MeasData = _.filter(LinkmeasUDP, function(o){ return o.type == "Meas"; });

      var UDPmeas = _.map(IPs, function(oo){ 
        var meas = _.find(MeasData, function(oi){ return oi.mark == oo.mark; });

        if(oo.firstIP < oo.secondIP){
          return {"firstIP": oo.firstIP, "firstPort": oo.firstPort, "secondIP": oo.secondIP, "secondPort": oo.secondPort, "Bandwidth": meas.Bandwidth, "Jitter": meas.Jitter, "LostTotal": meas.LostTotal};
        }else{
          return {"firstIP": oo.secondIP, "firstPort": oo.secondPort, "secondIP": oo.firstIP, "secondPort": oo.firstPort, "Bandwidth": meas.Bandwidth, "Jitter": meas.Jitter, "LostTotal": meas.LostTotal};
        }

      });
     
      for (var i = 0; i < UDPmeas.length; i++) {
          var id = UDPmeas[i].firstIP+"_"+UDPmeas[i].secondIP;

          for(var j = 0; j < linkmeas.length; j++){
            if(linkmeas[j].id == id){
              console.log("5");
              linkmeas[j].udpinfo = linkmeas[j].udpinfo + "<tr><td colspan='3'>"  
                                      + UDPmeas[i].firstIP + ":" + UDPmeas[i].firstPort 
                                      + "&harr;" 
                                      + UDPmeas[i].secondIP + ":" + UDPmeas[i].secondPort
                                      + "</td></tr><tr><td>"
                                      + UDPmeas[i].Bandwidth
                                      + "</td><td>"
                                      + UDPmeas[i].Jitter
                                      + "</td><td>"
                                      + UDPmeas[i].LostTotal
                                      + "</td></tr>";
              break;
            }
          }

      }

      topo.linkmeas = linkmeas;

      fs.writeFile("./dev/data/toDrawing.json", JSON.stringify(topo), function(err) {
        if(err) {
         return console.log(err);
        }
        console.log("LinkMeasto file was saved!");
      });

      return topo;
    }   
    
    return topo;
  },
  getTopoTCP: function(topologies) {
    var topo = JSON.parse(JSON.stringify(topologies));
    var nodes = topo.nodes;
    var newlink = true;
    var id;

    if(topo.tcpchannels == undefined){
      var filePath = txtData + "TCPcov.txt";
      var tcpCov = tcpudpCovProvider(filePath).getLatest().resolutions;
      var links = [];

      for (var i = 0; i < tcpCov.length; i++) {
          for (var j = 0; j < nodes.length; j++) {
            if (tcpCov[i].firstIP == nodes[j].IP){
              tcpCov[i].f = j;
            }
          };
      };
      
      for (var i = 0; i < tcpCov.length; i++) {
        if(tcpCov[i].f != -1 && tcpCov[i].firstIP != tcpCov[i].secondIP){
          for (var j = 0; j < nodes.length; j++) {
            if (tcpCov[i].secondIP == nodes[j].IP){
              tcpCov[i].s = j;
            }
          };
        }  
      };  

      //*
      for (var i = 0; i < tcpCov.length; i++) {
        if(tcpCov[i].f != -1 && tcpCov[i].s != -1){
          var s = tcpCov[i].f;
          var e = tcpCov[i].s;

          if(nodes[s].id < nodes[e].id){
            id = nodes[s].id + "-" + nodes[e].id;
          }else{
            console.log("4");
            id = nodes[e].id + "-" + nodes[s].id;
          }

          for(var j = 0; j < links.length; j++){
            if(links[j].id == id){
              console.log("5");
              links[j].info = links[j].info + "<br />" + tcpCov[i].firstIP + ":" + tcpCov[i].firstPort + "&harr;" + tcpCov[i].secondIP + ":" + tcpCov[i].secondPort;
              newlink = false;
              break;
            }else{
              newlink = true;
            }
          }

          if(newlink == true){
            var c = {
              "id": id, 
              "x1": nodes[s].x + 64, 
              "y1": nodes[s].y + 64, 
              "x2": nodes[e].x + 64, 
              "y2": nodes[e].y + 64,
              "info":tcpCov[i].firstIP + ":" + tcpCov[i].firstPort + "&harr;" + tcpCov[i].secondIP + ":" + tcpCov[i].secondPort
            };
            links.push(c);
          }

        }
      }; 

      topo.tcpchannels = [];
      topo.tcpchannels = links;

      fs.writeFile("./dev/data/toDrawing.json", JSON.stringify(topo), function(err) {
        if(err) {
         return console.log(err);
        }
        console.log("TCPto file was saved!");
      });

      return topo;
    }   
    
    return topo;
  },  
  getTopoUDP: function(topologies) { 
    var topo = JSON.parse(JSON.stringify(topologies));
    var nodes = topo.nodes;

    //not multicast  
    var newlink = true;
    var id;

    if(topo.udpchannels == undefined){
      var filePath = txtData + "UDPcov.txt";
      var udpCov = tcpudpCovProvider(filePath).getLatest().resolutions;
      var links = [];

      for (var i = 0; i < udpCov.length; i++) {
          for (var j = 0; j < nodes.length; j++) {
            if (udpCov[i].firstIP == nodes[j].IP){
              udpCov[i].f = j;
            }
          };
      };
      
      for (var i = 0; i < udpCov.length; i++) {
        if(udpCov[i].f != -1 && udpCov[i].firstIP != udpCov[i].secondIP){
          for (var j = 0; j < nodes.length; j++) {
            if (udpCov[i].secondIP == nodes[j].IP){
              udpCov[i].s = j;
            }
          };
        }  
      };  

      for (var i = 0; i < udpCov.length; i++) {
        if(udpCov[i].f != -1 && udpCov[i].s != -1){
          var s = udpCov[i].f;
          var e = udpCov[i].s;

          if(nodes[s].id < nodes[e].id){
            id = nodes[s].id + "-" + nodes[e].id;
          }else{
            console.log("4");
            id = nodes[e].id + "-" + nodes[s].id;
          }

          for(var j = 0; j < links.length; j++){
            if(links[j].id == id){
              console.log("5");
              links[j].info = links[j].info + "<br />" + udpCov[i].firstIP + ":" + udpCov[i].firstPort + "&harr;" + udpCov[i].secondIP + ":" + udpCov[i].secondPort;
              newlink = false;
              break;
            }else{
              newlink = true;
            }
          }

          if(newlink == true){
            var c = {
              "id": id, 
              "x1": nodes[s].x + 64, 
              "y1": nodes[s].y + 64, 
              "x2": nodes[e].x + 64, 
              "y2": nodes[e].y + 64,
              "info":udpCov[i].firstIP + ":" + udpCov[i].firstPort + "&harr;" + udpCov[i].secondIP + ":" + udpCov[i].secondPort
            };
            links.push(c);
          }

        }
      }; 
      topo.udpchannels = [];
      topo.udpchannels = links;

        fs.writeFile("./dev/data/toDrawing.json", JSON.stringify(topo), function(err) {
        if(err) {
         return console.log(err);
        }
        console.log("UDPto file was saved!");
      });

    }   

    //multicast
    if(nodes[0].UDPMuti == undefined){
      var filePath = txtData + "UDPMcov.txt";
      var udpCov = udpMCovProvider(filePath).getLatest().resolutions;
      for (var i = 0; i < udpCov.length; i++) {
        for (var j = 0; j < nodes.length; j++) {
          if (nodes[j].IP!='' && udpCov[i].srcIP.indexOf(nodes[j].IP) > -1){
            udpCov[i].s = j;
            break;
          }
        };
      };

      for (var i = 0; i < nodes.length; i++) {
          topo.nodes[i].UDPMuti = [];
      }; 

      topo.mlines = [];

      for (var i = 0; i < udpCov.length; i++) {
        if(udpCov[i].s != -1){  
          var s = udpCov[i].s;
          var l = topo.nodes[s].UDPMuti.length;
          var c = {};

          switch (l) {
            case 0:
              c = {"MUDP":udpCov[i].destIP, "x": nodes[s].x+20.46, "y": nodes[s].y+20.46}; 
              break;
            case 1:
              c = {"MUDP":udpCov[i].destIP, "x": nodes[s].x+61.5, "y": nodes[s].y+7.5};
              break;
            case 2:
              c = {"MUDP":udpCov[i].destIP, "x": nodes[s].x+102.54, "y": nodes[s].y+20.46}; 
              break;              
            default:
              c = {"MUDP":udpCov[i].destIP, "x": nodes[s].x+61.5, "y": nodes[s].y+61.5}; 
              break;
          }
              
          topo.nodes[s].UDPMuti.push(c);
          
          var ml = {};
          ml = {"id": "ml", "x1": nodes[s].x+64, "y1": nodes[s].y+64, "x2": c.x, "y2": c.y};

          topo.mlines.push(ml);

        };

      };  

      for (var i = 0; i < nodes.length; i++) {
        if(topo.nodes[i].UDPMuti.length > 0){
          topo.nodes[i].mx = topo.nodes[i].x + 32;
          topo.nodes[i].my = topo.nodes[i].y + 32;
        }
      }; 

      fs.writeFile("./dev/data/toDrawing.json", JSON.stringify(topo), function(err) {
        if(err) {
         return console.log(err);
        }
        console.log("UDPto file was saved!");
      });

      return topo;
    }

    return topo;
  }
};