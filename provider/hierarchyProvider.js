module.exports = function(fileName, observe) {

	var fileReader = require('../file-reader/fr'), 
	    resolutionRE = /^(.+)frames:(\d+)\sbytes:(\d+)/i;  

	var setTimestamp = function(stat) {
		if (stat.timestamp == null) {
			stat.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
        var matches; 
        matches=line.match(resolutionRE);

		if (result.resolutions === undefined) {
			result.resolutions = [];
		}
		if(matches !== null){
			var l = {"line": matches[1],"fnum": matches[2],"bytes": matches[3]};	
			result.resolutions.push(l);
		}
	};

	var readHandler = function(data){
		if (data.errors !== undefined && data.errors.length > 0) {
			return;
		}
		setTimestamp(data);
		if (observe !== undefined){
			observe(data);	
		}
	};

    var localResolutions = {};
	localResolutions = fileReader.readOnce(fileName, readHandler, lineParser);
	fileReader.startWatching(fileName, readHandler, lineParser);

	var hierarchyProvider = {};

	hierarchyProvider.getLatest = function() {
		return localResolutions;
	};

	return hierarchyProvider;
}
