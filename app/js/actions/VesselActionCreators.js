"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		ChartsAPI = require('../utils/ChartsAPI');

var _chartsInterval;

var VesselActionCreators = {
	handleThrusterClick: function(id) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.THRUSTER_CLICK,
			id: id
		});
	}
};

module.exports = VesselActionCreators;