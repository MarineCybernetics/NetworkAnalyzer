"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes');

var EvaStatusServerActionCreators = {
	handleEvaStatusSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_EVA_STATUS_SUCCESS,
			response: response
		});
	}
};

module.exports = EvaStatusServerActionCreators;