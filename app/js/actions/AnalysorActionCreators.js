"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes');

var AnalysorActionCreators = {
	handlePLCClick: function(id) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.PLC_CLICK,
			id: id
		});
	}
};

module.exports = AnalysorActionCreators;