module.exports = function(fileName, observe) {

	var fileReader = require('../file-reader/fr'),
		snmp_meta = require('./snmp-meta-data');

    var snmpMeta = [];
	for (var i = 0; i < snmp_meta.length; i++) {
		snmpMeta.push({"name":snmp_meta[i].shortName, "des":snmp_meta[i].description});
	};

	var setTimestamp = function(matches, stat) {
		if (stat.timestamp == null) {
			var ms_since_epoch = parseInt(matches[1]) * 1000;
			stat.timestamp = new Date(ms_since_epoch).toLocaleString();
		}
	};

	var findMeta = function(name) {
		for (var i = 0; i < snmpMeta.length; i++) {
			var info = snmpMeta[i];
			if (info.name === name) {
				return info.des;
			}
		};
		return "";
	};

	var parseSingleLine = function(matches, result){
		setTimestamp(matches, result);
		var field = matches[2],
			value = matches[3];
		if (field === 'sysName') {
			result.sysName = value;
			return;
		}
		var item = {"name":field, "actualValue":value, "meta":findMeta(field)};
		result.resolutions.push(item);
	};

	var parseArrayLine = function(matches, result){
		setTimestamp(matches, result);
		var field = matches[2],
			index = matches[3] - 1,
			value = matches[4];
		if (result[field] == undefined) {
			result[field] = [];
		}
		var item = {"name":field, "actualValue":value, "index":index, "meta":findMeta(field)}; 
		result[field].push(item);
	};

	var lineParser = function(line, result) {
		var singleRE = /^([\d\:]+) +((?:\w+-?)+) ?= ?(\w+)/i,
			arrayRE = /^([\d\:]+) +((?:\w+-?)+)\.(\d+) ?= ?(\w+)/i;

		var singleMatches = line.match(singleRE),
			arrayMatches = line.match(arrayRE);

        if (result.resolutions == undefined) {
			result.resolutions = [];
		}

		if (singleMatches != null) {
			parseSingleLine(singleMatches, result, snmp_meta);
		} else if (arrayMatches != null) {
			parseArrayLine(arrayMatches, result, snmp_meta);
		}
	};

	var deleteKeys = function(obj, keys) {
		keys.map(function(key){
			if (obj.hasOwnProperty(key)) {
				delete obj[key];
			}
		});
	};

	var readHandler = function(data){
		if (data.errors !== undefined && data.errors.length > 0) {
			return;
		}
		if (observe !== undefined){
			observe(data);	
		}
		deleteKeys(data, ["errors", "elapsed"]);
		localResolutions = data;
	};

	var localResolutions = {};
	localResolutions = 	fileReader.readOnce(fileName, readHandler, lineParser);
	fileReader.startWatching(fileName, readHandler, lineParser);

	var snmpProvider = {};

	snmpProvider.getLatest = function() {
		return localResolutions;
	};

	return snmpProvider;
}
