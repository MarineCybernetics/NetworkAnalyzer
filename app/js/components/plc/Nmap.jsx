"use strict";

var React = require('react'),
    NmapStore = require('../../stores/NmapStore'),
    PLCActionCreators = require('../../actions/PLCActionCreators');

var Nmap = React.createClass({
  displayName: "Nmap",
  render: function() {
    var nmapData = this.props.nmapData;
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="well">
          <h6>Competence: <strong>{nmapData.competence}</strong></h6>
          <h6>Name: <strong>{nmapData.name}</strong></h6>
          <h6>Company: <strong>{nmapData.company}</strong></h6>
          <h6>Skype: <strong>{nmapData.skype}</strong></h6>
          <h6>Email: <strong>{nmapData.email}</strong></h6>
          <h6>Phone: <strong>{nmapData.phone}</strong></h6>
        </div>
      </div>
    );
  }
});

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

    var nmapList = <div />
    var nmap = this.state.nmap;

    if (nmap !== undefined) {
      nmapList = nmap.map(function(one, index) {
        return (
          <Nmap nmapData={one} key={index}/>
        );
      });
    };

    return (
      <div className="row">
      	{nmapList}
      </div>
    );
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(NmapStore.getNmapData());
    }
  }
});

module.exports = Status;


