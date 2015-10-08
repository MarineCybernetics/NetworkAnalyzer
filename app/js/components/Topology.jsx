"use strict";

var React = require('react'),
    InlineSVG = require('react-inlinesvg'),
    AppActionCreators = require('../actions/AppActionCreators'),
    Network = require('./Network'),
    Switches = require('./Switches'),
    Server = require('./Server'),
    PLC = require('./PLC'),
    Chair = require('./Chair');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var Topology = React.createClass({
  displayName: 'Topology',
  getInitialState: function() {
    console.log("getting initial state");
    return null;
  },
  componentDidMount: function() {
    
  },
  componentWillUnmount: function() {
    
  },
  render: function() {
    return (
      <div>
        <RouteHandler />
        <div className="row">
          <div className="col-lg-2 col-md-8 col-sm-10">
            <div className="row">
              <Network />
            </div>
          </div>
          <div className="1" style={{"textAlign": "center"}}>
            <svg version="1.1" id="to_1" x="0px" y="0px" width="80%" height="600" preserveAspectRatio="xMidYMid meet" style={{"textAlign": "center", "borderStyle":"solid","borderWidth":"2px","borderColor":"black","backgroundColor":"white"}} viewBox="0 0 900 600">
              <line x1="450" y1="500" x2="450" y2="10" style={{"stroke":"rgb(255,0,0)","strokeWidth":"2","cursor":"pointer"}} onClick={this._onClick} />
              <line x1="286" y1="104" x2="450" y2="104" style={{"stroke":"rgb(255,0,0)","strokeWidth":"2","cursor":"pointer"}} onClick={this._onClick} />
              <line x1="614" y1="204" x2="450" y2="204" style={{"stroke":"rgb(255,0,0)","strokeWidth":"2","cursor":"pointer"}} onClick={this._onClick} />
              <line x1="614" y1="400" x2="450" y2="400" style={{"stroke":"rgb(255,0,0)","strokeWidth":"2","cursor":"pointer"}} onClick={this._onClick} />
              <Switches id = "1" transform="translate(386, 436)"/> 
              <PLC id = "plc1" transform="translate(222, 40)" />
              <Server id = "server1" transform="translate(550, 140)" />
              <Chair id = "chair1" transform="translate(550, 336)" />
            </svg>
          </div>
        </div>  
      </div>
    );
  },
  _onClick: function() {
    alert('Topology info');
  }
});

module.exports = Topology;