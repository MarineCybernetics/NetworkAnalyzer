"use strict";

var LinkMeasServerActionCreators = require('../actions/LinkMeasServerActionCreators');

var LinkMeasAPI = {
	requestLinkMeas: function(nodeId) {
		var Url = '/linkmeas/' + nodeId;
		$.get(Url, function(response) {
			LinkMeasServerActionCreators.handleLinkMeasSuccess(response);
		});
	}
};

module.exports = LinkMeasAPI;