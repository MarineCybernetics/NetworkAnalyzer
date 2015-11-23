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
    var pathName = "network";
    AppActionCreators.navigateTo(pathName, {networkId: this.props.id});
  }
});


var Topo = React.createClass({
  displayName: 'Topo',
  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function() {
    $('[data-toggle="tooltip"]').tooltip();     
  },
  getInitialState: function() {
    $('[data-toggle="tooltip"]').tooltip(); 
    return TopologyStore.getTopology();
  },
  componentDidMount: function() {
    TopologyActionCreators.startTopoRequest();
    TopologyStore.addChangeListener(this._onChange); 
    $('[data-toggle="tooltip"]').tooltip();   
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
            <Tag key={index} id = {one.id} transform={translate} tapId={tapId} IP={one.IP} stype={one.stype} vendor={one.Vendor} desc={one.Desc}/>
          </g>  
        );  
      });     
    };

    return (
      <div id = "topo">
        <RouteHandler />
        <div className="row">
          <div className="1" style={{"textAlign": "center"}}>
            <svg version="1.1" id="to_1" x="0px" y="0px" width="80%" height="90%" preserveAspectRatio="xMidYMid meet" style={{"textAlign": "center", "borderStyle":"solid","borderWidth":"2px","borderColor":"black","backgroundColor":"white"}} viewBox="0 0 900 600">
              <g className="lines">
                {linesList}
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

module.exports = Topo;