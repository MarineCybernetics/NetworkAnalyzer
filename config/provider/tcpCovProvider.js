module.exports = function(filename, observe) {

	var fs = require('fs'),
	    pcapReader = require('../file-reader/pcapr'),
	    fileReader = require('../file-reader/fr'),
	    resolutionRE = [];  

	resolutionRE[0] = /^(\d+\.\d+\.\d+\.\d+):(\d+)\s+<->\s+(\d+\.\d+\.\d+\.\d+):(\d+)/i;

	var setTimestamp = function(resolutions) {
		if (resolutions.timestamp == null) {
			resolutions.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
		var matches = []; 
		matches[0] = line.match(resolutionRE[0]);

		if (result.resolutions == undefined) {
			result.resolutions = [];
		}
		if (matches[0] != null) {
		    var l = {"firstIP": matches[0][1], "firstPort":matches[0][2], "secondIP": matches[0][3], "secondPort": matches[0][4], "f": -1, "s": -1};	
			result.resolutions.push(l);
		}
	};

	var readHandler = function(data) {
		if (data.errors !== undefined && data.errors.length > 0) {
			return;
		}
		setTimestamp(data);
		if (observe !== undefined) {
			observe(data);
		}
	};

    try {
      var stats = fs.statSync(filename);
    }
    catch (e) {    	
      pcapReader.extrTCPconv();
    }

	var localResolutions = {};
	localResolutions = fileReader.readOnce(filename, readHandler, lineParser);
	fileReader.startWatching(filename, readHandler, lineParser);

	var nodesCovProvider = {};

	nodesCovProvider.getLatest = function() {
		return localResolutions;
	};

	return nodesCovProvider;
}