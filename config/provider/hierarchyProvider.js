module.exports = function(filename, observe) {

	var fs = require('fs'),
	    pcapReader = require('../file-reader/pcapr'),
	    fileReader = require('../file-reader/fr'), 
	    resolutionRE = /^(.+[^\s])\s+frames:(\d+)\sbytes:(\d+)/i;   

	var setTimestamp = function(stat) {
		if (stat.timestamp == null) {
			stat.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
        var matches; 
        matches=line.match(resolutionRE);

		if (result.resolutions.length ==0) {
			result.resolutions.push({"line": 0,"fnum": 0,"bytes": 0});
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

	try {
      var stats = fs.statSync(filename);
    }
    catch (e) {   	
      pcapReader.extrHierarchy();
    }

    var localResolutions = {};
	localResolutions = fileReader.readOnce(filename, readHandler, lineParser);
	fileReader.startWatching(filename, readHandler, lineParser);

	var hierarchyProvider = {};

	hierarchyProvider.getLatest = function() {
		return localResolutions;
	};

	return hierarchyProvider;
}
