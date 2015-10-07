module.exports = function(filename, observe) {
	var fileReader = require('../file-reader/fr'),
		resolutionRE = /^(Nmap\sscan\sreport\sfor\s\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/i;

	var setTimestamp = function(resolutions) {
		if (resolutions.timestamp == null) {
			resolutions.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
		var matches = line.match(resolutionRE);
		if (result.resolutions == undefined) {
			result.resolutions = [];
		}
		if (matches != null) {
			var data = matches[1];
			var res = {};
			res.data = data;
			result.resolutions.push(res);
			console.log("2");
            console.log(result.resolutions[0].data);
		}
	};

	var readHandler = function(data) {
		console.log("3");
		console.log(data.resolutions[0].data);
		if (data.errors !== undefined && data.errors.length > 0) {
			return;
		}
		setTimestamp(data);
		if (observe !== undefined) {
			observe(data);
		}
		console.log("4");
		console.log(data.resolutions[0].data);
	};

	var localResolutions = fileReader.readOnce(filename, readHandler, lineParser);
	fileReader.startWatching(filename, readHandler, lineParser);

	var nmapProvider = {};

	nmapProvider.getLatest = function() {
		console.log("5");
		console.log(localResolutions.resolutions[0].data);
		return localResolutions;
	};

	return nmapProvider;
}