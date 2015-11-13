"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var LinkMeasServerActionCreators = {
	handleLinkMeasSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_LINKMEAS_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = LinkMeasServerActionCreators;