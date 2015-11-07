"use strict";

var React = require('react'),
    TCPStore = require('../../stores/TCPStore'),
    TCPActionCreators = require('../../actions/TCPActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    TCPActionCreators.startTCPDataRequest(nodeId);
    TCPStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TCPActionCreators.stopTCPDataRequest();    
    TCPStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return TCPStore.getTCPData();
  },
  render: function() {
    var tcpsList = <div />
    var tcps = this.state.resolutions;

    if (tcps !== undefined) {
      tcpsList = tcps.map(function(one, index) {
        return(
          <h6 key={index}><pre>{one}</pre></h6>
        );  
      });     
    };

    return (
      <div className="row">
        <div className="col-lg-12 col-md-10 col-sm-12" style={{"width":"900"}}>
          <div className="well">
            {tcpsList}
          </div>
        </div> 
      </div>
    );  

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(TCPStore.getTCPData());
    }
  }
});

module.exports = Status;


