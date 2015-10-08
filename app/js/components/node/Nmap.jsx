"use strict";

var React = require('react'),
    NmapStore = require('../../stores/NmapStore'),
    NmapActionCreators = require('../../actions/NmapActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    NmapActionCreators.startNmapDataRequest(nodeId);
    NmapStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    NmapActionCreators.stopNmapDataRequest();    
    NmapStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return NmapStore.getNmapData();
  },
  render: function() {
    var nmapsList = <div />
    var nmaps = this.state.resolutions;

    if (nmaps !== undefined) {
      nmapsList = nmaps.map(function(one, index) {
        return(
          <h6 key={index}><strong>{one}</strong></h6>
        );  
      });     
    };

    return (
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="well">
            {nmapsList}
          </div>
        </div> 
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


