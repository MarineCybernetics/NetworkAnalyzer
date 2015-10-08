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
          <pre className="text-info">{this.props.hierarchy}</pre>
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

    if (hierarchys !== undefined) {
      hierarchysList = hierarchys.map(function(one, index) {
        return(
          <h6 key={index}><strong>{one}</strong></h6>
        );  
      });     
    };
    return (
      <div className="col-md-8">
        <div className="row">
          <div className="col-lg-9 visible-lg">
            <Hierarchy hierarchy={hierarchysList} />
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
