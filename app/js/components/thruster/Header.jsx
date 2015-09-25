"use strict";

var React = require('react'),
    AppActionCreators = require('../../actions/AppActionCreators');

var ModalHeader = React.createClass({
  displayName: "ModalHeader",
  componentDidMount: function() {
    setTimeout(function() {
      this.refs.header.getDOMNode().focus();
    }.bind(this), 0);
  },
  render: function() {
    var title = (this.props.title) ? <strong>{this.props.title} - </strong> : null;
    return (
      <div className="modal-header" tabIndex="1" ref="header">
        <button type="button" className="close" onClick={this._onCloseClick}
          aria-hidden="true" id="modal-close-button">&times;
        </button>
        <h3>
          {title}{this.props.name}
        </h3>
      </div>
    );
  },
  _onCloseClick: function() {
    AppActionCreators.navigateTo('vessel');
  }
});

module.exports = ModalHeader;