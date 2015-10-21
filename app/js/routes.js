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
  PLCInfo = require('./components/node/PLCInfo'),
  ServerInfo = require('./components/node/ServerInfo'),
  ChairInfo = require('./components/node/ChairInfo'),
  NetworkInfo = require('./components/node/NetworkInfo'),
  Hierarchy = require('./components/node/Hierarchy'),
  IP = require('./components/node/IP'),
  TCP = require('./components/node/TCP'),
  UDP = require('./components/node/UDP'),
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

    <Route name="topologies" path="/topologies" handler={Topologies} >
      <Route name="topo" path="/TOPO" handler={Topology}>      
          <Route name="plc" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmap" path="nmap" handler={Nmap} />
           <Route name="plcip" path="ip" handler={IP} />
           <Route name="plctcp" path="tcp" handler={TCP} />
           <Route name="plcudp" path="udp" handler={UDP} />
          </Route>
          <Route name="server" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmap" path="nmap" handler={Nmap} />
           <Route name="serverip" path="ip" handler={IP} />
           <Route name="servertcp" path="tcp" handler={TCP} />
           <Route name="serverudp" path="udp" handler={UDP} />
          </Route>
          <Route name="chair" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmap" path="nmap" handler={Nmap} />
           <Route name="chairip" path="ip" handler={IP} />
           <Route name="chairtcp" path="tcp" handler={TCP} />
           <Route name="chairudp" path="udp" handler={UDP} />
          </Route>
          <Route name="network" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchy" path="hierarchy" handler={Hierarchy} />
          </Route>
      </Route>
      <Route name="topoIP" path="/TOPO-IP" handler={Topology}>  
          <Route name="plcIP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapIP" path="nmap" handler={Nmap} />
           <Route name="plcipIP" path="ip" handler={IP} />
           <Route name="plctcpIP" path="tcp" handler={TCP} />
           <Route name="plcudpIP" path="udp" handler={UDP} />
          </Route>
          <Route name="serverIP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapIP" path="nmap" handler={Nmap} />
           <Route name="serveripIP" path="ip" handler={IP} />
           <Route name="servertcpIP" path="tcp" handler={TCP} />
           <Route name="serverudpIP" path="udp" handler={UDP} />
          </Route>
          <Route name="chairIP" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapIP" path="nmap" handler={Nmap} />
           <Route name="chairipIP" path="ip" handler={IP} />
           <Route name="chairtcpIP" path="tcp" handler={TCP} />
           <Route name="chairudpIP" path="udp" handler={UDP} />
          </Route>  
          <Route name="networkIP" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyIP" path="hierarchy" handler={Hierarchy} />
          </Route> 
      </Route>
      <Route name="topoTCP" path="/TOPO-TCP" handler={Topology}>    
          <Route name="plcTCP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapTCP" path="nmap" handler={Nmap} />
           <Route name="plcipTCP" path="ip" handler={IP} />
           <Route name="plctcpTCP" path="tcp" handler={TCP} />
           <Route name="plcudpTCP" path="udp" handler={UDP} />
          </Route>
          <Route name="serverTCP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapTCP" path="nmap" handler={Nmap} />
           <Route name="serveripTCP" path="ip" handler={IP} />
           <Route name="servertcpTCP" path="tcp" handler={TCP} />
           <Route name="serverudpTCP" path="udp" handler={UDP} />
          </Route>
          <Route name="chairTCP" path="chairTCP/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapTCP" path="nmap" handler={Nmap} />
           <Route name="chairipTCP" path="ip" handler={IP} />
           <Route name="chairtcpTCP" path="tcp" handler={TCP} />
           <Route name="chairudpTCP" path="udp" handler={UDP} />
          </Route>  
          <Route name="networkTCP" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyTCP" path="hierarchy" handler={Hierarchy} />
          </Route>
      </Route>
      <Route name="topoUDP" path="/TOPO-UDP" handler={Topology}>    
          <Route name="plcUDP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapUDP" path="nmap" handler={Nmap} />
           <Route name="plcipUDP" path="ip" handler={IP} />
           <Route name="plctcpUDP" path="tcp" handler={TCP} />
           <Route name="plcudpUDP" path="udp" handler={UDP} />
          </Route>
          <Route name="serverUDP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapUDP" path="nmap" handler={Nmap} />
           <Route name="serveripUDP" path="ip" handler={IP} />
           <Route name="servertcpUDP" path="tcp" handler={TCP} />
           <Route name="serverudpUDP" path="udp" handler={UDP} />
          </Route>
          <Route name="chairUDP" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapUDP" path="nmap" handler={Nmap} />
           <Route name="chairipUDP" path="ip" handler={IP} />
           <Route name="chairtcpUDP" path="tcp" handler={TCP} />
           <Route name="chairudpUDP" path="udp" handler={UDP} />
          </Route> 
          <Route name="networkUDP" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyUDP" path="hierarchy" handler={Hierarchy} />
          </Route>
      </Route>
      <Redirect from="/topologies" to="/TOPO" />
    </Route>

    <Redirect from="/" to="topologies" />

  </Route>
);

module.exports = routes;