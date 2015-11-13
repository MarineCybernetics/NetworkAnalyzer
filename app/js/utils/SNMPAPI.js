"use strict";

var SNMPServerActionCreators = require('../actions/SNMPServerActionCreators');

var SNMPAPI = {
	requestSNMP: function(nodeId) {
		var Url = '/snmp/' + nodeId;
		$.get(Url, function(response) {
			SNMPServerActionCreators.handleSNMPSuccess(response);
		});
	}
};

module.exports = SNMPAPI;