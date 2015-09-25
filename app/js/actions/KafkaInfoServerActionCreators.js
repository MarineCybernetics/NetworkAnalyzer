"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes');

var KafkaInfoServerActionCreators = {
	handleKafkaInfoSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_KAFKA_INFO_SUCCESS,
			response: response
		});
	}
};

module.exports = KafkaInfoServerActionCreators;