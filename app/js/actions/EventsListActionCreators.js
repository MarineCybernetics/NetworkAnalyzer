"use strict";

var EvaStatusAPI = require('../utils/EvaStatusAPI');

var _evaStatusInterval;

var EventsListActionCreators = {
	startEvaStatusRequest: function() {
		_evaStatusInterval = setInterval(function() {
			EvaStatusAPI.requestStatus();
		}, 1000);
	},
	stopEvaStatusRequest: function() {
		clearInterval(_evaStatusInterval);
	}
};

module.exports = EventsListActionCreators;