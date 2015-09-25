"use strict";

var React = require('react'),
    EvaStatusStore = require('../stores/EvaStatusStore'),
    EventsListActionCreators = require('../actions/EventsListActionCreators'),
    _ = require('underscore');

var Event = React.createClass({
  displayName: 'Event',
  render: function() {
    var type = "list-group-item";
    switch(this.props.event.event_type_id) {
      case 1:
        type += " list-group-item-success";
        break;
      case 2:
        type += " list-group-item-warning";
        break;
      case 3:
        type += " list-group-item-danger";
        break;
      default:
        //no op
    }
    return (
      <li className={type} onClick={this._onClick}>
        <span>{this.props.event.time}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{this.props.event.description}</span>
      </li>
    );
  },
  _onClick: function() {
    alert(this.props.event.time + '\n' + this.props.event.description);
  }
});

var EventsList = React.createClass({
  displayName: 'EventsList',
  getInitialState: function() {
    return EvaStatusStore.getStatus();
  },
  componentDidMount: function() {
    EvaStatusStore.addChangeListener(this._onChange);
    EventsListActionCreators.startEvaStatusRequest();
  },
  componentWillUnmount: function() {
    EvaStatusStore.removeChangeListener(this._onChange);
    EventsListActionCreators.stopEvaStatusRequest();
  },
  render: function() {
    var sortedEvents = _.sortBy(this.state.events, function(oneEvent) {
      return oneEvent.time;
    }).reverse();

    var events = <li className="list-group-item" />

    events = sortedEvents.map(function(one, index) {
      return (<Event key={index} event={one} />);
    });

    return (
      <div id="footer">
        <div className="navbar navbar-fixed-bottom">
          <div className="events-list">
            <ul className="list-group">
              {events}
            </ul>
          </div>
        </div>
      </div>
    );
  },
  _onChange: function() {
    var state = EvaStatusStore.getStatus();
    this.setState(state);
    console.log(state);
  }
});

module.exports = EventsList;