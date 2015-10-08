"use strict";

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Tab = require('./Tab');

var Analysor = React.createClass({
  displayName: 'Analysor',
  render: function() {
    return (
      <div>
        <ul className="nav nav-pills nav-stacked  sub-nav">
          <Tab to="topology" params={{tapId: "Topology"}}><strong>Topology</strong></Tab>
          <Tab to="statistics" params={{tapId: "Statistics"}}><strong>Statistics</strong></Tab>
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

module.exports = Analysor;