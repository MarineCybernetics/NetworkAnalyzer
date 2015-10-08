"use strict";

var fs = require('fs'),
    nmapProvider = require('../provider/nmapProvider'),
    txtData = "./dev/txtdata/";

module.exports = {
  getNmapData: function(nodeId) {
    var filePath = txtData + nodeId + "_nmap.txt";
    return nmapProvider(filePath).getLatest();
  }
};