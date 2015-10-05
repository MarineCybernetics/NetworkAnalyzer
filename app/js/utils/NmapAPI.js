"use strict";

var NmapServerActionCreators = require('../actions/NmapServerActionCreators');

var NmapAPI = {
	requestContacts: function() {
		$.get('/nmap', function(response) {
			NmapServerActionCreators.handleNmapSuccess(response);
		});
	}
};

module.exports = NmapAPI;