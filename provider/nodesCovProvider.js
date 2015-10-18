module.exports = function(filename, observe) {

	var fileReader = require('../file-reader/fr'),
	    resolutionRE = [];  

	var start = 0;    

	resolutionRE[0] = /^IPv4 Conversations/i;
	resolutionRE[1] = /^(\d+\.\d+\.\d+\.\d+)\s+<->\s+(\d+\.\d+\.\d+\.\d+)/i;
                       
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
			start = 1;
		}

		if (start == 1 && matches[1] != null) {
		    var l = {"firstIP": matches[1][1], "secondIP": matches[1][2], "f": -1, "s": -1};	
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

	var nodesCovProvider = {};

	nodesCovProvider.getLatest = function() {
		return localResolutions;
	};

	return nodesCovProvider;
}