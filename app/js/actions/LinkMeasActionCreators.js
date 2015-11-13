"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		LinkMeasAPI = require('../utils/LinkMeasAPI');

var _linkmeasInterval;

var LinkMeasActionCreators = {
	startLinkMeasDataRequest: function(Id) {
		_linkmeasInterval = setInterval(function() {
			LinkMeasAPI.requestLinkMeas(Id);
		}, 1000);
	},
	stopLinkMeasDataRequest: function() {
		clearInterval(_linkmeasInterval);
	}
};

module.exports = LinkMeasActionCreators;