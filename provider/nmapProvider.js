module.exports = function(filename, observe) {
	var fileReader = require('../file-reader/fr'),
	    resolutionRE = [];
	    
	resolutionRE[0] = /^Nmap\sscan\sreport\sfor\s\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/i;
	resolutionRE[1] = /^PORT\s+STATE\s+SERVICE\s+VERSION/i;
	resolutionRE[2] = /^\d+\/\w+\s+\w+\s+.+/i;
	resolutionRE[3] = /^MAC\s+Address:\s+\w+:\w+:\w+:\w+:\w+:\w+\s.+/i;
	resolutionRE[4] = /^No exact OS matches for host/i;
                       
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
        matches[3] = line.match(resolutionRE[3]);
        matches[4] = line.match(resolutionRE[4]);

		if (result.resolutions == undefined) {
			result.resolutions = [];
		}

        for (var i = 0; i < matches.length; i++) {
			if (matches[i] != null) {
				result.resolutions.push(matches[i][0]);
			}
		};
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

	var nmapProvider = {};

	nmapProvider.getLatest = function() {
		return localResolutions;
	};

	return nmapProvider;
}