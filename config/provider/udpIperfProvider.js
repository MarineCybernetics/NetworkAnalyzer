module.exports = function(filename, nodeIP, observe) {

	var fs = require('fs'),
	    pcapReader = require('../file-reader/pcapr'),
	    fileReader = require('../file-reader/fr'),
	    resolutionRE = [];     

	resolutionRE[0] = /^\[(\d+)\]\s+(\w+\s+\d+\.\d+\.\d+\.\d+\s+port\s+\d+\s+connected\s+with\d+\d+\.\d+\.\d+\.\d+\s+port\d+\d+)/i;
    resolutionRE[1] = /^\[(\d+)\]\s+(\d+\.\d+\-\d+\.\d+\s+\w+\s+\d+\s+\w+\s+\d+\.\d+\s+\d+\/\d+\s+\d+\.\d+\s+\w+\s+\d+\/\d+\s+\(\d+%\))/i;

	var setTimestamp = function(resolutions) {
		if (resolutions.timestamp == null) {
			resolutions.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
		var matches = []; 
		matches[0] = line.match(resolutionRE[0]);
		matches[1] = line.match(resolutionRE[0]);

		if (result.resolutions == undefined) {
			result.resolutions = [];
		}

		if (result.resolutions.length ==0) {
			result.resolutions.push({"firstIP": 0, "secondIP": 0, "ff": 0, "fb": 0, "sf": 0, "sb": 0});
		}

		if (matches[0] != null) {	
		    var l = {"firstIP": matches[0][1], "secondIP": matches[0][2], "ff": matches[0][3], "fb": matches[0][4], "sf": matches[0][5], "sb": matches[0][6]};	
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
    catch (err) {
      console.log("eee");
      pcapReader.extrTCP(nodeIP);
    }

	var localResolutions = {};
	localResolutions = fileReader.readOnce(filename, readHandler, lineParser);
	fileReader.startWatching(filename, readHandler, lineParser);

	var tcpProvider = {};

	tcpProvider.getLatest = function() {
		return localResolutions;
	};

	return tcpProvider;
}