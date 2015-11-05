 "use strict";

var React = require('react'),
    WindowStore = require('../../stores/WindowStore'),
    SignalStore = require('../../stores/SignalStore'),
    ChartActionCreators = require('../../actions/ChartActionCreators');
    
var ReactD3 = require('react-d3-components');
var LineChart = ReactD3.LineChart;

var MARGINS = {top: 10, bottom: 50, left: 50, right: 10}

var Chart = React.createClass({
  displayName: "Chart",
  componentDidMount: function() {
    WindowStore.addChangeListener(this._onChange);
    SignalStore.addChangeListener(this._onChange);
    ChartActionCreators.requestLatestSignalData(this.props.signalId);
    ChartActionCreators.openSignalSocket(this.props.signalId);
    this.setState({width: React.findDOMNode(this).offsetWidth});
  },
  componentWillUnmount: function() {
    ChartActionCreators.closeSignalSocket(this.props.signalId);    
    WindowStore.removeChangeListener(this._onChange);
    SignalStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return {
      width: 120,
      signalData: SignalStore.getSignalData(this.props.signalId)
    }
  },
  render: function() {
    var xScale = d3.time.scale().domain([this.state.signalData.minMax.minX, this.state.signalData.minMax.maxX]).range([0, this.state.width - 70]);
    return (
        <LineChart
          data={this.state.signalData.data}
          width={this.state.width}
          height={this.props.height}
          margin={{top: MARGINS.top, bottom: MARGINS.bottom, left: MARGINS.left, right: MARGINS.right}}
          xScale={xScale}
          xAxis={{tickValues: xScale.ticks(d3.time.seconds, 10), tickFormat: d3.time.format("%H:%M:%S"), zero: this.props.height - 60}}
          yAxis={{label: this.props.label}} />
    );
  },
  _onChange: function() {
    if (this.isMounted()) {
      if (SignalStore.doReferesh()) {
        ChartActionCreators.requestLatestSignalData(this.props.signalId);
      }
      if (!SignalStore.isOffline()) {
        this.setState({
          width: React.findDOMNode(this).offsetWidth,
          signalData: SignalStore.getSignalData(this.props.signalId)
        });
      }
    }
  }
});

module.exports = Chart;