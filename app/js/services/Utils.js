"use strict";
var _ = require('underscore');

module.exports = {
  prettyTime: function(seconds) {
    var sec = Math.floor(seconds);
    if (sec === 0) {
      return '00:00';
    }
    if (sec) {
      var hours = Math.floor(sec / 3600);
      var minutes = Math.floor((sec - (hours * 3600)) / 60);
      var seconds = sec - (hours * 3600) - (minutes * 60);

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (hours === '00') {
        return minutes + ':' + seconds;
      }
      return hours + ':' + minutes + ':' + seconds;
    }
    return '';
  },
  isNumber: function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  },
  prettyNumber: function(newValue) {
    if (this.isNumber(newValue)) {
      return parseFloat(newValue).toFixed(2);
    }
    return newValue;
  },
  rad2deg: function(rads) {
    return rads * 180 / Math.PI;
  },
  capitalizeFirstLetter: function(sentence) {
    if (!_.isString(sentence)) {
      return sentence;
    }
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
};