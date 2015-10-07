"use strict";

var fs = require('fs'),
    nmapProvider = require('../provider/nmapProvider'),
    txtData = "./dev/txtdata/";

module.exports = {
  getNmapData: function(node) {
    var filePath = txtData + node + "_nmap.txt";
    return nmapProvider(filePath).getLatest();
  }
};