"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
  ActionTypes = require('../constants/ActionTypes');

var AppServerActionCreators = {
  handleApplicationVersionSuccess: function(response) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.APPLICATION_VERSION_RECEIVED,
      response: response
    });
  },
  handleWebsocketMessageReceived: function(response) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.WEBSOCKET_MESSAGE_RECEIVED,
      response: response
    });
  }
};

module.exports = AppServerActionCreators;