"use strict";

var fs = require('fs'),
    nmapProvider = require('../provider/nmapProvider');

module.exports = {
  getNmapData: function() {
    return nmapProvider("./dev/txtdata/nmap_107.txt").getLatest();
  }
};