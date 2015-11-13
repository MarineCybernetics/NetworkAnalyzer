"use strict";

var React = require('react'),
    LinkMeasStore = require('../../stores/LinkMeasStore'),
    LinkMeasActionCreators = require('../../actions/LinkMeasActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    LinkMeasActionCreators.startLinkMeasDataRequest(nodeId);
    LinkMeasStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    LinkMeasActionCreators.stopLinkMeasDataRequest();    
    LinkMeasStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return LinkMeasStore.getLinkMeasData();
  },
  render: function() {
    var linkmeasListU = <tr />
    var linkmeasU = this.state.UDP;
    var linkmeasListT = <tr />
    var linkmeasT = this.state.TCP;

    if (linkmeasU !== undefined) {
      linkmeasListU =linkmeasU.map(function(one, index) {
        if(index == 0){
          return(
            <tr>
                <td>&harr;</td> 
                <td>Interval</td> 
                <td>Transfer</td> 
                <td>Bandwidth</td> 
                <td>Jitter</td>
                <td>Lost/Total Datagrams</td>
            </tr> 
          );
        }; 
        return(
          <tr>
                <td>{one.ip1}&harr;{one.ip2}</td> 
                <td>{one.Interval}</td> 
                <td>{one.Transfer}</td> 
                <td>{one.Bandwidth}</td> 
                <td>{one.Jitter}</td>
                <td>{one.Lost}</td>
          </tr>
        );    
      });     
    };  

    if (linkmeasT !== undefined) {
      linkmeasListT =linkmeasT.map(function(one, index) {
        if(index == 0){
          return(
            <tr>
                <td>&harr;</td> 
                <td>Interval</td> 
                <td>Transfer</td> 
                <td>Bandwidth</td> 
            </tr>
          );
        }; 
        return(
          <tr>
                <td>{one.ip1}&harr;{one.ip2}</td> 
                <td>{one.Interval}</td> 
                <td>{one.Transfer}</td> 
                <td>{one.Bandwidth}</td> 
          </tr>
        );    
      });     
    }; 

    return (
      <div>
      <div className="row">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <div className="well" style = {{"overflowY": "auto", "maxHeight": "400px"}}>
            <table className="table table-striped" >
            <caption>UDP Link Measurements</caption>
              {linkmeasListU}
            </table>  
          </div>
        </div> 
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <div className="well" style = {{"overflowY": "auto", "maxHeight": "400px"}}>
            <table className="table table-striped" >
            <caption>TCP Link Measurements</caption>
              {linkmeasListT}
            </table>  
          </div>
        </div> 
      </div>  
      </div>     
    ); 
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(LinkMeasStore.getLinkMeasData());
    }
  }
});

module.exports = Status;


