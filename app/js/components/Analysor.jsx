"use strict";

var React = require('react'),
    InlineSVG = require('react-inlinesvg'),
    AppActionCreators = require('../actions/AppActionCreators'),
    Switches = require('./Switches'),
    Server = require('./Server'),
    PLC = require('./PLC');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var Analysor = React.createClass({
  displayName: 'Analysor',
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
          <div className="col-lg-8 col-md-12" style={{"text-Align": "center"}}>
            <svg version="1.1" id="to_1" x="0px" y="0px" width="1000" height="500" style={{"border-style":"solid","border-width":"2px","border-color":"black","background":"white"}} viewBox="0 0 1000 500">
              <line x1="64" y1="364" x2="464" y2="436" style={{"stroke":"rgb(255,0,0)","stroke-width":"2","cursor":"pointer"}} onClick={this._onClick} />
              <line x1="364" y1="64" x2="464" y2="436" style={{"stroke":"rgb(255,0,0)","stroke-width":"2","cursor":"pointer"}} onClick={this._onClick} />
              <Switches id = "1" transform="translate(400, 372)"/> 
              <PLC id = "plc1" transform="translate(0, 300)" />
              <Server id = "3" transform="translate(300, 0)" />
            </svg>
          </div>
      </div>
    );
  },
  _onClick: function() {
    alert('Analysor info');
  }
});

module.exports = Analysor;