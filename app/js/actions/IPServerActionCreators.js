"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var IPServerActionCreators = {
	handleIPSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_IP_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = IPServerActionCreators;