"use strict";

var NmapServerActionCreators = require('../actions/NmapServerActionCreators');

var NmapAPI = {
	requestNmap: function(plcId) {
		var plcI = 'plc2';
		var Url = '/nmap/' + plcId;
		$.get(Url, function(response) {
			NmapServerActionCreators.handleNmapSuccess(response);
		});
	}
};

module.exports = NmapAPI;