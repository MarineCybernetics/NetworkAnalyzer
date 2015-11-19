"use strict";

var React = require('react'),
    InlineSVG = require('react-inlinesvg'),
    AppActionCreators = require('../actions/AppActionCreators'),
    Switches = require('./Switches'),
    Server = require('./Server'),
    PLC = require('./PLC'),
    Chair = require('./Chair'),
    TopologyStore = require('../stores/TopologyStore'),
    TopologyActionCreators = require('../actions/TopologyActionCreators');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Network = React.createClass({
  displayName: 'Network',
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    return (
      <line tapId={this.props.tapId} key={this.props.key} id={this.props.id} x1={this.props.x1} y1={this.props.y1} x2={this.props.x2} y2={this.props.y2} onClick={this._onClick} style={{"stroke":"rgb(255,0,0)","strokeWidth":"3","cursor":"pointer"}} />
    );
  },
  _onClick: function() { 
    var pathName = "networkLinkMeas";
    AppActionCreators.navigateTo(pathName, {networkId: this.props.id});
  }
});


var TopoLinkMeas = React.createClass({
  displayName: 'TopoLinkMeas',
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return TopologyStore.getTopology();
  },
  componentDidMount: function() {
    TopologyActionCreators.startTopoLinkMeasRequest();
    TopologyStore.addChangeListener(this._onChange);  
    $('[data-toggle="tooltip"]').tooltip();  
    $('[data-toggle="popover"]').popover();
  },
  componentWillUnmount: function() {
    TopologyActionCreators.stopTopoRequest();    
    TopologyStore.removeChangeListener(this._onChange);    
  },
  render: function() {
    var tapId = this.context.router.getCurrentPathname();

    var linesList = <g className="lines"/>;
    var lines = this.state.lines;
    if (lines !== undefined) {
      linesList = lines.map(function(one, index) {
          var l;
            if (one.id == "capture"){
              l = <Network tapId={tapId} key={index} id={one.id} x1={one.x1} y1={one.y1} x2={one.x2} y2={one.y2}/>
            }else{
              l = <line tapId={tapId} key={index} id={one.id} x1={one.x1} y1={one.y1} x2={one.x2} y2={one.y2} style={{"stroke":"rgb(255,0,0)","strokeWidth":"1"}} />
            }

          return(
            l
          );   
      });     
    };

    var nodesList = <g className="nodes"/>;
    var nodes = this.state.nodes;
    if (nodes !== undefined) {
      nodesList = nodes.map(function(one, index) {
        var translate = "translate(" + one.x + "," + one.y +")";
        var Tag;
        switch(one.type) {
          case "PLC":
            Tag = PLC; break;
          case "Server":
            Tag = Server; break;
          case "Chair":
            Tag = Chair; break;
          case "Switches":
            Tag = Switches; break;
          default:
            Tag = PLC; 
        }
        return(
          <g>
            <Tag key={index} id = {one.id} transform={translate} tapId={tapId} IP={one.IP}/>
          </g>  
        );  
      });     
    };

    var linkmeasList = <g className="linkmeas"/>;
    var linkmeas = this.state.linkmeas;
    if (linkmeas !== undefined) {
        linkmeasList = linkmeas.map(function(one, index) {
          $('[data-toggle="popover"]').popover();
          var content = '<table style ="border: 1px solid pink; width: 90%">' + "<tr><td colspan='3' style='background:pink'>TCPmeas: BandWidth</td></tr>" + one.tcpinfo + "<tr><td colspan='3' style='background:pink'>UDPmeas: BandWidth/Jitter/Loss</td></tr>" + one.udpinfo + "</table>";
          return(
            <line tapId={tapId} key={index} id={one.id} x1={one.x1} y1={one.y1} x2={one.x2} y2={one.y2} style={{"stroke":"rgb(0,255,255)","strokeWidth":"2","cursor":"pointer"}} data-trigger="click focus" data-template='<div class="popover" style= "font-size:9.5pt; width: 400px; max-width:400px; border: 1px dotted red">
<div class="arrow"></div><div class="popover-content" style= "font-size:9.5pt; width:400px; max-width:400px"></div></div>' data-html = "true" data-placement="left" data-container="#topo" data-toggle="popover" title="TCP_COV Info" data-content={content} data-animation="true"/>
          );  
        });     
    };

    return (
      <div id = "topo">
        <RouteHandler />
        <div className="row">
          <div className="1" style={{"textAlign": "center"}}>
            <svg version="1.1" id="to_1" x="0px" y="0px" width="80%" height="600" preserveAspectRatio="xMidYMid meet" style={{"textAlign": "center", "borderStyle":"solid","borderWidth":"2px","borderColor":"black","backgroundColor":"white"}} viewBox="0 0 900 600">
              <g className="lines">
                {linesList}
              </g>
              <g className="linkmeas">
                {linkmeasList}
              </g>     
              <g className="channels">
              </g>         
              <g className="nodes">
                {nodesList}
              </g>            
            </svg>
          </div>
        </div>  
      </div>
    );      
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(TopologyStore.getTopology());
    }
  }
});

module.exports = TopoLinkMeas;