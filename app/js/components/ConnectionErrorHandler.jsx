"use strict";

var React = require('react'),
    ConnectionErrorActionCreators = require('../actions/ConnectionErrorActionCreators');

var ErrorModal = React.createClass({
  displayName: "ErrorModal",
  componentDidMount: function() {
    $(".modal-backdrop").addClass("error-modal-backdrop");
  },
  componentWillUnmount: function() {
    $(".modal-backdrop").removeClass("error-modal-backdrop");
  },
  render: function() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="errorModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Error</h3>
            </div>
            <div className="modal-body">
              <div>
                Lost connection to backend
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var modalInstance;

module.exports = {
  setError: function() {
    if (!modalInstance) {
      ConnectionErrorActionCreators.lostConnection();
      modalInstance = React.createElement(ErrorModal, {});
      React.render(modalInstance, document.getElementById('react-modal'));
      $("#errorModal").modal({
        backdrop: "static",
        keyboard: false
      });
      document.body.classList.add('hide-scrollbars');
    }
  },
  resetError: function() {
    if (modalInstance) {
      ConnectionErrorActionCreators.backOnline();
      $("#errorModal").modal('hide');
      React.unmountComponentAtNode(document.getElementById('react-modal'));
      modalInstance = undefined;
      document.body.classList.remove('hide-scrollbars');
    }
  }
};