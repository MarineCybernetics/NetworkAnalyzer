module.exports = function(fileName, observe) {

	var fileReader = require('../file-reader/fr');

	var setTimestamp = function(stat) {
		if (stat.timestamp == null) {
			stat.timestamp = new Date().toLocaleString();
		}
	};

	var lineParser = function(line, result) {
		if (result.resolutions === undefined) {
			result.resolutions = [];
		}
		result.resolutions.push(line);
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
