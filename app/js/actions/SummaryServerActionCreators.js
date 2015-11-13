"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var SummaryServerActionCreators = {
	handleSummarySuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_SUMMARY_SUCCESS,
			response: response
		});
	}
};

module.exports = SummaryServerActionCreators;
