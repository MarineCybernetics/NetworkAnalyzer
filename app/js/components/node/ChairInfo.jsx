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

var ChairInfo = React.createClass({
  displayName: "ChairInfo",
  mixins: [hotkey.Mixin('handleHotkey')],
  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function() {
    document.body.classList.add('hide-scrollbars');
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    AnalysorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AnalysorStore.removeChangeListener(this._onChange);
    document.body.classList.remove('hide-scrollbars');
  },
  getInitialState: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    return {
      chair: AnalysorStore.getChair(nodeId)
    };
  },
  render: function() {
    var chair = this.state.chair;
    var nodeId = this.context.router.getCurrentParams().nodeId;
    return (
      <div onClick={this._onClick}>
        <div className="modal fade in" style={{display: "block"}} tabIndex="-1" role="dialog">
          <div className="modal-dialog thruster-info"  onClick={this._onModalDialogClick}>
            <div className="modal-content">
              <Header title="Chair" name={nodeId} tabIndex="1"/>
              <div className="modal-body">
                <ul className="nav nav-tabs modal-nav">
                  <Tab to="chairnmap" params={{"nodeId": nodeId}}>Nmap</Tab>
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
      AppActionCreators.navigateTo('topology');
    }
  },
  _onClick: function() {
    AppActionCreators.navigateTo('topology');
  },
  _onModalDialogClick: function(evt) {
    evt.stopPropagation();
  },
  _onChange: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    if (this.isMounted()) {
      this.setState({
        chair: AnalysorStore.getChair(nodeId)
      });
    }
  }
});

module.exports = ChairInfo;