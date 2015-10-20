"use strict";

var TCPServerActionCreators = require('../actions/TCPServerActionCreators');

var TCPAPI = {
	requestTCP: function(nodeId) {
		var Url = '/tcp/' + nodeId;
		$.get(Url, function(response) {
			TCPServerActionCreators.handleTCPSuccess(response);
		});
	}
};

module.exports = TCPAPI;