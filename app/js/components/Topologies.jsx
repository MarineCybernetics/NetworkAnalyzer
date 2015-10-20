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
          <Tab to="topo" params={{tapId: "TOPO"}}><strong>TOPO</strong></Tab>
          <Tab to="topoIP" params={{tapId: "TOPO-IP"}}><strong>TOPO-IP</strong></Tab>
          <Tab to="topoTCP" params={{tapId: "TOPO-TCP"}}><strong>TOPO-TCP</strong></Tab>
          <Tab to="topoUDP" params={{tapId: "TOPO-UDP"}}><strong>TOPO-UDP</strong></Tab>
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