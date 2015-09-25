"use strict";

var ServerAPI = require('../utils/ServerAPI'),
    MessagerAPI = require('../utils/MessagerAPI'),
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes'),
    router = require('../router');

var AppActionCreators = {
  requestApplicationVersion: function() {
    ServerAPI.requestApplicationVersion();
  },
  connectServer: function() {
    ServerAPI.connectServer();
    MessagerAPI.openSocket();
  },
  disconnectServer: function() {
    ServerAPI.disconnectServer();
    MessagerAPI.closeSocket();
  },
  requestReportSettings: function(reportType) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.REQUEST_REPORT_SETTINGS,
      reportType: reportType
    });
  },
  handleReportSettingsClose: function() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLOSE_REPORT_SETTINGS
    });
  },
  setReportSettings: function(reportType, description) {
    ServerAPI.setReportSettings(reportType, description);
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLOSE_REPORT_SETTINGS
    });
    AppDispatcher.handleViewAction({
      type: ActionTypes.REPORT_SETTINGS_POSTED
    });
  },
  setScript: function(script) {
    ServerAPI.requestSetScript(script);
  },
  navigateTo: function(url, params) {
    router.transitionTo(url, params);
  },
  acknowledgeAlert: function() {
    ServerAPI.acknowledgeAlert();
  }
};

module.exports = AppActionCreators;