"use strict";

var React = require('react'),
    InlineSVG = require('react-inlinesvg'),
    AppActionCreators = require('../actions/AppActionCreators'),
    Network = require('./Network'),
    Switches = require('./Switches'),
    Server = require('./Server'),
    PLC = require('./PLC'),
    Chair = require('./Chair'),
    TopologyStore = require('../stores/TopologyStore'),
    TopologyActionCreators = require('../actions/TopologyActionCreators');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var Topology = React.createClass({
  displayName: 'Topology',
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return TopologyStore.getTopology();
  },
  componentDidMount: function() {
    TopologyActionCreators.startTopologyRequest();
    TopologyStore.addChangeListener(this._onChange);    
  },
  componentWillUnmount: function() {
    TopologyActionCreators.stopTopologyRequest();    
    TopologyStore.removeChangeListener(this._onChange);    
  },
  render: function() {
    var tapId = this.context.router.getCurrentParams().tapId;

    var linesList = <g className="lines"/>;
    var lines = this.state.lines;
    if (lines !== undefined) {
      linesList = lines.map(function(one, index) {
        return(
          <line key={index} id={one.id} x1={one.x1} y1={one.y1} x2={one.x2} y2={one.y2} style={{"stroke":"rgb(255,0,0)","strokeWidth":"2","cursor":"pointer"}} />
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
          <Tag key={index} id = {one.id} transform={translate}/>
        );  
      });     
    };

    var channelsList = <g className="channels"/>;
    if (tapId == "TopologyL"){
      var channels = this.state.channels;
      if (channels !== undefined) {
        channelsList = channels.map(function(one, index) {
          return(
            <line key={index} id={one.id} x1={one.x1} y1={one.y1} x2={one.x2} y2={one.y2} style={{"stroke":"rgb(0,0,255)","strokeWidth":"2","cursor":"pointer"}} />
          );  
        });     
      };
    };  

    return (
      <div>
        <RouteHandler />
        <div className="row">
          <div className="1" style={{"textAlign": "center"}}>
            <svg version="1.1" id="to_1" x="0px" y="0px" width="80%" height="600" preserveAspectRatio="xMidYMid meet" style={{"textAlign": "center", "borderStyle":"solid","borderWidth":"2px","borderColor":"black","backgroundColor":"white"}} viewBox="0 0 900 600">
              <g className="lines">
                {linesList}
              </g>   
              <g className="channels">
                {channelsList}
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
  _onClick: function() {
    alert('Topology info');
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(TopologyStore.getTopology());
    }
  }
});

module.exports = Topology;