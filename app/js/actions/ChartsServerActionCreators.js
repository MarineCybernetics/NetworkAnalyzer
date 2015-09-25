"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes');

var ChartsServerActionCreators = {
	handleChartsSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_CHARTS_DATA_SUCCESS,
			response: response
		});
	},
	handleSignalDataSuccess: function(response, signalId) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_SIGNAL_DATA_SUCCESS,
			response: response,
			signalId: signalId
		});
	},
	handleSignalValueReceived: function(data, signalId) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.SIGNAL_VALUE_RECEIVED,
			data: data,
			signalId: signalId
		});
	}
};

module.exports = ChartsServerActionCreators;