"use strict";

var React = require('react'),
    Chart = require('./Chart');

var CHART_HEIGHT = 275;

var Status = React.createClass({
  displayName: "Status",
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Chart height={CHART_HEIGHT} label="RPM" signalId="1" />
          </div>
          <div className="col-lg-6 col-md-12">
            <Chart height={CHART_HEIGHT} label="Temperature 1" signalId="3" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Chart height={CHART_HEIGHT} label="Thrust" signalId="2" />
          </div>
          <div className="col-lg-6 col-md-12">
            <Chart height={CHART_HEIGHT} label="Temperature 2" signalId="4" />
          </div>
        </div>
      </div>
    );
  },
  _onChange: function() {
    if (this.isMounted()) {
      
    }
  }
});

module.exports = Status;


