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

    app.get("/topoLinkMeas", function(req, res) {
      console.log("llllllllllllllll");
      res.json(mockedTXT.getTopoLinkMeas(topologies));
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

    app.get("/nmap/:nodeId", function(req, res) {
      console.log(mockedTXT.getSNMP())
      res.json(mockedTXT.getNmapData(req.params.nodeId));
    });

    app.get("/snmp/:nodeId", function(req, res) {
      res.json(mockedTXT.getSNMP());
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