module.exports = function(fileName, observe) {

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
      var stats = fs.statSync(fileName);
    }
    catch (e) {
      fs.openSync(filename, "w");     	
      pcapReader.extrHierarchy();
    }

    var localResolutions = {};
	localResolutions = fileReader.readOnce(fileName, readHandler, lineParser);
	fileReader.startWatching(fileName, readHandler, lineParser);

	var hierarchyProvider = {};

	hierarchyProvider.getLatest = function() {
		console.log(localResolutions);
		return localResolutions;
	};

	return hierarchyProvider;
}
