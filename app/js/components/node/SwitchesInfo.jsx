"use strict";

var React = require('react'),
    KEYCODE_ESC = 27,
    MetaStore = require('../../stores/MetaStore'),
    hotkey = require('react-hotkey'),
    Header = require('./Header'),
    Footer = require('./Footer'),
    Metadata = require('./Metadata'),
    AppActionCreators = require('../../actions/AppActionCreators'),
    Tab = require('../Tab'),
    MetaActionCreators = require('../../actions/MetaActionCreators');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var SwitchesInfo = React.createClass({
  displayName: "SwitchesInfo",
  mixins: [hotkey.Mixin('handleHotkey')],
  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function() {
    document.body.classList.add('hide-scrollbars');
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    MetaActionCreators.startMetaDataRequest(nodeId);
    MetaStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    MetaActionCreators.stopMetaDataRequest();
    MetaStore.removeChangeListener(this._onChange);
    document.body.classList.remove('hide-scrollbars');
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    var tapId = this.context.router.getCurrentPathname();
    var resolutionRE = /TOPO-(\w+)/i;
    var match = "";
    if(tapId.match(resolutionRE) != null){
      match = tapId.match(resolutionRE)[1];
    } 
    var snmppathName = "switchessnmp" + match;
    var nmappathName = "switchesnmap" + match;
    var tcppathName = "switchestcp" + match;
    var udppathName = "switchesudp" + match;
    var backPath = "topo"+ match;
    return (
      <div onClick={this._onClick}>
        <div className="modal fade in" style={{display: "block"}} tabIndex="-1" role="dialog">
          <div className="modal-dialog thruster-info"  onClick={this._onModalDialogClick}>
            <div className="modal-content">
              <Header title="Switches" name={nodeId} tabIndex="1" backPath={backPath}/>
              <div className="modal-body">
                <ul className="nav nav-tabs modal-nav">
                  <Tab to= {snmppathName} params={{"nodeId": nodeId}}>SNMP</Tab>
                  <Tab to= {nmappathName} params={{"nodeId": nodeId}}>Nmap</Tab>         
                  <Tab to= {tcppathName} params={{"nodeId": nodeId}}>TCP</Tab>
                  <Tab to= {udppathName} params={{"nodeId": nodeId}}>UDP</Tab>
                </ul>
                <Metadata title="Switch" stype={this.state.stype} Vendor={this.state.Vendor} Desc={this.state.Desc} />
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
  },
  _onChange: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    if (this.isMounted()) {
      this.setState(MetaStore.getMetaData());
    }
  }
});

module.exports = SwitchesInfo;