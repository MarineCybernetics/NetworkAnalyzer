"use strict";

var fs = require('fs'),
    manualTestsData = fs.readFileSync("./dev/data/manualTests.json", "utf8"),
    simulatorDiagnosticData = fs.readFileSync("./dev/data/simulatorDiagnostic.json", "utf8"),
    automaticTestsData = fs.readFileSync("./dev/data/automaticTests.json", "utf8"),
    reportsData = fs.readFileSync("./dev/data/reports.json", "utf8"),
    connectedClientsData = fs.readFileSync("./dev/data/connectedClients.json", "utf8"),
    customData = fs.readFileSync("./dev/data/custom.json", "utf8"),
    kafkaData = fs.readFileSync("./dev/data/kafka.json", "utf8"),
    navigationData = fs.readFileSync("./dev/data/navigation.json", "utf8"),
    weatherDailyData = fs.readFileSync("./dev/data/daily-weather.json", "utf8"),
    contactsData = fs.readFileSync("./dev/data/contacts.json", "utf8"),
    thr1RPMData = fs.readFileSync("./dev/data/thr1_rpm.json", "utf8"),
    thr1ThrustData = fs.readFileSync("./dev/data/thr1_thrust.json", "utf8"),
    evaStatusData = fs.readFileSync("./dev/data/evaStatus.json", "utf8"),
    manualTests = [],
    automaticTests = [],
    simulatorDiagnostic = {},
    reports = [],
    connectedClients = [],
    custom = {},
    kafkaInfo = {},
    navigation = [],
    weatherDaily = {},
    contacts = {},
    thr1RPM = [],
    thr1Thrust = [],
    evaStatus = {},
    customDataWatchers = [],
    simulatorDiagnosticWatchers = [],
    reportsWatchers = [],
    connectedClientsWatchers = [],
    automaticTestsWatchers = [],
    manualTestsWatchers = [],
    kafkaInfoWatchers = [],
    navigationWatchers = [],
    weatherDailyWatchers = [],
    contactsWatchers = [],
    evaStatusWatchers = [],

    topologiesData = fs.readFileSync("./dev/data/toDrawing.json", "utf8"),
    topologies = {},
    topologyWatchers = [];


try {
  manualTests = JSON.parse(manualTestsData);
  simulatorDiagnostic = JSON.parse(simulatorDiagnosticData);
  automaticTests = JSON.parse(automaticTestsData);
  reports = JSON.parse(reportsData);
  connectedClients = JSON.parse(connectedClientsData);
  custom = JSON.parse(customData);
  kafkaInfo = JSON.parse(kafkaData);
  navigation = JSON.parse(navigationData);
  weatherDaily = JSON.parse(weatherDailyData);
  contacts = JSON.parse(contactsData);
  thr1RPM = JSON.parse(thr1RPMData);
  thr1Thrust = JSON.parse(thr1ThrustData);
  evaStatus = JSON.parse(evaStatusData);

  topologies = JSON.parse(topologiesData);
} catch (e) {
  console.error(e);
}

var watchTheFile = function(path, callback) {
  fs.watch(path, function(event) {
    if (event === 'change') {
      fs.readFile(path, 'utf8', function(err, data) {
        try {
          var newValue = JSON.parse(data);
          callback(newValue);
        } catch (e) {
          console.error(e);
        }
      });
    }
  });
};

var notifyWatchers = function(watchers) {
  return function(newValue) {
    watchers.forEach(function(callback) {
      callback(newValue);
    });
  };
};

watchTheFile("./dev/data/manualTests.json", notifyWatchers(manualTestsWatchers));
watchTheFile("./dev/data/automaticTests.json", notifyWatchers(automaticTestsWatchers));
watchTheFile("./dev/data/simulatorDiagnostic.json", notifyWatchers(simulatorDiagnosticWatchers));
watchTheFile("./dev/data/reports.json", "reports", notifyWatchers(reportsWatchers));
watchTheFile("./dev/data/connectedClients.json", notifyWatchers(connectedClientsWatchers));
watchTheFile("./dev/data/custom.json", notifyWatchers(customDataWatchers));
watchTheFile("./dev/data/kafka.json", notifyWatchers(kafkaInfoWatchers));
watchTheFile("./dev/data/navigation.json", notifyWatchers(navigationWatchers));
watchTheFile("./dev/data/daily-weather.json", notifyWatchers(weatherDailyWatchers));
watchTheFile("./dev/data/contacts.json", notifyWatchers(contactsWatchers));
watchTheFile("./dev/data/evaStatus.json", notifyWatchers(evaStatusWatchers));

watchTheFile("./dev/data/toDrawing.json", notifyWatchers(topologyWatchers));


module.exports = {
  getCustomData: function() {
    return custom;
  },
  getSimulatorDiagnostic: function() {
    return simulatorDiagnostic;
  },
  getReports: function() {
    return reports;
  },
  getConnectedClients: function() {
    return connectedClients;
  },
  getAutomaticTests: function() {
    return automaticTests;
  },
  getManualTests: function() {
    return manualTests;
  },
  getRunningTest: function() {
    return custom.runningTest;
  },
  getWeather: function() {
    return custom.weather;
  },
  getEngineStatus: function() {
    return custom.engineStatus;
  },
  getExecutionStatus: function() {
    return custom.executionStatus;
  },
  getKafkaInfo: function() {
    return kafkaInfo;
  },
  getNavigation: function() {
    return navigation;
  },
  getWeatherDaily: function() {
    return weatherDaily;
  },
  getContacts: function() {
    return contacts;
  },
  getThr1RPM: function() {
    console.log(thr1RPM);
    return thr1RPM.vessel_data[0]['THR1.RpmAct [rpm]'];
  },
  getThr1Thrust: function() {
    return thr1Thrust.vessel_data[0]["THR1.ThrustAct [N]"];
  },
  getEvaStatus: function() {
    return evaStatus;
  },

  getTopologies: function() {
    return topologies;
  },
  watchTopologies: function(callback) {
    topologyWatchers.push(callback);
  },


  watchCustomData: function(callback) {
    customDataWatchers.push(callback);
  },
  watchSimulatorDiagnostic: function(callback) {
    simulatorDiagnosticWatchers.push(callback);
  },
  watchReports: function(callback) {
    reportsWatchers.push(callback);
  },
  watchConnectedClients: function(callback) {
    connectedClientsWatchers.push(callback);
  },
  watchAutomaticTests: function(callback) {
    automaticTestsWatchers.push(callback);
  },
  watchManualTests: function(callback) {
    manualTestsWatchers.push(callback);
  },
  watchKafkaInfo: function(callback) {
    kafkaInfoWatchers.push(callback);
  },
  watchNavigation: function(callback) {
    navigationWatchers.push(callback);
  },
  watchWeatherDaily: function(callback) {
    weatherDailyWatchers.push(callback);
  },
  watchContacts: function(callback) {
    contactsWatchers.push(callback);
  },
  watchEvaStatus: function(callback) {
    evaStatusWatchers.push(callback);
  }
};