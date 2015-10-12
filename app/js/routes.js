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
  Documents = require('./components/thruster/Documents'),
  Topologies = require('./components/Topologies'),
  Topology = require('./components/Topology'),
  Statistics = require('./components/Statistics'),
  PLCInfo = require('./components/node/PLCInfo'),
  ServerInfo = require('./components/node/ServerInfo'),
  ChairInfo = require('./components/node/ChairInfo'),
  Nmap = require('./components/node/Nmap');

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
    
    <Route name="statistics" path="/statistics" handler={Statistics} />

    <Route name="topologies" path="/topologies" handler={Topologies} >
      <Route name="topologyO" path="/TopologyO" handler={Topology}>      
          <Route name="plcO" path="plcO/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapO" path="nmap" handler={Nmap} />
          </Route>
          <Route name="serverO" path="serverO/:nodeId" handler={ServerInfo}>
           <Route name="servernmapO" path="nmap" handler={Nmap} />
          </Route>
          <Route name="chairO" path="chairO/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapO" path="nmap" handler={Nmap} />
          </Route>
      </Route>
      <Route name="topologyL" path="/TopologyL" handler={Topology}>  
          <Route name="plcL" path="plcL/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapL" path="nmap" handler={Nmap} />
          </Route>
          <Route name="serverL" path="serverL/:nodeId" handler={ServerInfo}>
           <Route name="servernmapL" path="nmap" handler={Nmap} />
          </Route>
          <Route name="chairL" path="chairL/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapL" path="nmap" handler={Nmap} />
          </Route>    
      </Route>
      <Route name="topologyT" path="/TopologyT" handler={Topology}>    
          <Route name="plcT" path="plcT/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapT" path="nmap" handler={Nmap} />
          </Route>
          <Route name="serverT" path="serverT/:nodeId" handler={ServerInfo}>
           <Route name="servernmapT" path="nmap" handler={Nmap} />
          </Route>
          <Route name="chairT" path="chairT/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapT" path="nmap" handler={Nmap} />
          </Route>  
      </Route>
      <Redirect from="/topologies" to="/TopologyO" />
    </Route>

    <Redirect from="/" to="vessel" />

  </Route>
);

module.exports = routes;