"use strict";

var React = require('react'),
    SummaryStore = require('../../stores/SummaryStore'),
    SummaryActionCreators = require('../../actions/SummaryActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var networkId = this.context.router.getCurrentParams().networkId;
    SummaryActionCreators.startSummaryRequest(networkId);
    SummaryStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    SummaryActionCreators.stopSummaryRequest();    
    SummaryStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return SummaryStore.getSummary();
  },
  render: function() {      
    var summaryList = <div />
    var summary = this.state.resolutions;

    if (summary !== undefined) {
      summaryList = summary.map(function(one, index) {
        return(
          <strong key={index}>
            Statistics:<br/>
              Packets: {one.frames}<br/>
              Between first and last packet:{one.end - one.start} sec<br/>
              Avg. packets/sec: {one.avgpps}<br/>
              Avg packet size: {one.avgps} bytes<br/>
              Bytes: {one.bytes}<br/></strong>
        );  
      });     
    };

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="well" style = {{"overflowX": "auto", "overflowY": "auto", "maxHeight": "400px"}}>
            {summaryList}
          </div>
        </div> 
      </div>
    ); 

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(SummaryStore.getSummary());
    }
  }
});

module.exports = Status;


