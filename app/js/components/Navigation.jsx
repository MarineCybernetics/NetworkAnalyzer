"use strict";

var React = require('react'),
    Router = require('react-router'),
    NavigationActionCreators = require('../actions/NavigationActionCreators'),
    NavigationStore = require('../stores/NavigationStore'),
    _ = require('underscore'),
    InlineSVG = require('react-inlinesvg'),
    Tab = require('./Tab');

var State = Router.State;

var Header = React.createClass({
  displayName: "Header",
  render: function() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
            data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-link navbar-left logo" href="http://www.marinecybernetics.com">
          <img src="img/logo.png" />
        </a>
      </div>
    );
  }
});

var Navbar = React.createClass({
  displayName: "Navbar",
  componentDidMount: function() {
    if (this.isMounted()) {
      $('[data-toggle="popover"]').popover();
    }
  },
  render: function() {
    return (
      <div>
        <div className="container collapse navbar-collapse" style={{"height": "1px"}}>
          <ul className="nav navbar-nav">
            <Tab to="topologies"><strong>Topologies</strong></Tab>
          </ul>
          <p className="navbar-text pull-right brand-container">
            <a href="#" className="signature-brand">
              <span data-toggle="popover" data-placement="bottom" 
                    data-trigger="hover focus" data-content="Simulation Assistant" data-animation="true">
                NetworkAnalyser&nbsp;
              </span>
            </a>
          </p>
        </div>
      </div>
    );
  }
});

var Navigation = React.createClass({
  displayName: "Navigation",
  mixins: [State],
  componentDidMount: function() {
    NavigationStore.addChangeListener(this._onChange);
  },
  render: function() {
    var applicationVersion = this.props.applicationVersion;
    var fixedOrStatic = this.isActive('automatic') ? "navbar-fixed-top" : "navbar-static-top";
    return (
      <div className={"navbar navbar-inverse navbar-default " + fixedOrStatic} role="navigation">
        <Header />
        <Navbar applicationVersion={applicationVersion} />
      </div>
    );
  },
  _onChange: function() {
    console.log("change fired from navigation store");
  }
});

module.exports = Navigation;