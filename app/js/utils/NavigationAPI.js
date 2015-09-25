"use strict";

var NavigationServerActionCreators = require('../actions/NavigationServerActionCreators');

var NavigationAPI = {
  requestNavigation: function() {
    $.get('/navigation', function(response) {
      NavigationServerActionCreators.handleNavigationSuccess(response);
    });
  }
};

module.exports = NavigationAPI;