"use strict";
var _ = require('underscore');

var getMinutes = function(tests) {
  var seconds = _.reduce(tests, function(totalSoFar, test) {
      if (test.duration) {
        return totalSoFar + test.duration;
      }
      return totalSoFar;
    }, 0),
    betweenTestsWaitTime = tests.length,
    minutes = Math.ceil(seconds / 60) + betweenTestsWaitTime;

  return minutes + ' minutes, ' + tests.length + ' tests';
};

module.exports = {
  getTotalEstimatedDuration: function(tests, selected) {
    var selectedTests = [];
    tests.forEach(function(test, index) {
      if (selected[index]) {
        selectedTests.push(test);
      }
    });
    return getMinutes(selectedTests);
  },
  getRemainingEstimatedDuration: function(tests, selected) {
    var selectedUncompletedTests = [];
    tests.forEach(function(test, index) {
      if (selected[index] && test.status !== 'completed') {
        selectedUncompletedTests.push(test);
      }
    });
    return getMinutes(selectedUncompletedTests);
  }
};