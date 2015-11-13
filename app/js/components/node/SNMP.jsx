"use strict";

var React = require('react'),
    SNMPStore = require('../../stores/SNMPStore'),
    SNMPActionCreators = require('../../actions/SNMPActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    SNMPActionCreators.startSNMPDataRequest(nodeId);
    SNMPStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    SNMPActionCreators.stopSNMPDataRequest();    
    SNMPStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return SNMPStore.getSNMPData();
  },
  render: function() {
    var snmpsList = <div />
    var snmps = this.state.resolutions;

    if (snmps !== undefined) {
      snmpsList = snmps.map(function(one, index) {
        return(
          <h6 key={index}><strong>{one}</strong></h6>
        );  
      });     
    };

    return (
      <div className="row">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <div className="well">
            {snmpsList}
          </div>
        </div> 
      </div>
    );  

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(SNMPStore.getSNMPData());
    }
  }
});

module.exports = Status;


