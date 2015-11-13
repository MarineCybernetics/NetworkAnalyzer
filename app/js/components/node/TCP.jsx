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
    TCPStore.cleanTCPData();
  },
  getInitialState: function() {
    return TCPStore.getTCPData();
  },
  render: function() {
    var tcpsList = <tr/>;        
    var tcps = this.state.resolutions;
    var sum = this.state.sum;
    var sumFrames, sumBytes, ff, fb, sf, sb, tf, tb;

    if (sum !== undefined) {
      sumFrames = sum[0].frames;
      sumBytes = sum[0].bytes;       
    }; 

    if (tcps !== undefined) {
      tcpsList =tcps.map(function(one, index) {

        if(index == 0){
          return(
            <tr key = {index}>
                <td></td> 
                <td>Frames(&larr;)</td> 
                <td>Bytes(&larr;)</td> 
                <td>Frames(&rarr;)</td> 
                <td>Bytes(&rarr;)</td>
                <td>TotalFrames</td> 
                <td>TotalBytes</td>
            </tr> 
          );
        };
        ff = (one.ff/sumFrames*100).toFixed(2);
        fb = (one.fb/sumBytes*100).toFixed(2); 
        sf = (one.sf/sumFrames*100).toFixed(2);
        sb = (one.sb/sumBytes*100).toFixed(2); 
        tf = parseFloat(ff)+parseFloat(sf);
        tb = parseFloat(sf)+parseFloat(sb);   

        return(
          <tr key = {index}>
              <td>{one.firstIP}&harr;{one.secondIP}</td> 
              <td>{one.ff}/{ff}%</td> 
              <td>{one.fb}/{fb}%</td> 
              <td>{one.sf}/{sf}%</td> 
              <td>{one.sb}/{sb}%</td>
              <td>{tf}%</td> 
              <td>{tb}%</td>
          </tr>
        );    
      });     
    };
    return (
      <div className="row">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <div className="well">
            <table className="table table-striped" >
            <caption>TCP Statistics</caption>
              {tcpsList}
            </table>
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


