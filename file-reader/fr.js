var fileSystem = require('fs');

var allEmpty = function(lines) {
	for (var i = 0; i < lines.length; i++) {
		if (lines[i] != '' && lines[i] != null) {
			return false;
		}
	};
	return true;
};

var readOnce = function(filename, handler, lineParser) {
	var nwStat = {errors: [], resolutions: []},
		start = Date.now();
    var data = fileSystem.readFileSync(filename, 'utf8');

	var lines = data.trim().split('\n');

    if (allEmpty(lines)) {
		nwStat.errors.push('Data file is empty');
	}

	lines.forEach(function(line){
		lineParser(line, nwStat); 
	});

	nwStat.elapsed = Date.now() - start;
	handler(nwStat);

	return nwStat;
};

var startWatching = function(filename, handler, lineParser) {
	fileSystem.watch(filename, function(event){
		if (event === 'change') {
			readOnce(filename, handler, lineParser);
		}
	});
};

module.exports.readOnce = readOnce;
module.exports.startWatching = startWatching;
