"use strict";

var fs = require('fs'),
    nmapProvider = require('../provider/nmapProvider'),
    hierarchyProvider = require('../provider/hierarchyProvider'),
    txtData = "./dev/txtdata/";

module.exports = {
  getNmapData: function(nodeId) {
    var filePath = txtData + nodeId + "_nmap.txt";
    return nmapProvider(filePath).getLatest();
  },
  getHierarchy: function() {
    var filePath = txtData + "hierarchy.txt";
    return hierarchyProvider(filePath).getLatest();
  }
};