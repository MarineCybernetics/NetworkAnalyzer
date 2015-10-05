"use strict";

var React = require('react'),
    KEYCODE_ESC = 27,
    AnalysorStore = require('../../stores/AnalysorStore'),
    hotkey = require('react-hotkey'),
    Header = require('./Header'),
    Footer = require('./Footer'),
    Metadata = require('./Metadata'),
    AppActionCreators = require('../../actions/AppActionCreators'),
    Tab = require('../Tab');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var PLCInfo = React.createClass({
  displayName: "PLCInfo",
  mixins: [hotkey.Mixin('handleHotkey')],
  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function() {
    document.body.classList.add('hide-scrollbars');
  },
  componentDidMount: function() {
    var plcId = this.context.router.getCurrentParams().plcId;
    AnalysorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AnalysorStore.removeChangeListener(this._onChange);
    document.body.classList.remove('hide-scrollbars');
  },
  getInitialState: function() {
    var plcId = this.context.router.getCurrentParams().plcId;
    return {
      plc: AnalysorStore.getPLC(plcId)
    };
  },
  render: function() {
    var plc = this.state.plc;
    var plcId = this.context.router.getCurrentParams().plcId;
    return (
      <div onClick={this._onClick}>
        <div className="modal fade in" style={{display: "block"}} tabIndex="-1" role="dialog">
          <div className="modal-dialog thruster-info"  onClick={this._onModalDialogClick}>
            <div className="modal-content">
              <Header
                title="PLC"
                name={plcId} tabIndex="1"/>
              <div className="modal-body">
                <ul className="nav nav-tabs modal-nav">
                  <Tab to="nmap" params={{"plcId": plcId}}>Nmap</Tab>
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
      AppActionCreators.navigateTo('analysor');
    }
  },
  _onClick: function() {
    AppActionCreators.navigateTo('analysor');
  },
  _onModalDialogClick: function(evt) {
    evt.stopPropagation();
  },
  _onChange: function() {
    var plcId = this.context.router.getCurrentParams().plcId;
    if (this.isMounted()) {
      this.setState({
        plc: AnalysorStore.getPLC(plcId)
      });
    }
  }
});

module.exports = PLCInfo;