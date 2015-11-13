"use strict";

var SummaryAPI = require('../utils/SummaryAPI');

var _summaryInterval;

var SummaryActionCreators = {
	startSummaryRequest: function() {
		_summaryInterval = setInterval(function() {
			SummaryAPI.requestSummary();
		}, 1000);
	},
	stopSummaryRequest: function() {
		clearInterval(_summaryInterval);
	}
};

module.exports = SummaryActionCreators;