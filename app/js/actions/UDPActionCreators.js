"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		UDPAPI = require('../utils/UDPAPI');

var _udpInterval;

var UDPActionCreators = {
	startUDPDataRequest: function(Id) {
		_udpInterval = setInterval(function() {
			UDPAPI.requestUDP(Id);
		}, 1000);
	},
	stopUDPDataRequest: function() {
		clearInterval(_udpInterval);
	}
};

module.exports = UDPActionCreators;