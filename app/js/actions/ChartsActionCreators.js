"use strict";

var ChartsAPI = require('../utils/ChartsAPI');

var _chartsInterval;

var ChartsActionCreators = {
	startChartsDataRequest: function() {
		_chartsInterval = setInterval(function() {
			ChartsAPI.requestCharts();
		}, 1000);
	},
	stopChartsDataRequest: function() {
		clearInterval(_chartsInterval);
	}
};

module.exports = ChartsActionCreators;