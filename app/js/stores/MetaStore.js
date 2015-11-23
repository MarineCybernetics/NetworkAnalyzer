"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change';

var _metaData = {};

var MetaStore = assign({}, EventEmitter.prototype, {
  getMetaData: function() {
    return _metaData;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  cleanMetaData: function() {
    _metaData = {};
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

      case ActionTypes.REQUEST_META_DATA_SUCCESS:
        _metaData = action.response;
        MetaStore.emit(CHANGE_EVENT);
        break;

      default:
        //no op
    }
  })
});

module.exports = MetaStore;