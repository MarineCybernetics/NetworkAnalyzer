"use strict";
var React = require('react'),
  Router = require('react-router'),
  Kafka = require('./components/Kafka'),
  KafkaInfo = require('./components/KafkaInfo'),
  Vessel = require('./components/Vessel'),
  App = require('./components/App'),
  Charts = require('./components/Charts'),
  ThrusterInfo = require('./components/thruster/ThrusterInfo'),
  Status = require('./components/thruster/Status'),
  Contacts = require('./components/thruster/Contacts'),
  Documents = require('./components/thruster/Documents');

var Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="vessel" handler={Vessel}>
      <Route name="thruster" path="/vessel/thruster/:thrusterId" handler={ThrusterInfo}>
        <DefaultRoute name="status" handler={Status} />
        <Route name="contacts" path="contacts" handler={Contacts} />
        <Route name="documents" path="documents" handler={Documents} />
      </Route>
    </Route>
    <Route name="kafka" handler={Kafka}>
      <Route name="kafkainfo" path="/kafka/:clusterId" handler={KafkaInfo} />
      <Redirect from="/kafka" to="/kafka/internalCluster" />
    </Route>
    <Route name="charts" handler={Charts} />
    <Redirect from="/" to="vessel" />
  </Route>
);

module.exports = routes;