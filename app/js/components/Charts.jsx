"use strict";

var React = require('react');
var ReactD3 = require('react-d3-components');
var LineChart = ReactD3.LineChart;
var ChartsStore = require('../stores/ChartsStore');
var ChartsActionCreators = require('../actions/ChartsActionCreators');

var Charts = React.createClass({
  displayName: 'Charts',
  getInitialState: function() {
  	console.log("getting initial state");
  	console.log(ChartsStore.getChartsData());
  	return {
      charts: ChartsStore.getChartsData(),
      width: 1200,
      height: 520
    }
  },
  componentDidMount: function() {
  	ChartsStore.addChangeListener(this._onChange);
  	ChartsActionCreators.startChartsDataRequest();
  },
  componentWillUnmount: function() {
    ChartsStore.removeChangeListener(this._onChange);
    ChartsActionCreators.stopChartsDataRequest();    
  },
  render: function() {
    return (
      <div>
        <LineChart
          data={this.state.charts.data}
          width={this.state.width}
          height={this.state.height}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}
          xScale={d3.time.scale().domain([this.state.charts.minMax.minX, this.state.charts.minMax.maxX]).range([0, this.state.width - 70])}
          xAxis={{tickFormat: d3.time.format("%a %d")}}/>
      </div>
    );
  },
  _onChange: function() {
  	if (this.isMounted()) {
  		this.setState({
        charts: ChartsStore.getChartsData(),
        width: 1200,
        height: 520
      });
  	}
  }
});

module.exports = Charts;