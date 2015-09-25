"use strict";

var chartConfigurations = require('../config/chart.conf.js');

var CONST_X1_AXIS = 0;    
var CONST_Y1_AXIS = 1;

var getDataRoot = function(dataRoot, propNameY, indexkey) {
  switch(propNameY) {
    case "humidity":    { return dataRoot[indexkey][propNameY]; }
    case "speed":       { return dataRoot[indexkey][propNameY]; }
    case "clouds":      { return dataRoot[indexkey][propNameY]; }
    default:            { return dataRoot[indexkey]["temp"][propNameY]};
  }
};

var getMinMax = function(data, dataProperties, axis) {
  var minX1 = [], maxX1 = [], minY1 = [], maxY1 = [];

  for (var i = 0; i < data.length; i++) {
    var currArray =  data[i].values;
    minX1.push(d3.min(currArray, function(d) { return d["x"]; }));
    maxX1.push(d3.max(currArray, function(d) { return d["x"]; }));
    minY1.push(d3.min(currArray, function(d) { return d["y"]; }));
    maxY1.push(d3.max(currArray, function(d) { return d["y"]; }));
   };

  return {minX: d3.min(minX1), maxX: d3.max(maxX1), minY: d3.min(minY1), maxY: d3.max(maxY1)};  
};

module.exports = {
  convertData: function(paramChartItem, data) {
    var chartConfiguration = chartConfigurations[paramChartItem.name];
    var dataProperties = chartConfiguration.dataProperties;

    var dataRoot = data.list;
    var retData = {data: []};

    for (var key in dataProperties) {
      var propNameX = dataProperties[key].dataParam[CONST_X1_AXIS];
      var propNameY = dataProperties[key].dataParam[CONST_Y1_AXIS];         
      var series = [];
      for(var indexkey in dataRoot) {
        var item = {
          x: new Date((dataRoot[indexkey]["dt"] * 1000)),
          y: getDataRoot(dataRoot, propNameY, indexkey)                    
        }     
        series.push(item);
      }
      retData.data.push({label: propNameY, values: series});
    }

    var minMax = getMinMax(retData.data, dataProperties, CONST_Y1_AXIS);
    retData.minMax = minMax;
    return retData;
  }

};