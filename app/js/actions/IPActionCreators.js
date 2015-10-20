"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		IPAPI = require('../utils/IPAPI');

var _ipInterval;

var IPActionCreators = {
	startIPDataRequest: function(Id) {
		_ipInterval = setInterval(function() {
			IPAPI.requestIP(Id);
		}, 1000);
	},
	stopIPDataRequest: function() {
		clearInterval(_ipInterval);
	}
};

module.exports = IPActionCreators;