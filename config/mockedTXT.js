"use strict";

var fs = require('fs'),
    nmapProvider = require('./provider/nmapProvider'),
    hierarchyProvider = require('./provider/hierarchyProvider'),
    ipCovProvider = require('./provider/ipCovProvider'),
    udpCovProvider = require('./provider/udpCovProvider'),
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
    return topo;
  },  
  getTopoUDP: function(topologies) { 
    var topo = JSON.parse(JSON.stringify(topologies));
    var nodes = topo.nodes; 

    if(nodes[0].UDPMuti == undefined){
      var filePath = txtData + "UDPcov.txt";
      var udpCov = udpCovProvider(filePath).getLatest().resolutions;
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

      for (var i = 0; i < udpCov.length; i++) {
        if(udpCov[i].s != -1){  
          var s = udpCov[i].s;
          var l = topo.nodes[s].UDPMuti.length;
          var c = {"MUDP":udpCov[i].destIP, "x": nodes[s].x - 100, "y": nodes[s].y + l*64}; 
          topo.nodes[s].UDPMuti.push(c);
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