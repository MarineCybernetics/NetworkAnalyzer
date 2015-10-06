"use strict";
var mockedJSON = require('./mockedJSON.js'),
    executionStatus = mockedJSON.getCustomData().executionStatus,
    simulatorDiagnostic = mockedJSON.getSimulatorDiagnostic(),
    reports = mockedJSON.getReports(),
    kafkaInfo = mockedJSON.getKafkaInfo(),
    navigation = mockedJSON.getNavigation(),
    weatherDaily = mockedJSON.getWeatherDaily(),
    contacts = mockedJSON.getContacts(),
    evaStatus = mockedJSON.getEvaStatus();

module.exports = {
  drawRoutes: function(app, dataProviders) {
    mockedJSON.watchCustomData(function(data) {
      executionStatus = data.executionStatus;
    });

    mockedJSON.watchSimulatorDiagnostic(function(data) {
      simulatorDiagnostic = data;
    });

    mockedJSON.watchReports(function(data) {
      reports = data;
    });

    mockedJSON.watchKafkaInfo(function(data) {
      kafkaInfo = data;
    });

    mockedJSON.watchWeatherDaily(function(data) {
      weatherDaily = data;
    });

    mockedJSON.watchContacts(function(data) {
      contacts = data;
    });

    mockedJSON.watchEvaStatus(function(data) {
      evaStatus = data;
    });

    app.get('/executionstatus', function(req, res) {
      res.json(executionStatus);
    });

    app.get('/debug', function(req, res) {
      res.json({
        logMessages: ['log1', 'log2'],
        signals: ['sig1', 'sig2'],
        alarms: ['al1', 'al2'],
        currentlyRunningScript: {
          script: "running script code goes here"
        },
        simulatorDiagnostic: simulatorDiagnostic
      });
    });

    app.get("/kafka/info", function(req, res) {
      res.json(kafkaInfo);
    });

    app.get("/navigation", function(req, res) {
      res.json(navigation);
    });

    app.get("/dailyweather", function(req, res) {
      res.json(weatherDaily);
    });

    app.get("/contacts", function(req, res) {
      res.json(contacts);
    });

    app.get("/nmap/:plcId", function(req, res) {
      console.log('server');
      console.log(req.params.plcId); 
      res.json(contacts);
    });

    app.get("/ajax/vessel_data*", function(req, res) {
      var signalId = req.query.signal_id;
      switch (signalId) {
        case "1":
          res.json(dataProviders.thr1.rpm.getSeries_1m());
          break;
        case "2":
          res.json(dataProviders.thr1.thrust.getSeries_1m());
          break;
        default:
          res.json([{"unknown": 0, "time": 0}]);
          break;
          // no op
      }
    });

    app.get("/status", function(req, res) {
      res.json(evaStatus);
    })

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