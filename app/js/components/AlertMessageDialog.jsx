"use strict";

var React = require('react'),
  AppActionCreators = require('../actions/AppActionCreators'),
  AppStore = require('../stores/AppStore');

var AlertMessageDialog = React.createClass({
  displayName: "AlertMessageDialog",
  getInitialState: function() {
    return {
      alert: AppStore.getAlert()
    };
  },
  render: function() {
    return (
      <div>
        <div className="modal fade in" style={{display: "block"}} tabIndex="-1" role="dialog">
          <div className="modal-dialog" onClick={this._onDialogClick}>
            <div className="modal-content">
              <div class="message">
                <div className="modal-header">
                  <h3>{this.state.alert.title}</h3>
                </div>
                <div className="modal-body">
                  <div>{this.state.alert.message}</div>  
                </div>
                <div className="modal-footer">
                  <button className="btn btn-info" onClick={this._onGo}>
                    Continue test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in" />
      </div>
    );
  },
  handleHotkey: function(evt) {
    if (evt.keyCode === KEYCODE_ESC) {
      AppActionCreators.handleAlertMessageDialogClose();
    }
  },
  _onDialogClick: function(evt) {
    evt.stopPropagation();
  },
  _onGo: function(evt) {
    AppActionCreators.acknowledgeAlert();
  }
});

module.exports = AlertMessageDialog;