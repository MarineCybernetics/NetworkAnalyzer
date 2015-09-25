"use strict";

var React = require('react'),
    Router = require('react-router');

var Link = Router.Link,
  State = Router.State;

var Tab = React.createClass({
  displayName: "Tab",
  mixins: [State],
  render: function() {
    var isActive = this.isActive(this.props.to, this.props.params, this.props.query),
        activeClass = isActive ? 'active' : '';
    return (
      <li className={activeClass}>
        <Link {...this.props} />
      </li>
    );
  }
});

module.exports = Tab;