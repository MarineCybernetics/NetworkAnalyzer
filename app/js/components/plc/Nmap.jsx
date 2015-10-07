"use strict";

var React = require('react'),
    NmapStore = require('../../stores/NmapStore'),
    PLCActionCreators = require('../../actions/PLCActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var plcId = this.context.router.getCurrentParams().plcId;
    PLCActionCreators.startNmapDataRequest(plcId);
    NmapStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    PLCActionCreators.stopNmapDataRequest();    
    NmapStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return NmapStore.getNmapData();
  },
  render: function() {
    var nmap = this.state; 

    if (nmap !== undefined) {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="well">
          <h6>Nmap: <strong>{nmap}</strong></h6>
        </div>
      </div>
        );
    };

    return <div />;   

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(NmapStore.getNmapData());
    }
  }
});

module.exports = Status;


