"use strict";

var fs = require('fs'),
    manualTestsData = fs.readFileSync("./dev/data/manualTests.json", "utf8"),
    automaticTestsData = fs.readFileSync("./dev/data/automaticTests.json", "utf8"),
    customData = fs.readFileSync("./dev/data/custom.json", "utf8"),
    evaStatusData = fs.readFileSync("./dev/data/evaStatus.json", "utf8"),

    manualTests = [],
    automaticTests = [],
    custom = {},
    evaStatus = {},

    customDataWatchers = [],
    automaticTestsWatchers = [],
    manualTestsWatchers = [],
    evaStatusWatchers = [],

    topologiesData = fs.readFileSync("./dev/data/toDrawing.json", "utf8"),
    topologies = {},
    topologyWatchers = [];


try {
  manualTests = JSON.parse(manualTestsData);
  automaticTests = JSON.parse(automaticTestsData);
  custom = JSON.parse(customData);
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
watchTheFile("./dev/data/custom.json", notifyWatchers(customDataWatchers));
watchTheFile("./dev/data/evaStatus.json", notifyWatchers(evaStatusWatchers));

watchTheFile("./dev/data/toDrawing.json", notifyWatchers(topologyWatchers));


module.exports = {
  getCustomData: function() {
    return custom;
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
  watchAutomaticTests: function(callback) {
    automaticTestsWatchers.push(callback);
  },
  watchManualTests: function(callback) {
    manualTestsWatchers.push(callback);
  },
  watchEvaStatus: function(callback) {
    evaStatusWatchers.push(callback);
  }
};