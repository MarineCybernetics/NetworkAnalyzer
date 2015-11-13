"use strict";

var MetaServerActionCreators = require('../actions/MetaServerActionCreators');

var MetaAPI = {
	requestMeta: function(nodeId) {
		var Url = '/meta/' + nodeId;
		$.get(Url, function(response) {
			MetaServerActionCreators.handleMetaSuccess(response);
		});
	}
};

module.exports = MetaAPI;