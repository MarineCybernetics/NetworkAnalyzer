"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		SNMPAPI = require('../utils/SNMPAPI');

var _snmpInterval;

var SNMPActionCreators = {
	startSNMPDataRequest: function(Id) {
		_snmpInterval = setInterval(function() {
			SNMPAPI.requestSNMP(Id);
		}, 1000);
	},
	stopSNMPDataRequest: function() {
		clearInterval(_snmpInterval);
	}
};

module.exports = SNMPActionCreators;