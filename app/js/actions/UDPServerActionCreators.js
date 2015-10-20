"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var UDPServerActionCreators = {
	handleUDPSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_UDP_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = UDPServerActionCreators;