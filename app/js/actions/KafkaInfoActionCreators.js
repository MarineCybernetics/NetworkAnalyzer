"use strict";

var KafkaInfoAPI = require('../utils/KafkaInfoAPI');

var _kafkaInfoInterval;

var KafkaInfoActionCreators = {
	startKafkaInfoRequest: function() {
		_kafkaInfoInterval = setInterval(function() {
			KafkaInfoAPI.requestKafkaInfo();
		}, 1000);
	},
	stopKafkaInfoRequest: function() {
		clearInterval(_kafkaInfoInterval);
	},
	startStopProducing: function(topic, requestedState) {
		KafkaInfoAPI.requestStartStopProducing(topic, requestedState);
	},
	setProducedModules: function(cluster, producedModules) {
		console.log("module cb click " + cluster + ": " + producedModules);
		KafkaInfoAPI.setProducedModules(cluster, producedModules);
	},
	throttle: function(topic, newValue) {
		KafkaInfoAPI.requestThrottle(topic, newValue);
	}
};

module.exports = KafkaInfoActionCreators;