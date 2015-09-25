"use strict";

var React = require('react'),
    KEYCODE_ESC = 27,
    VesselStore = require('../../stores/VesselStore'),
    hotkey = require('react-hotkey'),
    Header = require('./Header'),
    Footer = require('./Footer'),
    Metadata = require('./Metadata'),
    Status = require('./Status'),
    AppActionCreators = require('../../actions/AppActionCreators'),
    Tab = require('../Tab');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var ThrusterInfo = React.createClass({
  displayName: "ThrusterInfo",
  mixins: [hotkey.Mixin('handleHotkey')],
  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function() {
    document.body.classList.add('hide-scrollbars');
  },
  componentDidMount: function() {
    var thrusterId = this.context.router.getCurrentParams().thrusterId;
    VesselStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    VesselStore.removeChangeListener(this._onChange);
    document.body.classList.remove('hide-scrollbars');
  },
  getInitialState: function() {
    var thrusterId = this.context.router.getCurrentParams().thrusterId;
    return {
      thruster: VesselStore.getThruster(thrusterId)
    };
  },
  render: function() {
    var thruster = this.state.thruster;
    var thrusterId = this.context.router.getCurrentParams().thrusterId;
    return (
      <div onClick={this._onClick}>
        <div className="modal fade in" style={{display: "block"}} tabIndex="-1" role="dialog">
          <div className="modal-dialog thruster-info"  onClick={this._onModalDialogClick}>
            <div className="modal-content">
              <Header
                title="Thruster"
                name={thrusterId} tabIndex="1"/>
              <div className="modal-body">
                <ul className="nav nav-tabs modal-nav">
                  <Tab to="status" params={{"thrusterId": thrusterId}}>Status</Tab>
                  <Tab to="contacts" params={{"thrusterId": thrusterId}}>Contacts</Tab>
                  <Tab to="documents" params={{"thrusterId": thrusterId}}>Documents</Tab>
                </ul>
                <Metadata />
                <RouteHandler />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in" />
      </div>
    );
  },
  handleHotkey: function(evt) {
    if (evt.keyCode === KEYCODE_ESC) {
      AppActionCreators.navigateTo('vessel');
    }
  },
  _onClick: function() {
    AppActionCreators.navigateTo('vessel');
  },
  _onModalDialogClick: function(evt) {
    evt.stopPropagation();
  },
  _onChange: function() {
    var thrusterId = this.context.router.getCurrentParams().thrusterId;
    if (this.isMounted()) {
      this.setState({
        thruster: VesselStore.getThruster(thrusterId)
      });
    }
  }
});

module.exports = ThrusterInfo;