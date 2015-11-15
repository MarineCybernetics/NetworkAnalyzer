module.exports = function(filename, observe) {

	var fs = require('fs'),
	    pcapReader = require('../file-reader/pcapr'),
	    fileReader = require('../file-reader/fr'),
	    resolutionRE = [];     
                       
	resolutionRE[0] = /^(\[\d+\])\s+local\s+(\d+\.\d+\.\d+\.\d+)\s+port\s+(\d+)\s+connected\s+with\s+(\d+\.\d+\.\d+\.\d+)\s+port\s+(\d+)/i;  
    resolutionRE[1] = /^(\[\d+\])\s+[\d\.]+\-[\d\.]+\s+\w+\s+[\d\.]+\s+\w+\s+([\d\.]+\s+\w+\/\w+)\s+([\d\.]+\s+\w+)\s+\d+\/\d+\s+\(([\d\.]+\%)\)/i; 

	var setTimestamp = function(resolutions) {
		if (resolutions.timestamp == null) {
			resolutions.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
		var matches = []; 
		matches[0] = line.match(resolutionRE[0]);
        matches[1] = line.match(resolutionRE[1]);

		if (result.resolutions == undefined) {
			result.resolutions = [];
		}

		if (matches[0] != null) {
		    var l = {"mark":matches[0][1], "firstIP": matches[0][2], "firstPort": matches[0][3], "secondIP": matches[0][4], "secondPort": matches[0][5], "type": "IP"};	
			result.resolutions.push(l);
		}

		if (matches[1] != null) {
		    var l = {"mark": matches[1][1], "Bandwidth": matches[1][2], "Jitter": matches[1][3], "LostTotal": matches[1][4], "type": "Meas"};	
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

	var localResolutions = {};
	localResolutions = fileReader.readOnce(filename, readHandler, lineParser);
	fileReader.startWatching(filename, readHandler, lineParser);

	var linkmeasUDPProvider = {};

	linkmeasUDPProvider.getLatest = function() {
		return localResolutions;
	};

	return linkmeasUDPProvider;
}