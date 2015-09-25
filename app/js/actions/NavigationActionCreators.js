"use strict";

var NavigationAPI = require('../utils/NavigationAPI');

var NavigationActionCreators = {
  requestNavigation: function() {
    NavigationAPI.requestNavigation();
  }
};

module.exports = NavigationActionCreators;