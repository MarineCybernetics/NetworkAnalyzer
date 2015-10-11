"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var TopologyServerActionCreators = {
	handleTopologySuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_TOPOLOGY_SUCCESS,
			response: response
		});
	}
};

module.exports = TopologyServerActionCreators;
