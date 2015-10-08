"use strict";

var NmapServerActionCreators = require('../actions/NmapServerActionCreators');

var NmapAPI = {
	requestNmap: function(nodeId) {
		var Url = '/nmap/' + nodeId;
		$.get(Url, function(response) {
			NmapServerActionCreators.handleNmapSuccess(response);
		});
	}
};

module.exports = NmapAPI;