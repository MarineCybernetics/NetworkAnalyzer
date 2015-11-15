module.exports = function(filename, observe) {

	var fs = require('fs'),
	    pcapReader = require('../file-reader/pcapr'),
	    fileReader = require('../file-reader/fr'),
	    resolutionRE = [];  

	var start = 0;    

	resolutionRE[0] = /^UDP Conversations/i;
	resolutionRE[1] = /^(\d+\.\d+\.\d+\.\d+:\d+)\s+<->\s+(\d+\.\d+\.\d+\.\d+:\d+)\s+0/i;
	resolutionRE[2] = /^(\d+\.\d+\.\d+\.\d+:\d+)\s+<->\s+(\d+\.\d+\.\d+\.\d+:\d+)\s+[1-9]/i;
                       
	var setTimestamp = function(resolutions) {
		if (resolutions.timestamp == null) {
			resolutions.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
		var matches = []; 
		matches[0] = line.match(resolutionRE[0]);
        matches[1] = line.match(resolutionRE[1]);
        matches[2] = line.match(resolutionRE[2]);

		if (result.resolutions == undefined) {
			result.resolutions = [];
		}

		if (matches[0] != null) {
			start = 1;
		}

		if (start == 1 && matches[1] != null) {
		    var l = {"srcIP": matches[1][1], "destIP": matches[1][2], "s": -1, "d": -1};	
			result.resolutions.push(l);
		}

		if (start == 1 && matches[2] != null) {
		    var l = {"srcIP": matches[2][2], "destIP": matches[2][1], "s": -1, "d": -1};	
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
      fs.openSync(filename, "w");     	
      pcapReader.extrUDPMconv();
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