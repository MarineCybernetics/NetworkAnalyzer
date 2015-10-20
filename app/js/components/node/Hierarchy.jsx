"use strict";

var React = require('react'),
    HierarchyStore = require('../../stores/HierarchyStore'),
    HierarchyActionCreators = require('../../actions/HierarchyActionCreators');

var Status = React.createClass({
  displayName: "Status",
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    var networkId = this.context.router.getCurrentParams().networkId;
    HierarchyActionCreators.startHierarchyRequest(networkId);
    HierarchyStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    HierarchyActionCreators.stopHierarchyRequest();    
    HierarchyStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return HierarchyStore.getHierarchy();
  },
  render: function() {
    var hierarchysList = <tr />;
    var hierarchys = this.state.resolutions;
    var sumFrames,sumBytes,fnum,bytes,line;

    if (hierarchys !== undefined) {
      hierarchysList = hierarchys.map(function(one, index) {
        if(index == 0){
          sumFrames = one.fnum;
          sumBytes = one.bytes;
        };
        fnum = one.fnum/sumFrames*100;
        bytes = one.bytes/sumBytes*100;
        line = one.line;
        line = line.replace(/\s/, "&nbsp;");
        return(
          <tr>
              <td style = {{"width": "50%"}}><pre>{one.line}</pre></td> 
              <td>Frames: {one.fnum}</td> 
              <td>{fnum.toFixed(2)}%</td> 
              <td>Bytes: {one.bytes}</td> 
              <td>{bytes.toFixed(2)}%</td>
          </tr>
        );  
      });     
    };

    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12">
          <div className="well">
          <table className="table table-striped" >
            {hierarchysList}
          </table>  
          </div>
        </div> 
      </div>
    );  

  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(HierarchyStore.getHierarchy());
    }
  }
});

module.exports = Status;

