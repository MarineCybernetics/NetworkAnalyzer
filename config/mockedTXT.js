"use strict";

var fs = require('fs'),
    nmapProvider = require('./provider/nmapProvider'),
    hierarchyProvider = require('./provider/hierarchyProvider'),
    summaryProvider = require('./provider/FramesBytesTimeProvider'),
    tcpudpCovProvider = require('./provider/tcpudpCovProvider'),
    ipCovProvider = require('./provider/ipCovProvider'),
    udpMCovProvider = require('./provider/udpMCovProvider'),
    udpNodeCovProvider = require('./provider/udpNodeCovProvider'),
    udpProvider = require('./provider/udpProvider'),
    tcpProvider = require('./provider/tcpProvider'),
    ipProvider = require('./provider/ipProvider'),
    txtData = "./dev/txtdata/";    

module.exports = {
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
  getLinkMeas: function(nodeIP) {
    var filePath1 = txtData + "iperf_bi.txt";
    return tcpProvider(filePath, nodeIP).getLatest();
  }, 
  getIPData: function(nodeIP) {
    var filePath1 = txtData + nodeIP + "_ip.txt";
    var filePath2 = txtData + "summary.txt";
    var result = {};
    result.resolutions = ipProvider(filePath1, nodeIP).getLatest().resolutions;
    result.sum = summaryProvider(filePath2).getLatest().resolutions;
    return result;
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
  getTopoIP: function(topologies) {
    var topo = JSON.parse(JSON.stringify(topologies));
    var nodes = topo.nodes;

    if(topo.channels == undefined){
      var filePath = txtData + "IPcov.txt";
      var ipv4Cov = ipCovProvider(filePath).getLatest().resolutions;
      var links = [];

      for (var i = 0; i < ipv4Cov.length; i++) {
          for (var j = 0; j < nodes.length; j++) {
            if (ipv4Cov[i].firstIP == nodes[j].IP){
              ipv4Cov[i].f = j;
            }
          };
      };
      
      for (var i = 0; i < ipv4Cov.length; i++) {
        if(ipv4Cov[i].f != -1 && ipv4Cov[i].firstIP != ipv4Cov[i].secondIP){
          for (var j = 0; j < nodes.length; j++) {
            if (ipv4Cov[i].secondIP == nodes[j].IP){
              ipv4Cov[i].s = j;
            }
          };
        }  
      };  

      for (var i = 0; i < ipv4Cov.length; i++) {
        if(ipv4Cov[i].f != -1 && ipv4Cov[i].s != -1){
          var s = ipv4Cov[i].f;
          var e = ipv4Cov[i].s;
          var c = {"id": nodes[s].id + "-" + nodes[e].id, "x1": nodes[s].x + 64, "y1": nodes[s].y + 64, "x2": nodes[e].x + 64, "y2": nodes[e].y + 64};
          links.push(c);
        }
      }; 
      topo.channels = [];
      topo.channels = links;

      fs.writeFile("./dev/data/toDrawing.json", JSON.stringify(topo), function(err) {
        if(err) {
         return console.log(err);
        }
        console.log("IPto file was saved!");
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