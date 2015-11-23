"use strict";

var React = require('react'),
    SNMPStore = require('../../stores/SNMPStore'),
    SNMPActionCreators = require('../../actions/SNMPActionCreators'),
    _ = require('underscore');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var nodeId = this.context.router.getCurrentParams().nodeId;
    SNMPActionCreators.startSNMPDataRequest(nodeId);
    SNMPStore.addChangeListener(this._onChange);
    $('[data-toggle="popover"]').popover();
  },
  componentWillUnmount: function() {
    SNMPActionCreators.stopSNMPDataRequest();    
    SNMPStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return SNMPStore.getSNMPData();
  },
  render: function() {
    var snmpsList = <tr />;
    var snmpsArrayList = <tr />;
    var subsnmpsArrayList = <td />;
    var snmps = this.state.resolutions;
    var arrays = this.state;
    var coloum = 1;

    var names = _.without(_.keys(this.state),"timestamp","sysName"); 

    snmpsArrayList = names.map(function(one){
      if(one == "resolutions"){
          return(
            <tr>
            <td>Name</td>
            <td>Value</td>
            </tr>
            );
      }
      else{
        var array = arrays[one];
        subsnmpsArrayList = array.map(function(item, index){
          return(<td>{item.actualValue}</td>);
        });
        $('[data-toggle="popover"]').popover();
        return(
              <tr>
              <td data-trigger="hover" data-template='<div class="popover" style="border: 1px dotted red">
<div class="arrow"></div><div class="popover-content" style= "font-size:9.5pt; background"></div></div>' data-html = "true" data-placement="bottom" data-container="#switch" data-toggle="popover" data-content={array[0].meta} data-animation="true">{one}</td>
              {subsnmpsArrayList}
              </tr>
          );
      }
    });

    if (snmps !== undefined) {
      snmpsList = snmps.map(function(s, index) {
        return(
            <tr>
                <td data-trigger="hover" data-template='<div class="popover" style="border: 1px dotted red">
<div class="arrow"></div><div class="popover-content" style= "font-size:9.5pt"></div></div>' data-html = "true" data-placement="bottom" data-container="#switch" data-toggle="popover" data-content={s.meta} data-animation="true">{s.name}</td> 
                <td>{s.actualValue}</td> 
            </tr> 
        );
      });     
    };

    return (
      <div className="row" id="switch">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="well" style = {{"overflowX": "auto", "overflowY": "auto", "maxHeight": "500px"}}>
            <table className="table table-striped" >
              {snmpsArrayList}
              {snmpsList}
            </table>  
          </div>
        </div> 
      </div>
    );  

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(SNMPStore.getSNMPData());
    }
  }
});

module.exports = Status;


