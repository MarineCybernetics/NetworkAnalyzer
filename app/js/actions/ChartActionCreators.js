"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		ChartsAPI = require('../utils/ChartsAPI');

var _signalInterval = {};

var ChartActionCreators = {
	requestLatestSignalData: function(signalId) {
		ChartsAPI.requestSignalData(signalId);
	},
	openSignalSocket: function(signalId) {
		ChartsAPI.openSignalSocket(signalId);
	},
	closeSignalSocket: function(signalId) {
		ChartsAPI.closeSignalSocket(signalId);
	}
};

module.exports = ChartActionCreators;