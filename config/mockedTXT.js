"use strict";

var fs = require('fs'),
    nmapProvider = require('../provider/nmapProvider'),
    hierarchyProvider = require('../provider/hierarchyProvider'),
    nodesCovProvider = require('../provider/nodesCovProvider'),
    txtData = "./dev/txtdata/",
    mockedJSON = require('./mockedJSON.js'),
    topologies = mockedJSON.getTopologies();

module.exports = {
  getNmapData: function(nodeId) {
    var filePath = txtData + nodeId + "_nmap.txt";
    return nmapProvider(filePath).getLatest();
  },
  getHierarchy: function() {
    var filePath = txtData + "hierarchy.txt";
    return hierarchyProvider(filePath).getLatest();
  },
  getTopologyL: function() {
    var filePath = txtData + "convers.txt";
    var ipv4Cov = nodesCovProvider(filePath).getLatest().resolutions;
    var nodes = topologies.nodes;
    var links = [];
    // console.log(ipv4Cov);
    // console.log("________________");
    // console.log(nodes);

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
    topologies.channels = links;
    console.log(topologies);     

    return topologies;
  }

};