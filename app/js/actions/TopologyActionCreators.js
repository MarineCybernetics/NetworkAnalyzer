"use strict";

var TopologyAPI = require('../utils/TopologyAPI');

var _topologyInterval;

var TopologyActionCreators = {
	startTopologyRequest: function() {
		_topologyInterval = setInterval(function() {
			TopologyAPI.requestTopology();
		}, 1000);
	},
	stopTopologyRequest: function() {
		clearInterval(_topologyInterval);
	}
};

module.exports = TopologyActionCreators;