"use strict";

var WebSocketFactory = require('./websocket'),
  	MessagerServerActionCreators = require('../actions/MessagerServerActionCreators');

var _messagerSocket = WebSocketFactory.create('messager');
var _subscription;

module.exports = {
  openSocket: function() {
    _messagerSocket.open();
    _subscription = _messagerSocket.subscribe('messager', MessagerServerActionCreators.handleMessagerReceived);
  },
  closeSocket: function() {
    _messagerSocket.unsubscribe(_subscription);
    _messagerSocket.close();
  }
};