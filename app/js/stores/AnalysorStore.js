"use strict";
var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    _ = require('underscore');

var _nmap = [];

var AnalysorStore = assign({}, EventEmitter.prototype, {
  getnmap: function() {
    return _nmap;
  },
  getPLC: function(id) {
    return _.find(_nmap, function(one) {
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

      case ActionTypes.NMAP_RECEIVED:
        _nmap = action.response;
        AnalysorStore.emit(CHANGE_EVENT);
        break;

      default:
        // no op
    }
  })
});

module.exports = AnalysorStore;