"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		NmapAPI = require('../utils/NmapAPI');

var _nmapInterval;

var NmapActionCreators = {
	startNmapDataRequest: function(Id) {
		_nmapInterval = setInterval(function() {
			NmapAPI.requestNmap(Id);
		}, 1000);
	},
	stopNmapDataRequest: function() {
		clearInterval(_nmapInterval);
	}
};

module.exports = NmapActionCreators;