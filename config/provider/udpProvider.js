module.exports = function(filename, nodeIP, observe) {

	var fs = require('fs'),
	    pcapReader = require('../file-reader/pcapr'),
	    fileReader = require('../file-reader/fr'),
	    resolutionRE = [];     

	resolutionRE[0] = /^([\d\.]+)\s+([\d\.]+)\s+(\d+)\s+([\d\.]+)\s+(\d+)\s+(\d+)/i;
                       
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
		    var l = {"reftime": matches[0][1], "srcIP": matches[0][2], "srcPort": matches[0][3], "dstIP": matches[0][4], "dstPort": matches[0][5], "pSize": matches[0][6]};	
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

	pcapReader.extrUDP(nodeIP);

	var localResolutions = {};
	localResolutions = fileReader.readOnce(filename, readHandler, lineParser);
	fileReader.startWatching(filename, readHandler, lineParser);

	var udpProvider = {};

	udpProvider.getLatest = function() {
		return localResolutions;
	};

	return udpProvider;
}