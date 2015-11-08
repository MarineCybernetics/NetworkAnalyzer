"use strict";
var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    _ = require('underscore');

var _components = [];

var TopologiesStore = assign({}, EventEmitter.prototype, {
  getComponents: function() {
    return _components;
  },
  getPLC: function(id) {
    return _.find(_components, function(one) {
      return one.id === id
    });
  },
  getServer: function(id) {
    return _.find(_components, function(one) {
      return one.id === id
    });
  },
  getChair: function(id) {
    return _.find(_components, function(one) {
      return one.id === id
    });
  },
  getNetwork: function(id) {
    return _.find(_components, function(one) {
      return one.id === id
    });
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

      case ActionTypes.COMPONEN_RECEIVED:
        _components = action.response;
        TopologiesStore.emit(CHANGE_EVENT);
        break;

      default:
        // no op
    }
  })
});

module.exports = TopologiesStore;