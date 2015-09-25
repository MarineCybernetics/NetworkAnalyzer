"use strict";

var React = require('react'),
  Router = require('react-router'),
  AppStore = require('../stores/AppStore'),
  Navigation = require('./Navigation'),
  AppActionCreators = require('../actions/AppActionCreators'),
  hotkey = require('react-hotkey'),
  _ = require('underscore'),
  KeyEventParser = require('../services/KeyEventParser'),
  AlertMessageDialog = require('./AlertMessageDialog');


var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  displayName: "App",
  mixins: [hotkey.Mixin('handleHotkey')],
  getInitialState: function() {
    return {
      applicationVersion: AppStore.getApplicationVersion(),
      openAlertMessageDialog: AppStore.getOpenAlertMessageDialog(),
      alert: AppStore.getAlert()
    };
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
    AppActionCreators.requestApplicationVersion();
    AppActionCreators.connectServer();
    hotkey.activate('keydown');
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
    hotkey.disable();
    AppActionCreators.disconnectServer();
  },
  render: function() {
    var AlertMessageModal = this.state.openAlertMessageDialog ? <AlertMessageDialog alert={this.state.alert} /> : null;

    return (
      <div>
        {AlertMessageModal}
        <Navigation applicationVersion={this.state.applicationVersion} />
        <RouteHandler />
      </div>
    );
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState({
        applicationVersion: AppStore.getApplicationVersion(),
        openAlertMessageDialog: AppStore.getOpenAlertMessageDialog(),
        alert: AppStore.getAlert()
      });
    }
  },
  handleHotkey: function(evt) {
    var buttons = KeyEventParser.getButtonsPressed(evt);
    if (_.isEqual(['Control', 'Alt', 'K'], buttons)) {
      AppActionCreators.navigateTo('kafka');;
    }
    if (_.isEqual(['Control', 'Alt', 'C'], buttons)) {
      AppActionCreators.navigateTo('charts');;
    }
    if (_.isEqual(['Control', 'Alt', 'V'], buttons)) {
      AppActionCreators.navigateTo('vessel');;
    }
  }
});

module.exports = App;