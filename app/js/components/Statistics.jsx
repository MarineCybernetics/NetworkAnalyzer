"use strict";

var React = require('react');
var HierarchyStore = require('../stores/HierarchyStore');
var HierarchyActionCreators = require('../actions/HierarchyActionCreators');
var _ = require('underscore');

var Hierarchy = React.createClass({
  displayName: "Hierarchy",
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Hierarchy</strong></h3>
        </div>
        <div className="panel-body">
          {this.props.hierarchy}
        </div>
      </div>
    );
  }
});

var Statistics = React.createClass({
  displayName: 'Statistics',
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return HierarchyStore.getHierarchy();
  },
  componentDidMount: function() {
    HierarchyActionCreators.startHierarchyRequest();
    HierarchyStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {   
    HierarchyActionCreators.stopHierarchyRequest();    
    HierarchyStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var hierarchysList = <div />
    var hierarchys = this.state.resolutions;
    var sumFrames,sumBytes,fnum,bytes;

    if (hierarchys !== undefined) {
      hierarchysList = hierarchys.map(function(one, index) {
        if(index == 0){
          sumFrames = one.fnum;
          sumBytes = one.bytes;
        };
        fnum = one.fnum/sumFrames*100;
        bytes = one.bytes/sumBytes*100;
        return(
          <p key={index}>
            <strong>{one.line}</strong>
            <strong>Frames:{one.fnum}</strong>
            <strong>{fnum.toFixed(2)}%</strong>
            <strong>Bytes:{one.bytes}</strong>
            <strong>{bytes.toFixed(2)}%</strong>
          </p>
        );  
      });     
    };
    return (
      <div className="col-md-8">
        <div className="row">
          <div className="col-lg-8">
            <Hierarchy hierarchy={hierarchysList}/>
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

module.exports = Statistics;
