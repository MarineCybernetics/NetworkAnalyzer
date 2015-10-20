"use strict";

var React = require('react'),
    UDPStore = require('../../stores/UDPStore'),
    UDPActionCreators = require('../../actions/UDPActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    UDPActionCreators.startUDPDataRequest(nodeId);
    UDPStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    UDPActionCreators.stopUDPDataRequest();    
    UDPStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return UDPStore.getUDPData();
  },
  render: function() {
    var udpsList = <div />
    var udps = this.state.resolutions;

    if (udps !== undefined) {
      udpsList = udps.map(function(one, index) {
        return(
          <h6 key={index}><strong>{one}</strong></h6>
        );  
      });     
    };

    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12">
          <div className="well">
            {udpsList}
          </div>
        </div> 
      </div>
    );  

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(UDPStore.getUDPData());
    }
  }
});

module.exports = Status;


