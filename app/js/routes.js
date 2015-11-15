"use strict";
var React = require('react'),
  Router = require('react-router'),
  App = require('./components/App'),
  Topologies = require('./components/Topologies'),
  Topo = require('./components/Topo'),
  TopoLinkMeas = require('./components/TopoLinkMeas'),
  TopoTCP = require('./components/TopoTCP'),
  TopoUDP = require('./components/TopoUDP'),
  SwitchesInfo = require('./components/node/SwitchesInfo'),  
  PLCInfo = require('./components/node/PLCInfo'),
  ServerInfo = require('./components/node/ServerInfo'),
  ChairInfo = require('./components/node/ChairInfo'),
  NetworkInfo = require('./components/node/NetworkInfo'),
  Hierarchy = require('./components/node/Hierarchy'),
  Summary = require('./components/node/Summary'),  
  TCP = require('./components/node/TCP'),
  UDP = require('./components/node/UDP'),
  Nmap = require('./components/node/Nmap'),
  SNMP = require('./components/node/SNMP');

var Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/" handler={App}>

    <Route name="topologies" path="/topologies" handler={Topologies} >
      <Route name="topo" path="/TOPO" handler={Topo}>      
          <Route name="plc" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmap" path="nmap" handler={Nmap} />
           <Route name="plctcp" path="tcp" handler={TCP} />
           <Route name="plcudp" path="udp" handler={UDP} />
          </Route>
          <Route name="server" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmap" path="nmap" handler={Nmap} />
           <Route name="servertcp" path="tcp" handler={TCP} />
           <Route name="serverudp" path="udp" handler={UDP} />
          </Route>
          <Route name="chair" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmap" path="nmap" handler={Nmap} />
           <Route name="chairtcp" path="tcp" handler={TCP} />
           <Route name="chairudp" path="udp" handler={UDP} />
          </Route>
          <Route name="switches" path="switches/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmap" path="nmap" handler={Nmap} />
           <Route name="switchestcp" path="tcp" handler={TCP} />
           <Route name="switchesudp" path="udp" handler={UDP} />
           <Route name="switchessnmp" path="snmp" handler={SNMP} />
          </Route>          
          <Route name="network" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchy" path="hierarchy" handler={Hierarchy} />
           <Route name="networksummary" path="summmary" handler={Summary} />
          </Route>
      </Route>
      <Route name="topoLinkMeas" path="/TOPO-LinkMeas" handler={TopoLinkMeas}>  
          <Route name="plcLinkMeas" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapLinkMeas" path="nmap" handler={Nmap} />
           <Route name="plctcpLinkMeas" path="tcp" handler={TCP} />
           <Route name="plcudpLinkMeas" path="udp" handler={UDP} />
          </Route>
          <Route name="serverLinkMeas" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapLinkMeas" path="nmap" handler={Nmap} />
           <Route name="servertcpLinkMeas" path="tcp" handler={TCP} />
           <Route name="serverudpLinkMeas" path="udp" handler={UDP} />
          </Route>
          <Route name="chairLinkMeas" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapLinkMeas" path="nmap" handler={Nmap} />
           <Route name="chairtcpLinkMeas" path="tcp" handler={TCP} />
           <Route name="chairudpLinkMeas" path="udp" handler={UDP} />
          </Route>  
          <Route name="switchesLinkMeas" path="switches/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmapLinkMeas" path="nmap" handler={Nmap} />
           <Route name="switchestcpLinkMeas" path="tcp" handler={TCP} />
           <Route name="switchesudpLinkMeas" path="udp" handler={UDP} />
           <Route name="switchessnmpLinkMeas" path="snmp" handler={SNMP} />
          </Route>           
          <Route name="networkLinkMeas" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyLinkMeas" path="hierarchy" handler={Hierarchy} />
           <Route name="networksummaryLinkMeas" path="summary" handler={Summary} />
          </Route> 
      </Route>
      <Route name="topoTCP" path="/TOPO-TCP" handler={TopoTCP}>    
          <Route name="plcTCP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapTCP" path="nmap" handler={Nmap} />
           <Route name="plctcpTCP" path="tcp" handler={TCP} />
           <Route name="plcudpTCP" path="udp" handler={UDP} />
          </Route>
          <Route name="serverTCP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapTCP" path="nmap" handler={Nmap} />
           <Route name="servertcpTCP" path="tcp" handler={TCP} />
           <Route name="serverudpTCP" path="udp" handler={UDP} />
          </Route>
          <Route name="chairTCP" path="chairTCP/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapTCP" path="nmap" handler={Nmap} />
           <Route name="chairtcpTCP" path="tcp" handler={TCP} />
           <Route name="chairudpTCP" path="udp" handler={UDP} />
          </Route>  
          <Route name="switchesTCP" path="switchesTCP/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmapTCP" path="nmap" handler={Nmap} />
           <Route name="switchestcpTCP" path="tcp" handler={TCP} />
           <Route name="switchesudpTCP" path="udp" handler={UDP} />
           <Route name="switchessnmpTCP" path="snmp" handler={SNMP} />
          </Route>           
          <Route name="networkTCP" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyTCP" path="hierarchy" handler={Hierarchy} />
           <Route name="networksummaryTCP" path="summary" handler={Summary} />
          </Route>
      </Route>
      <Route name="topoUDP" path="/TOPO-UDP" handler={TopoUDP}>    
          <Route name="plcUDP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapUDP" path="nmap" handler={Nmap} />
           <Route name="plctcpUDP" path="tcp" handler={TCP} />
           <Route name="plcudpUDP" path="udp" handler={UDP} />
          </Route>
          <Route name="serverUDP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapUDP" path="nmap" handler={Nmap} />
           <Route name="servertcpUDP" path="tcp" handler={TCP} />
           <Route name="serverudpUDP" path="udp" handler={UDP} />
          </Route>
          <Route name="chairUDP" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapUDP" path="nmap" handler={Nmap} />
           <Route name="chairtcpUDP" path="tcp" handler={TCP} />
           <Route name="chairudpUDP" path="udp" handler={UDP} />
          </Route> 
          <Route name="switchesUDP" path="switches/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmapUDP" path="nmap" handler={Nmap} />
           <Route name="switchestcpUDP" path="tcp" handler={TCP} />
           <Route name="switchesudpUDP" path="udp" handler={UDP} />
           <Route name="switchessnmpUDP" path="snmp" handler={SNMP} />
          </Route>           
          <Route name="networkUDP" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyUDP" path="hierarchy" handler={Hierarchy} />
           <Route name="networksummaryUDP" path="summary" handler={Summary} />
          </Route>
      </Route>
      <Redirect from="/topologies" to="/TOPO" />
    </Route>

    <Redirect from="/" to="topologies" />

  </Route>
);

module.exports = routes;