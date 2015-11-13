module.exports = function(filename, observe) {

	var fs = require('fs'),
	    pcapReader = require('../file-reader/pcapr'),
	    fileReader = require('../file-reader/fr'),
	    resolutionRE = [];     

	resolutionRE[0] = /^\|\s+(\d+\.\d+)\s+<>\s+(\d+\.\d+)\s+\|\s+(\d+)\s+\|\s+(\d+)/i;

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
		    var l = {"start": matches[0][1], "end": matches[0][2], "frames": matches[0][3], "bytes": matches[0][4]};	
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
      pcapReader.extrSummary();
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