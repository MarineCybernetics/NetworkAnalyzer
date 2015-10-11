"use strict";

var TopologyServerActionCreators = require('../actions/TopologyServerActionCreators');

var TopologyAPI = {
	requestTopology: function() {
		$.get('/topology', function(response) {
			TopologyServerActionCreators.handleTopologySuccess(response);                             
		});
	}
};

module.exports = TopologyAPI;