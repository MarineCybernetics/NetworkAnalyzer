"use strict";

module.exports = (function() {
  return {
    componentWillMount: function() {
      console.log('componentWillMount');
      this.intervals = [];
    },
    setInterval: function() {
      console.log('setInterval');
      this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function() {
      console.log('componentWillUnmount');
      this.intervals.map(clearInterval);
    }
  };
}());