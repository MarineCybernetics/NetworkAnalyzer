"use strict";

var TopologyAPI = require('../utils/TopologyAPI');

var _topologyInterval;

var TopologyActionCreators = {
	startTopoRequest: function() {
		_topologyInterval = setInterval(function() {
			TopologyAPI.requestTopo();
		}, 1000);
	},
	startTopoIPRequest: function() {
		_topologyInterval = setInterval(function() {
			TopologyAPI.requestTopoIP();
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