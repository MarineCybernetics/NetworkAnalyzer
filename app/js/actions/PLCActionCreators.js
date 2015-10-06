"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		NmapAPI = require('../utils/NmapAPI');

var _nmapInterval;

var PLCActionCreators = {
	startNmapDataRequest: function(plcId) {
		_nmapInterval = setInterval(function() {
			NmapAPI.requestNmap(plcId);
		}, 1000);
	},
	stopNmapDataRequest: function() {
		clearInterval(_nmapInterval);
	}
};

module.exports = PLCActionCreators;