"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
  ActionTypes = require('../constants/ActionTypes');

var NavigationServerActionCreators = {
  handleNavigationSuccess: function(response) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.REQUEST_NAVIGATION_SUCCESS,
      response: response
    });
  }
};

module.exports = NavigationServerActionCreators;