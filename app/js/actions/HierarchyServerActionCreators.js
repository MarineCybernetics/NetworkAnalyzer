"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var HierarchyServerActionCreators = {
	handleHierarchySuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_HIERARCHY_SUCCESS,
			response: response
		});
	}
};

module.exports = HierarchyServerActionCreators;
