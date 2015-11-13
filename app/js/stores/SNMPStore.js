"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change';

var _snmpData = {};

var SNMPStore = assign({}, EventEmitter.prototype, {
	getSNMPData: function() {
		return _snmpData;
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

			case ActionTypes.REQUEST_SNMP_DATA_SUCCESS:
				_snmpData = action.response;
				SNMPStore.emit(CHANGE_EVENT);
				break;

			default:
				//no op
		}
	})
});

module.exports = SNMPStore;