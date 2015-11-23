"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change';

var _tcpData = {};

var TCPStore = assign({}, EventEmitter.prototype, {
	getTCPData: function() {
		return _tcpData;
	},
    cleanTCPData: function() {
    	_tcpData = {};
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;

		switch(action.type) {

			case ActionTypes.REQUEST_TCP_DATA_SUCCESS:
				_tcpData = action.response;
				TCPStore.emit(CHANGE_EVENT);
				break;

			default:
				//no op
		}
	})
});

module.exports = TCPStore;