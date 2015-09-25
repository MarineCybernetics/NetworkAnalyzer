"use strict";

var WebSocketFactory = require('./websocket'),
  connectionErrorHandler = require('../components/ConnectionErrorHandler'),
  AppServerActionCreators = require('../actions/AppServerActionCreators');

var _socket = WebSocketFactory.create('websocket'), _subscription;

module.exports = {
  requestReset: function() {
    $.get('/reset');
  },
  requestCancelAll: function() {
    $.get('/cancelall');
  },
  requestRunAll: function(mode) {
    var params = {};
    params.mode = mode;
    $.post('/runall', $.param(params));
  },
  requestRunTests: function(keys, mode) {
    var params = {};
    params.ids = JSON.stringify(keys);
    params.mode = mode;
    $.post('/runtests', $.param(params));
  },
  requestSetScript: function(script) {
    var params = {};
    params.script = script;
    $.post('/setscript', $.param(params));
  },
  connectServer: function() {
    _socket.open();
    _socket.echo(connectionErrorHandler);
    _subscription = _socket.subscribe('websocket', AppServerActionCreators.handleWebsocketMessageReceived);
  },
  disconnectServer: function() {
    _socket.unsubscribe(_subscription);
    _socket.close();
  },
  requestApplicationVersion: function() {
    $.get('/applicationversion', function(response) {
      AppServerActionCreators.handleApplicationVersionSuccess(response);
    });
  },
  setReportSettings: function(type, description) {
    var data = {
      type: type,
      description: description
    };
    $.post('/setreportsettings', data);
  },
  acknowledgeAlert: function() {
    $.post('/acknowledgealert');
  }
};