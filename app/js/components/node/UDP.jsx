"use strict";

var React = require('react'),
    UDPStore = require('../../stores/UDPStore'),
    UDPActionCreators = require('../../actions/UDPActionCreators');  

var ReactD3 = require('react-d3-components');
var LineChart = ReactD3.LineChart;    

var MARGINS = {top: 10, bottom: 50, left: 50, right: 10};    

var getMinMax = function(data) {
  var minX1 = [], maxX1 = [], minY1 = [], maxY1 = [];

  for (var i = 0; i < data.length; i++) {
    var currArray =  data[i].values;
    minX1.push(d3.min(currArray, function(d) { return d["x"]; }));
    maxX1.push(d3.max(currArray, function(d) { return d["x"]; }));
    minY1.push(d3.min(currArray, function(d) { return d["y"]; }));
    maxY1.push(d3.max(currArray, function(d) { return d["y"]; }));
   };

  return {minX: d3.min(minX1), maxX: d3.max(maxX1), minY: d3.min(minY1), maxY: d3.max(maxY1)};  
};

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
  },
  getInitialState: function() {
    return UDPStore.getUDPData();
  },
  render: function() {
    var udpsList = <div />
    var udps = this.state.resolutions;
    var data = {label: 'udp', values: []};
    if(udps == undefined){
        data = {label: 'udp', values: [{x:0, y:9}]};
    };
    if (udps !== undefined) {
      udpsList = udps.map(function(one, index) {

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
          <h6 key={index}><strong>{one}</strong></h6>
        );  
      });     
    };

    var xScale = d3.scale.linear().domain([0.000, 3.000]).range([0, 2000-60]);
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
          <div style = {{overflowX: "auto", width:"600px", float: 'none'}}>
                <LineChart
                   data={data}
                   width={2000}
                   height={200}
                   margin={{top: MARGINS.top, bottom: MARGINS.bottom, left: MARGINS.left, right: MARGINS.right}}
                   xScale={xScale}
                   xAxis={{label: "Time:s", tickValues: xScale.ticks(30), tickFormat: function(d) { return d + "00"; }}}
                   yAxis={{label: "Packets:bytes"}}
                   tooltipHtml={tooltipLine}
                   tooltipContained
                   shapeColor={"red"}/>
          </div>
        </div>    
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12">
            <div className="well" style = {{overflowY: "auto", height: "400px"}}>
              {udpsList}
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


