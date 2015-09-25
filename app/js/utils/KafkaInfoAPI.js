"use strict";

var KafkaInfoServerActionCreators = require('../actions/KafkaInfoServerActionCreators');

var KafkaInfoAPI = {
	requestKafkaInfo: function() {
		$.get('/kafka/info', function(response) {
			KafkaInfoServerActionCreators.handleKafkaInfoSuccess(response);
		});
	},
	requestStartStopProducing: function(topic, requestedState) {
		console.log("requesting " + requestedState + " for topic " + topic);
    var data = {
      topic: topic,
      requestedState: requestedState
    };
    $.post('/kafka/producers/control', data);
  },
  setProducedModules: function(cluster, producedModules) {
  	console.log("setting produced modules " + producedModules + " for cluster " + cluster);
  	var data = {
  		cluster: cluster,
  		modules: producedModules
  	};
  	$.post('/kafka/producers/control/modules', data);
  },
  requestThrottle: function(cluster, newValue) {
    var throttle = parseInt(newValue);
    console.log("setting throttle " + throttle + " for cluster " + cluster);
    var data = {
      cluster: cluster,
      throttle: throttle
    };
    $.post('/kafka/producers/control/throttle', data);
  }
};

module.exports = KafkaInfoAPI;