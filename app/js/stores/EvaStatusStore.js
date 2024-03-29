"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change';

var _status = {events: []};

var EvaStatusStore = assign({}, EventEmitter.prototype, {
  getStatus: function() {
    return _status;
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
      
      case ActionTypes.REQUEST_EVA_STATUS_SUCCESS:
        if (JSON.stringify(_status) !== JSON.stringify(action.response)) {
          _status = action.response;
          EvaStatusStore.emit(CHANGE_EVENT);
        }
        break;

      default:
        // no op
    }
  })
});

module.exports = EvaStatusStore;