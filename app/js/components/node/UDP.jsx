"use strict";

var React = require('react'),
    UDPStore = require('../../stores/UDPStore'),
    UDPActionCreators = require('../../actions/UDPActionCreators');  

var ReactD3 = require('react-d3-components');
var LineChart = ReactD3.LineChart;    

var MARGINS = {top: 10, bottom: 50, left: 50, right: 10};    

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    UDPActionCreators.startUDPDataRequest(nodeId);
    UDPStore.addChangeListener(this._onChange);
    this.setState({width: React.findDOMNode(this).offsetWidth});
  },
  componentWillUnmount: function() {
    UDPActionCreators.stopUDPDataRequest();    
    UDPStore.removeChangeListener(this._onChange);
    UDPStore.cleanUDPData();
  },
  getInitialState: function() {
    return UDPStore.getUDPData();
  },
  render: function() {
    var udpConvsList = <tr />
    var udpConvs = this.state.resolutions1;
    var data = {label: 'udp', values: []};
    if(udpConvs == undefined ||  udpConvs.length == 1){
        data = {label: 'udp', values: [{x:0, y:0}]};
    };
    if (udpConvs !== undefined) {
      udpConvsList = udpConvs.map(function(one, index) {
        if(index == 0){
          return(
            <tr>
              <td>Reftime</td> 
              <td>SrcIP</td> 
              <td>SrcPort</td> 
              <td>DstIP</td> 
              <td>DstPort</td>
              <td>Psize</td>
            </tr>
          );
        };

        var x = parseFloat(one.reftime),
            y = parseFloat(one.pSize);   

        var l1 = {}; 

        l1.x = (x - 0.001).toFixed(3);
        l1.y = 0;
        data.values.push(l1);

        var l2 = {}; 
        l2.x = x.toFixed(3);
        l2.y = y;
        data.values.push(l2);

        var l2 = {};      
        l2.x = (x + 0.001).toFixed(3);
        l2.y = 0;
        data.values.push(l2);

        return(
          <tr>
            <td>{one.reftime}</td> 
            <td>{one.srcIP}</td> 
            <td>{one.srcPort}</td> 
            <td>{one.dstIP}</td> 
            <td>{one.dstPort}</td>
            <td>{one.pSize}</td>
          </tr>
        );  
      });     
    };

    var udpsList = <tr/>;        
    var udps = this.state.resolutions2;
    var sum = this.state.sum;
    var sumFrames, sumBytes, ff, fb, sf, sb, tf, tb;

    if (sum !== undefined) {
      sumFrames = sum[0].frames;
      sumBytes = sum[0].bytes;       
    }; 

    if (udps !== undefined) {
      udpsList =udps.map(function(one, index) {

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

    var xScale = d3.scale.linear().domain([0.000, 10.000]).range([0, 10000-60]);
    var tooltipLine = function(label, data) {
        var tip;
        if(data.y != 0){
          tip = label + " time: " + data.x + " packet: " + data.y;
        }
        else{
          tip = label + " time: " + data.x;
        }
        return tip;
    }

    return (
       <div>
       <div className="row">
        <div className="col-lg-12 col-md-10 col-sm-12" style = {{"overflowX": "auto"}}>
          <div className="well">
            <table className="table table-striped" >
            <caption>UDP Statistics</caption>
              {udpsList}
            </table>
          </div>
        </div> 
      </div>
        <div className="row">
          <div className="col-lg-12 col-md-10 col-sm-12" style = {{"overflowX": "auto", "float": 'none'}} >
                <LineChart
                   data={data}
                   width={10000}
                   height={200}
                   margin={{top: MARGINS.top, bottom: MARGINS.bottom, left: MARGINS.left, right: MARGINS.right}}
                   xScale={xScale}
                   xAxis={{label: "Time:s", tickValues: xScale.ticks(100), tickFormat: function(d) { return d + "00"; }}}
                   yAxis={{label: "Packets:bytes"}}
                   tooltipHtml={tooltipLine}
                   tooltipContained
                   shapeColor={"red"}
                   stroke={{strokeWidth: 0.5}} />
          </div>
        </div>    
        <div className="row">
          <div className="col-lg-12 col-md-10 col-sm-12">
            <div className="well" style = {{"overflowY": "auto", "height": "400px"}}>
              <table className="table table-striped" >
              <caption>UDP Packets</caption>
                {udpConvsList}
              </table>
            </div>
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


