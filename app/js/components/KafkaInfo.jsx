"use strict";

var React = require('react');
var KafkaInfoStore = require('../stores/KafkaInfoStore');
var KafkaInfoActionCreators = require('../actions/KafkaInfoActionCreators');
var _ = require('underscore');

var _optimisticTimeout, _optimistic, _optimisticThrottleTimeout, _optimisticThrottle;

var Schema = React.createClass({
  displayName: "Schema",
  _pretty: function (json) {
    return JSON.stringify(json,null,2); 
  },
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Schema</strong></h3>
        </div>
        <div className="panel-body">
          <pre className="text-info">{this._pretty(this.props.schema)}</pre>
        </div>
      </div>
    );
  }
});

var Configuration = React.createClass({
  displayName: "Configuration",
  _requestedState: "Start",
  _slider: undefined,
  componentDidMount: function() {
    this._slider = $('#throttle').slider({
      min: 0,
      max: 1000,
      step: 50,
      formatter: function(value) {
        return value + 'ms';
      }
    })
    .on('change', this.props.onThrottle);
  },
  componentWillUnmount: function() {
  },
  componentWillReceiveProps: function(nextProps) {
    this._requestedState = nextProps.info.state === "running" ? "Stop" : "Start";
    this._slider.slider('setValue', nextProps.info.throttle);
  },
  render: function() {
    var state = this.props.info.state;
    var ellipses = state === "running" ? <span><span className="one">.</span><span className="two">.</span><span className="three">.</span></span> : null;
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Control</strong></h3>
        </div>
        <div className="panel-body">
          <table className="table table-striped" style={{"tableLayout": "fixed"}}>
            <tr>
              <td className="text-primary" style={{"width": "20%"}}><strong>Topic</strong></td>
              <td>{this.props.info.topic ? this.props.info.topic : "undefined"}</td>
            </tr>
            <tr>
              <td className="text-primary"><strong>State</strong></td>
              <td>
                {state ? state : "undefined"}{ellipses}&nbsp;&nbsp;
                <button type="button" className="btn btn-info" onClick={this._onStartStop}>
                  {this._requestedState}
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-primary"><strong>Throttle</strong></td>
              <td>
                <input id="throttle" data-slider-id='throttleSlider' type="text" data-slider-value={this.props.info.throttle}/>
              </td>
            </tr>
            <tr>
              <td className="text-primary"><strong>Broker</strong></td>
              <td>{this.props.info.bootstrapServers ? this.props.info.bootstrapServers : "undefined"}</td>
            </tr>
            <tr>
              <td className="text-primary"><strong>Schema</strong></td>
              <td>{this.props.info.schemaRegistry ? this.props.info.schemaRegistry : "undefined"}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  },
  _onStartStop: function() {
    console.log('start / stop  producing');
    KafkaInfoActionCreators.startStopProducing(this.props.info.topic, this._requestedState);
  },
  _onThrottle: function(evt) {
    KafkaInfoActionCreators.throttle(this.props.info.topic, evt.value.newValue);
  }
});

var ModuleRow = React.createClass({
  displayName: "ModuleRow",
  _onCbClick: function(evt) {
    console.log("click " + this.props.selected);
    this.props.onModuleCbClick(this.props.group.group, this.props.module, this.props.selected);
  },
  render: function() {
    var module = this.props.module;
    var group = this.props.group;
    var index = this.props.index;
    var selected = this.props.selected;
    var modulesNr = this.props.modulesNr;
    var stripe = this.props.stripe;
    var onCbClick = this._onCbClick;
    if (index === 0) {
      return (      
        <tr>
          <td className="text-primary" className={stripe} rowSpan={modulesNr}><strong>{group.stepSize + " ms"}</strong></td>
          <td>
            {module}
          </td>
          <td>
            <input type="checkbox" style={{"cursor": "pointer"}} checked={selected} onChange={onCbClick} />
          </td>
        </tr>
      );
    }
    return (
      <tr key={index} >
        <td>
          {module}
        </td>
        <td>
          <input type="checkbox" style={{"cursor": "pointer"}} checked={selected} onChange={onCbClick} />
        </td>
      </tr>
    );
  }
});

