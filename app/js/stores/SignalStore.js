"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change',
		viewDescriptor = require('../config/view.conf.js'),
		d3DataConverter = require('../services/D3ChartsDataConverter');

var _signalsData = {};
var _requestReferesh = false;
var _offline = false;

var getMinMax = function(data) {
  var minX1 = [], maxX1 = [], minY1 = [], maxY1 = [];

  for (var i = 0; i < data.length; i++) {
    var currArray =  data[i].values;
    minX1.push(d3.min(currArray, function(d) { return d["x"]; }));
    maxX1.push(d3.max(currArray, function(d) { return d["x"]; }));
    minY1.push(d3.min(currArray, function(d) { return d["y"]; }));
    maxY1.push(d3.max(currArray, function(d) { return d["y"]; }));
   };

  return {minX: d3.min(minX1), maxX: d3.max(maxX1), minY: d3.min(minY1), maxY: d3.max(maxY1)};  
};

var convertValue = function(value, seriesLabel) {
	var converted = {};
	converted.x = new Date(value.time);
	converted.y = value[seriesLabel];
	return converted;
};

var convertSignalData = function(data) {
	var retVal = {data: [], minMax: {}};
	var seriesLabel = "";
	var oneSeries = {label: seriesLabel, values: []};
	var firstElement = data[0];
	for (var key in firstElement) {
		if (firstElement.hasOwnProperty(key) && key !== "time") {
			var seriesLabel = key;
			oneSeries.label = seriesLabel;
			break;
		}
	}
	for (var i = 0; i < data.length; i++) {
		var entry = {};
		entry.x = new Date(data[i].time);
		entry.y = data[i][seriesLabel];
		oneSeries.values.push(entry);
	};
	retVal.data.push(oneSeries);
	retVal.minMax = getMinMax(retVal.data);
	return retVal;
};

var pushNewValue = function(signalId, value) {
	if (_signalsData[signalId] === undefined) {
		return;
	}
	var converted = convertValue(value, _signalsData[signalId].data[0].label);
	_signalsData[signalId].data[0].values.shift();
	_signalsData[signalId].data[0].values.push(converted);
	_signalsData[signalId].minMax = getMinMax(_signalsData[signalId].data);
}

var SignalStore = assign({}, EventEmitter.prototype, {
	getSignalData: function(signalId) {
		if (_signalsData[signalId] === undefined) {
			return {
				data: [{label: "", values: [{x: 0, y: 0}]}], 
				minMax: {minX: 0, maxX: 0, minY: 0, maxY: 0}
			};
		}
		return _signalsData[signalId];
	},
	doReferesh: function() {
		return _requestReferesh;
	},
	isOffline: function() {
		return _offline;
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

			case ActionTypes.REQUEST_SIGNAL_DATA_SUCCESS:
				var signalId = action.signalId;
				_signalsData[signalId] = convertSignalData(action.response);
				_requestReferesh = false;
				_offline = false;
				SignalStore.emit(CHANGE_EVENT);
				break;

			case ActionTypes.SIGNAL_VALUE_RECEIVED:
				pushNewValue(action.signalId, action.data);
				SignalStore.emit(CHANGE_EVENT);
				break;

			case ActionTypes.BACK_ONLINE:
				_requestReferesh = true;
				SignalStore.emit(CHANGE_EVENT);
				break;

			case ActionTypes.LOST_CONNECTION:
				_offline = true;
				SignalStore.emitChange(CHANGE_EVENT);
				break;

			default:
				//no op
				break;
		}
	})
});

module.exports = SignalStore;