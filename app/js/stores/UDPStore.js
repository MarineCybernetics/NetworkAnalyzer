"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change';

var _udpData = {};

var UDPStore = assign({}, EventEmitter.prototype, {
	getUDPData: function() {
		return _udpData;
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

			case ActionTypes.REQUEST_UDP_DATA_SUCCESS:
				_udpData = action.response;
				UDPStore.emit(CHANGE_EVENT);
				break;

			default:
				//no op
		}
	})
});

module.exports = UDPStore;