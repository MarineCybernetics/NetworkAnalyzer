"use strict";

var TopologyServerActionCreators = require('../actions/TopologyServerActionCreators');

module.exports = {
	requestTopo: function() {
		$.get('/topo', function(response) {
			TopologyServerActionCreators.handleTopologySuccess(response);                             
		});
	},
	requestTopoIP: function() {
		$.get('/topoIP', function(response) {
			TopologyServerActionCreators.handleTopologySuccess(response);                             
		});
	},
	requestTopoTCP: function() {
		$.get('/topoTCP', function(response) {
			TopologyServerActionCreators.handleTopologySuccess(response);                             
		});
	},
	requestTopoUDP: function() {
		$.get('/topoUDP', function(response) {
			TopologyServerActionCreators.handleTopologySuccess(response);                             
		});
	}			
};
