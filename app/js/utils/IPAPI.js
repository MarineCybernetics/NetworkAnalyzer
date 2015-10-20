"use strict";

var IPServerActionCreators = require('../actions/IPServerActionCreators');

var IPAPI = {
	requestIP: function(nodeId) {
		var Url = '/ip/' + nodeId;
		$.get(Url, function(response) {
			IPServerActionCreators.handleIPSuccess(response);
		});
	}
};

module.exports = IPAPI;