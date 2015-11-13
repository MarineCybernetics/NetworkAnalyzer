"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var MetaServerActionCreators = {
	handleMetaSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_META_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = MetaServerActionCreators;