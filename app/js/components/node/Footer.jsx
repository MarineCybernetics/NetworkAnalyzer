"use strict";

var React = require('react'),
    AppActionCreators = require('../../actions/AppActionCreators');

var ModalFooter = React.createClass({
  displayName: "ModalFooter",
  render: function() {
    return (
      <div className="modal-footer">
        <button className="btn btn-info btn-wide" onClick={this._onCloseClick} tabIndex="2">
          Close
        </button>
      </div>
    );
  },
  _onCloseClick: function() {
    AppActionCreators.navigateTo('vessel');
  }
});

module.exports = ModalFooter;