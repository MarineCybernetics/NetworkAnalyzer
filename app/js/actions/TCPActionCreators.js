"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		TCPAPI = require('../utils/TCPAPI');

var _tcpInterval;

var TCPActionCreators = {
	startTCPDataRequest: function(Id) {
		_tcpInterval = setInterval(function() {
			TCPAPI.requestTCP(Id);
		}, 1000);
	},
	stopTCPDataRequest: function() {
		clearInterval(_tcpInterval);
	}
};

module.exports = TCPActionCreators;