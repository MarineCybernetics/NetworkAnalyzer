"use strict";
var mockedJSON = require('./mockedJSON.js'),
    executionStatus = mockedJSON.getCustomData().executionStatus,
    evaStatus = mockedJSON.getEvaStatus(),
    topologies = mockedJSON.getTopologies(),
    mockedTXT = require('./mockedTXT.js');   

var pcapReader = require('./file-reader/pcapr');    

module.exports = {
  drawRoutes: function(app) {
    mockedJSON.watchCustomData(function(data) {
      executionStatus = data.executionStatus;
    });

    mockedJSON.watchEvaStatus(function(data) {
      evaStatus = data;
    });

    mockedJSON.watchTopologies(function(data) {
      topologies = data;
    });

    app.get("/topo/hierarchy", function(req, res) {
      res.json(mockedTXT.getHierarchy());
    });

    app.get("/topo/summary", function(req, res) {
      res.json(mockedTXT.getSummary());
    });

    app.get("/topo", function(req, res) {
      console.log("ttttttttttttttt");
      res.json(topologies);
    });

    app.get("/topoIP", function(req, res) {
      console.log("iiiiiiiiiiiiiiii");
      res.json(mockedTXT.getTopoIP(topologies));
    });

    app.get("/topoTCP", function(req, res) {
      console.log("cccccccccccccccc");
      res.json(mockedTXT.getTopoTCP(topologies));
    });

    app.get("/topoUDP", function(req, res) {
      console.log("uuuuuuuuuuuuuuuuu");
      res.json(mockedTXT.getTopoUDP(topologies));
    });

    app.get('/executionstatus', function(req, res) {
      res.json(executionStatus);
    });

    app.get("/meta/:nodeId", function(req, res) {
      var meta = {};
      var nodes = topologies.nodes;
      for (var i = 0; i < nodes.length; i++) {
        if (req.params.nodeId == nodes[i].id){
          meta.stype = nodes[i].stype;
          meta.Vendor = nodes[i].Vendor;
          meta.Desc = nodes[i].Desc;
        }
      };
      res.json(meta);
    });

    app.get("/linkmeas/:nodeId", function(req, res) {
      res.json({
        "UDP":[
          {
            "ip1":"",
            "ip2":"",
            "Interval":"",
            "Transfer":"",
            "Bandwidth":"",
            "Jitter":"",
            "Lost":""
          },
          {
            "ip1":"192.168.10.126:50332",
            "ip2":"192.168.10.107:5001",
            "Interval":"0.0-10.0 sec",
            "Transfer":"105 MBytes",
            "Bandwidth":"87.7 Mbits/sec",
            "Jitter":"0.272 ms",
            "Lost":"10877/85465 (13%)"
          },
          {
            "ip1":"192.168.10.126:5001",
            "ip2":"192.168.10.107:58283",
            "Interval":"0.0-10.0 sec",
            "Transfer":"103 MBytes",
            "Bandwidth":"86.1 Mbits/sec",  
            "Jitter":"0.778 ms",
            "Lost":"0/73294 (0%)"
          }
        ],
        "TCP":[
          {
            "ip1":"",
            "ip2":"",
            "Interval":"", 
            "Transfer":"", 
            "Bandwidth":""
          },
          {
            "ip1":"192.168.10.126:48000",
            "ip2":"192.168.10.107:5001",
            "Interval":"0.0-10.0 sec", 
            "Transfer":"865 MBytes", 
            "Bandwidth":"725 Mbits/sec"
          },
          {
            "ip1":"192.168.10.126:5001",
            "ip2":"192.168.10.107:61482",
            "Interval":"0.0-10.0 sec", 
            "Transfer":"2.03 Gbits", 
            "Bandwidth":"203 Mbits/sec"            
          }
        ]
      });
    });

    app.get("/nmap/:nodeId", function(req, res) {
      res.json(mockedTXT.getNmapData(req.params.nodeId));
    });

    app.get("/snmp/:nodeId", function(req, res) {
      res.json({
        
      });
    });

    app.get("/ip/:nodeId", function(req, res) {
      var nodeIP;
      var nodes = topologies.nodes;
      for (var i = 0; i < nodes.length; i++) {
        if (req.params.nodeId == nodes[i].id){
          nodeIP = nodes[i].IP;
        }
      };
      res.json(mockedTXT.getIPData(nodeIP));
    });

    app.get("/tcp/:nodeId", function(req, res) {
      var nodeIP;
      var nodes = topologies.nodes;
      for (var i = 0; i < nodes.length; i++) {
        if (req.params.nodeId == nodes[i].id){
          nodeIP = nodes[i].IP;
        }
      };
      console.log(nodeIP);
      res.json(mockedTXT.getTCPData(nodeIP));
    });

    app.get("/udp/:nodeId", function(req, res) {
      var nodeIP;
      var nodes = topologies.nodes;
      for (var i = 0; i < nodes.length; i++) {
        if (req.params.nodeId == nodes[i].id){
          nodeIP = nodes[i].IP;
        }
      };
      console.log("aaaaa");
      res.json(mockedTXT.getUDPData(nodeIP));
    });

    app.post('/runAll', function(req, res) {
      res.json({
        status: 'ok'
      });
    });

    app.get('/reportlist', function(req, res) {
      res.json(reports);
    });

    app.get('/finishfmea', function(req, res) {
      res.json({
        status: 'ok'
      });
    });

    app.get('/applicationversion', function(req, res) {
      res.send('6.66');
    });

    app.get('/startsocketsender', function(req, res) {
      res.json({
        status: 'ok'
      });
    });
  }
};