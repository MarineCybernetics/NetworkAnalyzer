"use strict";
var AppDispatcher = require('../dispatcher/AppDispatcher'),
  ActionTypes = require('../constants/ActionTypes'),
  EventEmitter = require('events').EventEmitter,
  assign = require('object-assign'),
  CHANGE_EVENT = 'change';

var _navigation = [];

var NavigationStore = assign({}, EventEmitter.prototype, {
  getNavigation: function() {
    return _navigation;
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

      case ActionTypes.REQUEST_NAVIGATION_SUCCESS:
        _navigation = action.response;
        NavigationStore.emit(CHANGE_EVENT);
        break;

      default:
        // no op
    }
  })
});

module.exports = NavigationStore;