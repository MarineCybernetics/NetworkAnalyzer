"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change',
		viewDescriptor = require('../config/view.conf.js'),
		d3DataConverter = require('../services/D3ChartsDataConverter');

var _chartsData = { "data": [ {	label: '', values: [{x: 0, y: 0}] } ], "minMax": {minX: 0, maxX: 0, minY: 0, maxY: 0}};

var ChartsStore = assign({}, EventEmitter.prototype, {
	getChartsData: function() {
		return _chartsData;
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

			case ActionTypes.REQUEST_CHARTS_DATA_SUCCESS:
				var view1 = viewDescriptor.views[0];
				var currItem = view1.items[0];
				var converted = d3DataConverter.convertData(currItem, action.response);
				_chartsData = converted;
				ChartsStore.emit(CHANGE_EVENT);
				break;

			default:
				//no op
				break;
		}
	})
});

module.exports = ChartsStore;