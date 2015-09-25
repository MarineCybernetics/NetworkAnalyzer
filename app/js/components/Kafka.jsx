"use strict";

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Tab = require('./Tab');

var Kafka = React.createClass({
  displayName: 'Kafka',
  render: function() {
    return (
      <div>
        <ul className="nav nav-pills nav-stacked  sub-nav">
          <Tab to="kafkainfo" params={{clusterId: "internalCluster"}}><strong>Internal cluster</strong></Tab>
          <Tab to="kafkainfo" params={{clusterId: "externalCluster"}}><strong>External cluster</strong></Tab>
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

module.exports = Kafka;