var Modules = React.createClass({
  displayName: "Modules",
  render: function() {
    var modules = this.props.modules;
    var produced = this.props.produced;
    var onModuleCbClick = this.props.onModuleCbClick;
    var groupsList = <tr />;
    if (modules !== undefined) {
      var stepSizes = Object.keys(modules).map(function(group, index) {
        return {
          group: group,
          stepSize: parseInt(group.split("::")[1])
        }
      });
      var groups = _.sortBy(stepSizes, function(one) {
        return one.stepSize;
      });
      groupsList = groups.map(function(oneGroup, index) {
        var sortedModules = _.sortBy(modules[oneGroup.group], function(oneModule) {
          return oneModule;
        });
        var modulesNr = sortedModules.length;
        var group = sortedModules.map(function(module, idx) {
          var stripe = index % 2 === 0 ? "active" : "";
          var producedList = _.flatten(Object.keys(produced).map(function(group, undex) {
            return produced[group];
          }));
          var selected = producedList.indexOf(sortedModules[idx]) >= 0;

          return <ModuleRow module={sortedModules[idx]} 
                            group={oneGroup} 
                            index={idx} 
                            modulesNr={modulesNr} 
                            selected={selected} 
                            stripe={stripe}
                            onModuleCbClick={onModuleCbClick} />
        });
        return (
          {group}
        );
      });
    }
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Modules</strong></h3>
        </div>
        <div className="panel-body">
          <table className="table table-condensed table-hover">
            <tbody>
              {groupsList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

var Record = React.createClass({
  displayName: "Record",
  _pretty: function (json) {
    return JSON.stringify(json,null,2); 
  },
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Random record</strong></h3>
        </div>
        <div className="panel-body">
          <table className="table table-striped" style={{"tableLayout": "fixed"}}>
            <tr>
              <td className="text-primary" style={{"width": "20%"}}><strong>Topic</strong></td>
              <td>{this.props.record.topic ? this.props.record.topic : "undefined"}</td>
            </tr>
            <tr>
              <td className="text-primary"><strong>Key</strong></td>
              <td className="text-primary" style={{"overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{this.props.record.key ? this.props.record.key : "undefined"}</td>
            </tr>
            <tr>
              <td colSpan="2"><pre className="text-primary">{this.props.record.value ? this._pretty(this.props.record.value) : "undefined"}</pre></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
});

var KafkaInfo = React.createClass({
  displayName: 'KafkaInfo',
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return KafkaInfoStore.getKafkaInfo();
  },
  componentDidMount: function() {
    KafkaInfoStore.addChangeListener(this._onChange);
    KafkaInfoActionCreators.startKafkaInfoRequest();
  },
  componentWillUnmount: function() {
    KafkaInfoStore.removeChangeListener(this._onChange);
    KafkaInfoActionCreators.stopKafkaInfoRequest();    
    clearTimeout(_optimisticTimeout);
    _optimistic = undefined;
    clearTimeout(_optimisticThrottleTimeout);
    _optimisticThrottle = undefined;
  },
  render: function() {
    var schemaJson = this.state.schema ? JSON.parse(this.state.schema) : {};
    var record = this.state.randomRecord ? JSON.parse(this.state.randomRecord) : {};
    record.value = record.value ? JSON.parse(record.value) : {};
    return (
      <div className="col-md-8">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <Configuration info={this.state} onThrottle={this._onThrottle}/>
            <div className="row">
              <div className="col-md-12">
                <Record record={record} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <Modules modules={this.state.simulatorModules} produced={this.state.producedModules} onModuleCbClick={this._onModuleCbClick} />
          </div>
          <div className="col-lg-3 visible-lg">
            <Schema schema={schemaJson} />
          </div>
        </div>
      </div>
    );
  },
  _onChange: function() {
    var cluster = this.context.router.getCurrentParams().clusterId;
    if (this.isMounted() && !_optimistic) {
      this.setState(KafkaInfoStore.getKafkaInfo()[cluster]);
    }
  },
  _onModuleCbClick: function(group, module, selected) {
    this._doOptimisticUpdate(group, module, selected);
  },
  _onThrottle: function(evt) {
    clearTimeout(_optimisticThrottleTimeout);
    var cluster = this.context.router.getCurrentParams().clusterId;
    if (!_optimistic) {
      _optimistic = KafkaInfoStore.getKafkaInfo()[cluster];
    }
    _optimistic.throttle = evt.value.newValue;
    this.setState(_optimistic);
    _optimisticThrottleTimeout = setTimeout(function () {
      _optimistic = undefined;
      this.setState(KafkaInfoStore.getKafkaInfo()[cluster]);
    }.bind(this), 2000);
    KafkaInfoActionCreators.throttle(cluster, evt.value.newValue);
  },
  _doOptimisticUpdate: function(group, module, selected) {
    clearTimeout(_optimisticTimeout);
    var cluster = this.context.router.getCurrentParams().clusterId;
    if (!_optimistic) {
      _optimistic = KafkaInfoStore.getKafkaInfo()[cluster];
    }
    if (selected) {
      var moduleIdx = _optimistic.producedModules[group].indexOf(module);
      _optimistic.producedModules[group].splice(moduleIdx, 1);
    } else {
      if (_optimistic.producedModules[group] === undefined) {
        _optimistic.producedModules[group] = [module];
      } else {
        _optimistic.producedModules[group].push(module);
      }
    }
    this.setState(_optimistic);
    _optimisticTimeout = setTimeout(function () {
      console.log("modules timeout");
      _optimistic = undefined;
      this.setState(KafkaInfoStore.getKafkaInfo()[cluster]);
    }.bind(this), 2000);
    KafkaInfoActionCreators.setProducedModules(cluster, _optimistic.producedModules);
  }
});

module.exports = KafkaInfo;
