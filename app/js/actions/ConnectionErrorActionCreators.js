"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes');

var ConnectionErrorActionCreators = {
  lostConnection: function() {
  	AppDispatcher.handleViewAction({
  		type: ActionTypes.LOST_CONNECTION
  	});
  },
	backOnline: function() {
		AppDispatcher.handleViewAction({
  		type: ActionTypes.BACK_ONLINE
  	});
	}
};

module.exports = ConnectionErrorActionCreators;