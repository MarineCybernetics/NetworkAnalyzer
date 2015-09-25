"use strict";
var React = require('react'),
  ExecutionStatusStore = require('../stores/ExecutionStatusStore');

module.exports = React.createClass({
  displayName: "Warnings",
  getInitialState: function() {
    return {
      executionStatus: ExecutionStatusStore.getExecutionStatus()
    };
  },
  componentDidMount: function() {
    ExecutionStatusStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ExecutionStatusStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var executionStatus = this.state.executionStatus;
    if (executionStatus && executionStatus.dpCommunicator && executionStatus.dpCommunicator.isConnected) {
      return null;
    }
    if (executionStatus && !executionStatus.dpCommunicator) {
      return null;
    }
    return (
      <div className="warnings">
        <div className="alert alert-danger">
          <i className="fa fa-warning fa-fw" />
            &nbsp; No connection with DP system
        </div>
      </div>
    );
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState({
        executionStatus: ExecutionStatusStore.getExecutionStatus()
      });
    }
  },
});