"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change';

var _weather = {};

var WeatherStore = assign({}, EventEmitter.prototype, {
  getWeather: function() {
    return _weather;
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
    switch (action.type) {
      case ActionTypes.WEATHER_RECEIVED:
        if (JSON.stringify(_weather) !== JSON.stringify(action.response)) {
          _weather = action.response;
          WeatherStore.emit(CHANGE_EVENT);
        }
        break;
      default:
        // no op
    }
  })
});

module.exports = WeatherStore;