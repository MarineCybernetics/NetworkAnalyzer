"use strict";

var TopologyAPI = require('../utils/TopologyAPI');

var _topologyInterval;

var TopologyActionCreators = {
	startTopoRequest: function() {
		_topologyInterval = setInterval(function() {
			TopologyAPI.requestTopo();
		}, 1000);
	},
	startTopoLinkMeasRequest: function() {
		_topologyInterval = setInterval(function() {
			TopologyAPI.requestTopoLinkMeas();
		}, 1000);
	},
    startTopoTCPRequest: function() {
		_topologyInterval = setInterval(function() {
			TopologyAPI.requestTopoTCP();
		}, 1000);
	},
	startTopoUDPRequest: function() {
		_topologyInterval = setInterval(function() {
			TopologyAPI.requestTopoUDP();
		}, 1000);
	},
	stopTopoRequest: function() {
		clearInterval(_topologyInterval);
	}
};

module.exports = TopologyActionCreators;