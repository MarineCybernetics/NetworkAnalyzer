"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change';

var _nmapData = {};

var NmapStore = assign({}, EventEmitter.prototype, {
	getNmapData: function() {
		return _nmapData;
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

			case ActionTypes.REQUEST_NMAP_DATA_SUCCESS:
				_nmapData = action.response;
				NmapStore.emit(CHANGE_EVENT);
				break;

			default:
				//no op
		}
	})
});

module.exports = NmapStore;