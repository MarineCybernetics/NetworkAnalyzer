"use strict";

var React = require('react'),
    KEYCODE_ESC = 27,
    TopologiesStore = require('../../stores/TopologiesStore'),
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
    TopologiesStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TopologiesStore.removeChangeListener(this._onChange);
    document.body.classList.remove('hide-scrollbars');
  },
  getInitialState: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    return {
      chair: TopologiesStore.getChair(nodeId)
    };
  },
  render: function() {
    var chair = this.state.chair;
    var nodeId = this.context.router.getCurrentParams().nodeId;
    var tapId = this.context.router.getCurrentPathname();
    var resolutionRE = /TOPO-(\w+)/i;
    var match = "";
    if(tapId.match(resolutionRE) != null){
      match = tapId.match(resolutionRE)[1];
    } 
    var nmappathName = "chairnmap" + match;
    var ippathName = "chairip" + match;
    var tcppathName = "chairtcp" + match;
    var udppathName = "chairudp" + match;
    var backPath = "topo"+ match;
    return (
      <div onClick={this._onClick}>
        <div className="modal fade in" style={{display: "block"}} tabIndex="-1" role="dialog">
          <div className="modal-dialog thruster-info"  onClick={this._onModalDialogClick}>
            <div className="modal-content">
              <Header title="Chair" name={nodeId} tabIndex="1" backPath={backPath}/>
              <div className="modal-body">
                <ul className="nav nav-tabs modal-nav">
                  <Tab to= {nmappathName} params={{"nodeId": nodeId}}>Nmap</Tab>
                  <Tab to= {ippathName} params={{"nodeId": nodeId}}>IP</Tab>
                  <Tab to= {tcppathName} params={{"nodeId": nodeId}}>TCP</Tab>
                  <Tab to= {udppathName} params={{"nodeId": nodeId}}>UDP</Tab>
                </ul>
                <Metadata title="Chair"/>
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
      this.setState({
        chair: TopologiesStore.getChair(nodeId)
      });
    }
  }
});

module.exports = ChairInfo;