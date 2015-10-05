"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes');

var NmapServerActionCreators = {
	handleNmapSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_NMAP_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = NmapServerActionCreators;