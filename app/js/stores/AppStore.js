"use strict";
var AppDispatcher = require('../dispatcher/AppDispatcher'),
  ActionTypes = require('../constants/ActionTypes'),
  EventEmitter = require('events').EventEmitter,
  assign = require('object-assign'),
  CHANGE_EVENT = 'change',
  _ = require('underscore');

var _applicationVersion = "",
  _displayAlertMessageDialog = false,
  _alert = {};

var AppStore = assign({}, EventEmitter.prototype, {
  getApplicationVersion: function() {
    return _applicationVersion;
  },
  getOpenAlertMessageDialog: function() {
    return _displayAlertMessageDialog;
  },
  getAlert: function() {
    return _alert;
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

      case ActionTypes.APPLICATION_VERSION_RECEIVED:
        _applicationVersion = action.response.version;
        AppStore.emit(CHANGE_EVENT);
        break;

      case ActionTypes.MESSAGER_RECEIVED:
        _alert = action.response.alert;
        if (_alert.message) {
          _displayAlertMessageDialog = true;
          AppStore.emitChange(CHANGE_EVENT);
        }
        if (!_alert.message && _displayAlertMessageDialog) {
          _displayAlertMessageDialog = false;
          AppStore.emitChange(CHANGE_EVENT);
        }
        break;

      default:
        // no op
    }
  })
});

module.exports = AppStore;