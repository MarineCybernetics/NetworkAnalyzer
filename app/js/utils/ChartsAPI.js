"use strict";

var ChartsServerActionCreators = require('../actions/ChartsServerActionCreators'),
		WebSocketFactory = require('./websocket');

var _sockets = {};
var _subscriptions = {};

var ChartsAPI = {
	requestCharts: function() {
		$.get('/dailyweather', function(response) {
			ChartsServerActionCreators.handleChartsSuccess(response);
		});
	},
	requestSignalData: function(signalId) {
		$.get('ajax/vessel_data?imo=9368302&signal_id=' + signalId, function(response) {
			ChartsServerActionCreators.handleSignalDataSuccess(response, signalId);
		});
	},
	openSignalSocket: function(signalId) {
		var socket = WebSocketFactory.create('signal/' + signalId);
		_sockets[signalId] = socket;
		socket.open();
		var subscription = socket.subscribe('signal::' + signalId, function(data) {
			ChartsServerActionCreators.handleSignalValueReceived(data, signalId);
		});
		_subscriptions[signalId] = subscription;
	},
	closeSignalSocket: function(signalId) {
		var socket = _sockets[signalId];
		var subscription = _subscriptions[signalId];
		socket.unsubscribe(subscription);
		socket.close();
		_sockets[signalId] = undefined;
		_subscriptions[signalId] = undefined;
	}
};

module.exports = ChartsAPI;