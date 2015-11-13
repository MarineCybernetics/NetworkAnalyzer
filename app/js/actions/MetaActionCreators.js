"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionTypes = require('../constants/ActionTypes'),
	MetaAPI = require('../utils/MetaAPI');

var _metaInterval;

var MetaActionCreators = {
	startMetaDataRequest: function(Id) {
		_metaInterval = setInterval(function() {
			MetaAPI.requestMeta(Id);
		}, 1000);
	},
	stopMetaDataRequest: function() {
		clearInterval(_metaInterval);
	}
};

module.exports = MetaActionCreators;