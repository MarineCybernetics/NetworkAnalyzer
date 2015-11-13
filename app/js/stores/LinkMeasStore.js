"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change';

var _linkmeasData = {};

var LinkMeasStore = assign({}, EventEmitter.prototype, {
	getLinkMeasData: function() {
		return _linkmeasData;
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

			case ActionTypes.REQUEST_LINKMEAS_DATA_SUCCESS:
				_linkmeasData = action.response;
				LinkMeasStore.emit(CHANGE_EVENT);
				break;

			default:
				//no op
		}
	})
});

module.exports = LinkMeasStore;