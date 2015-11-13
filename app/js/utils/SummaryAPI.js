"use strict";

var SummaryServerActionCreators = require('../actions/SummaryServerActionCreators');

var SummaryAPI = {
	requestSummary: function() {
		$.get('/topo/summary', function(response) {
			SummaryServerActionCreators.handleSummarySuccess(response);                             
		});
	}
};

module.exports = SummaryAPI;