"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var SNMPServerActionCreators = {
	handleSNMPSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_SNMP_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = SNMPServerActionCreators;