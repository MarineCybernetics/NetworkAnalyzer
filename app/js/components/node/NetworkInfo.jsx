"use strict";

var React = require('react'),
    KEYCODE_ESC = 27,
    hotkey = require('react-hotkey'),
    Header = require('./Header'),
    Footer = require('./Footer'),
    Metadata = require('./Metadata'),
    AppActionCreators = require('../../actions/AppActionCreators'),
    Tab = require('../Tab');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var NetworkInfo = React.createClass({
  displayName: "NetworkInfo",
  mixins: [hotkey.Mixin('handleHotkey')],
  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function() {
    document.body.classList.add('hide-scrollbars');
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
    document.body.classList.remove('hide-scrollbars');
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var networkId = this.context.router.getCurrentParams().networkId;
    var tapId = this.context.router.getCurrentPathname();
    var resolutionRE = /TOPO-(\w+)/i;
    var match = "";
    if(tapId.match(resolutionRE) != null){
      match = tapId.match(resolutionRE)[1];
    } 
    var pathName_h = "networkhierarchy" + match;
    var pathName_s = "networksummary" + match;
    var backPath = "topo"+ match;
    return (
      <div onClick={this._onClick}>
        <div className="modal fade in" style={{display: "block"}} tabIndex="-1" role="dialog">
          <div className="modal-dialog thruster-info"  onClick={this._onModalDialogClick}>
            <div className="modal-content">
              <Header title="Network" name={networkId} tabIndex="1" backPath={backPath}/>
              <div className="modal-body">
                <ul className="nav nav-tabs modal-nav">
                  <Tab to= {pathName_h} params={{"networkId": networkId}}>Hierarchy</Tab>
                  <Tab to= {pathName_s} params={{"networkId": networkId}}>Summary</Tab>
                </ul>
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
    var tapId = this.context.router.getCurrentPathname();
    var resolutionRE = /TOPO-(\w+)/i;
    var match = "";
    if(tapId.match(resolutionRE) != null){
      match = tapId.match(resolutionRE)[1];
    } 
    var backPath = "topo" + match;
    if (evt.keyCode === KEYCODE_ESC) {
      AppActionCreators.navigateTo(backPath);
    }
  },
  _onClick: function() {
    var tapId = this.context.router.getCurrentPathname();
    var resolutionRE = /TOPO-(\w+)/i;
    var match = "";
    if(tapId.match(resolutionRE) != null){
      match = tapId.match(resolutionRE)[1];
    } 
    var backPath = "topo" + match;
    AppActionCreators.navigateTo(backPath);
  },
  _onModalDialogClick: function(evt) {
    evt.stopPropagation();
  }
});

module.exports = NetworkInfo;