"use strict";

var UDPServerActionCreators = require('../actions/UDPServerActionCreators');

var UDPAPI = {
	requestUDP: function(nodeId) {
		var Url = '/udp/' + nodeId;
		$.get(Url, function(response) {
			UDPServerActionCreators.handleUDPSuccess(response);
		});
	}
};

module.exports = UDPAPI;