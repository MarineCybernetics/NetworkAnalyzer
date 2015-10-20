"use strict";

var React = require('react'),
    IPStore = require('../../stores/IPStore'),
    IPActionCreators = require('../../actions/IPActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    IPActionCreators.startIPDataRequest(nodeId);
    IPStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    IPActionCreators.stopIPDataRequest();    
    IPStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return IPStore.getIPData();
  },
  render: function() {
    var ipsList = <div />
    var ips = this.state.resolutions;

    if (ips !== undefined) {
      ipsList = ips.map(function(one, index) {
        return(
          <h6 key={index}><strong>{one}</strong></h6>
        );  
      });     
    };

    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12">
          <div className="well">
            {ipsList}
          </div>
        </div> 
      </div>
    );  

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(IPStore.getIPData());
    }
  }
});

module.exports = Status;

