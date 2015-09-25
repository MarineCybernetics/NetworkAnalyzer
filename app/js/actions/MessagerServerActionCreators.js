"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
  ActionTypes = require('../constants/ActionTypes');

var MessagerServerActionCreators = {
  handleMessagerReceived: function(response) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.MESSAGER_RECEIVED,
      response: response
    });
    AppDispatcher.handleServerAction({
      type: ActionTypes.WEATHER_RECEIVED,
      response: response.weather
    });
    AppDispatcher.handleServerAction({
      type: ActionTypes.ENGINE_STATUS_RECEIVED,
      response: response.engineStatus
    });
  }
};

module.exports = MessagerServerActionCreators;