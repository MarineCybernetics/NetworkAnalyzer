"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		ChartsAPI = require('../utils/ChartsAPI'),
		ContactsAPI = require('../utils/ContactsAPI');

var _chartsInterval, _contactsInterval;

var ThrusterActionCreators = {
  setChartWidth: function(width) {
  	AppDispatcher.handleViewAction({
  		type: ActionTypes.SET_CHART_WIDTH,
  		width: width
  	})
  },
	startContactsDataRequest: function() {
		_contactsInterval = setInterval(function() {
			ContactsAPI.requestContacts();
		}, 1000);
	},
	stopContactsDataRequest: function() {
		clearInterval(_contactsInterval);
	}
};

module.exports = ThrusterActionCreators;