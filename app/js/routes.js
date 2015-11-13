"use strict";
var React = require('react'),
  Router = require('react-router'),
  App = require('./components/App'),
  Topologies = require('./components/Topologies'),
  Topo = require('./components/Topo'),
  TopoIP = require('./components/TopoIP'),
  TopoTCP = require('./components/TopoTCP'),
  TopoUDP = require('./components/TopoUDP'),
  SwitchesInfo = require('./components/node/SwitchesInfo'),  
  PLCInfo = require('./components/node/PLCInfo'),
  ServerInfo = require('./components/node/ServerInfo'),
  ChairInfo = require('./components/node/ChairInfo'),
  NetworkInfo = require('./components/node/NetworkInfo'),
  Hierarchy = require('./components/node/Hierarchy'),
  Summary = require('./components/node/Summary'),  
  IP = require('./components/node/IP'),
  TCP = require('./components/node/TCP'),
  UDP = require('./components/node/UDP'),
  Nmap = require('./components/node/Nmap'),
  SNMP = require('./components/node/SNMP'),
  LinkMeas = require('./components/node/LinkMeas');

var Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/" handler={App}>

    <Route name="topologies" path="/topologies" handler={Topologies} >
      <Route name="topo" path="/TOPO" handler={Topo}>      
          <Route name="plc" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmap" path="nmap" handler={Nmap} />
           <Route name="plcip" path="ip" handler={IP} />
           <Route name="plctcp" path="tcp" handler={TCP} />
           <Route name="plcudp" path="udp" handler={UDP} />
           <Route name="plclinkmeas" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="server" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmap" path="nmap" handler={Nmap} />
           <Route name="serverip" path="ip" handler={IP} />
           <Route name="servertcp" path="tcp" handler={TCP} />
           <Route name="serverudp" path="udp" handler={UDP} />
           <Route name="serverlinkmeas" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="chair" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmap" path="nmap" handler={Nmap} />
           <Route name="chairip" path="ip" handler={IP} />
           <Route name="chairtcp" path="tcp" handler={TCP} />
           <Route name="chairudp" path="udp" handler={UDP} />
           <Route name="chairlinkmeas" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="switches" path="switches/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmap" path="nmap" handler={Nmap} />
           <Route name="switchesip" path="ip" handler={IP} />
           <Route name="switchestcp" path="tcp" handler={TCP} />
           <Route name="switchesudp" path="udp" handler={UDP} />
           <Route name="switchessnmp" path="snmp" handler={SNMP} />
           <Route name="switcheslinkmeas" path="linkmeas" handler={LinkMeas} />
          </Route>          
          <Route name="network" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchy" path="hierarchy" handler={Hierarchy} />
           <Route name="networksummary" path="summmary" handler={Summary} />
          </Route>
      </Route>
      <Route name="topoIP" path="/TOPO-IP" handler={TopoIP}>  
          <Route name="plcIP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapIP" path="nmap" handler={Nmap} />
           <Route name="plcipIP" path="ip" handler={IP} />
           <Route name="plctcpIP" path="tcp" handler={TCP} />
           <Route name="plcudpIP" path="udp" handler={UDP} />
           <Route name="plclinkmeasIP" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="serverIP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapIP" path="nmap" handler={Nmap} />
           <Route name="serveripIP" path="ip" handler={IP} />
           <Route name="servertcpIP" path="tcp" handler={TCP} />
           <Route name="serverudpIP" path="udp" handler={UDP} />
           <Route name="serverlinkmeasIP" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="chairIP" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapIP" path="nmap" handler={Nmap} />
           <Route name="chairipIP" path="ip" handler={IP} />
           <Route name="chairtcpIP" path="tcp" handler={TCP} />
           <Route name="chairudpIP" path="udp" handler={UDP} />
           <Route name="chairlinkmeasIP" path="linkmeas" handler={LinkMeas} />
          </Route>  
          <Route name="switchesIP" path="switches/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmapIP" path="nmap" handler={Nmap} />
           <Route name="switchesipIP" path="ip" handler={IP} />
           <Route name="switchestcpIP" path="tcp" handler={TCP} />
           <Route name="switchesudpIP" path="udp" handler={UDP} />
           <Route name="switchessnmpIP" path="snmp" handler={SNMP} />
           <Route name="switcheslinkmeasIP" path="linkmeas" handler={LinkMeas} />
          </Route>           
          <Route name="networkIP" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyIP" path="hierarchy" handler={Hierarchy} />
           <Route name="networksummaryIP" path="summary" handler={Summary} />
          </Route> 
      </Route>
      <Route name="topoTCP" path="/TOPO-TCP" handler={TopoTCP}>    
          <Route name="plcTCP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapTCP" path="nmap" handler={Nmap} />
           <Route name="plcipTCP" path="ip" handler={IP} />
           <Route name="plctcpTCP" path="tcp" handler={TCP} />
           <Route name="plcudpTCP" path="udp" handler={UDP} />
           <Route name="plclinkmeasTCP" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="serverTCP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapTCP" path="nmap" handler={Nmap} />
           <Route name="serveripTCP" path="ip" handler={IP} />
           <Route name="servertcpTCP" path="tcp" handler={TCP} />
           <Route name="serverudpTCP" path="udp" handler={UDP} />
           <Route name="serverlinkmeasTCP" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="chairTCP" path="chairTCP/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapTCP" path="nmap" handler={Nmap} />
           <Route name="chairipTCP" path="ip" handler={IP} />
           <Route name="chairtcpTCP" path="tcp" handler={TCP} />
           <Route name="chairudpTCP" path="udp" handler={UDP} />
           <Route name="chairlinkmeasTCP" path="linkmeas" handler={LinkMeas} />
          </Route>  
          <Route name="switchesTCP" path="switchesTCP/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmapTCP" path="nmap" handler={Nmap} />
           <Route name="switchesipTCP" path="ip" handler={IP} />
           <Route name="switchestcpTCP" path="tcp" handler={TCP} />
           <Route name="switchesudpTCP" path="udp" handler={UDP} />
           <Route name="switchessnmpTCP" path="snmp" handler={SNMP} />
           <Route name="switcheslinkmeasTCP" path="linkmeas" handler={LinkMeas} />
          </Route>           
          <Route name="networkTCP" path="network/:networkId" handler={NetworkInfo}>
           <Route name="networkhierarchyTCP" path="hierarchy" handler={Hierarchy} />
           <Route name="networksummaryTCP" path="summary" handler={Summary} />
          </Route>
      </Route>
      <Route name="topoUDP" path="/TOPO-UDP" handler={TopoUDP}>    
          <Route name="plcUDP" path="plc/:nodeId" handler={PLCInfo}>
           <Route name="plcnmapUDP" path="nmap" handler={Nmap} />
           <Route name="plcipUDP" path="ip" handler={IP} />
           <Route name="plctcpUDP" path="tcp" handler={TCP} />
           <Route name="plcudpUDP" path="udp" handler={UDP} />
           <Route name="plclinkmeasUDP" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="serverUDP" path="server/:nodeId" handler={ServerInfo}>
           <Route name="servernmapUDP" path="nmap" handler={Nmap} />
           <Route name="serveripUDP" path="ip" handler={IP} />
           <Route name="servertcpUDP" path="tcp" handler={TCP} />
           <Route name="serverudpUDP" path="udp" handler={UDP} />
           <Route name="serverlinkmeasUDP" path="linkmeas" handler={LinkMeas} />
          </Route>
          <Route name="chairUDP" path="chair/:nodeId" handler={ChairInfo}>
           <Route name="chairnmapUDP" path="nmap" handler={Nmap} />
           <Route name="chairipUDP" path="ip" handler={IP} />
           <Route name="chairtcpUDP" path="tcp" handler={TCP} />
           <Route name="chairudpUDP" path="udp" handler={UDP} />
           <Route name="chairlinkmeasUDP" path="linkmeas" handler={LinkMeas} />
          </Route> 
          <Route name="switchesUDP" path="switches/:nodeId" handler={SwitchesInfo}>
           <Route name="switchesnmapUDP" path="nmap" handler={Nmap} />
           <Route name="switchesipUDP" path="ip" handler={IP} />
           <Route name="switchestcpUDP" path="tcp" handler={TCP} />
           <Route name="switchesudpUDP" path="udp" handler={UDP} />
           <Route name="switchessnmpUDP" path="snmp" handler={SNMP} />
           <Route name="switcheslinkmeasUDP" path="linkmeas" handler={LinkMeas} />
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