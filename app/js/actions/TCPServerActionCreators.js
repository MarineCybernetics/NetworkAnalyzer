"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var TCPServerActionCreators = {
	handleTCPSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_TCP_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = TCPServerActionCreators;