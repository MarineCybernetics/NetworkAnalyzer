"use strict";

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Tab = require('./Tab');

var Topologies = React.createClass({
  displayName: 'Topologies',
  render: function() {
    return (
      <div>
        <ul className="nav nav-pills nav-stacked  sub-nav">
          <Tab to="topologyO" params={{tapId: "TopologyO"}}><strong>TopologyO</strong></Tab>
          <Tab to="topologyL" params={{tapId: "TopologyL"}}><strong>TopologyL</strong></Tab>
          <Tab to="topologyT" params={{tapId: "TopologyT"}}><strong>TopologyT</strong></Tab>
        </ul>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">
            </div>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Topologies;