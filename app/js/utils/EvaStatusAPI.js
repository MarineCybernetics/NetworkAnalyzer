"use strict";

var EvaStatusServerActionCreators = require('../actions/EvaStatusServerActionCreators');

var EvaStatusAPI = {
	requestStatus: function() {
		$.get('/status', function(response) {
			EvaStatusServerActionCreators.handleEvaStatusSuccess(response);
		});
	}
};

module.exports = EvaStatusAPI;