"use strict";

var mockedJSON = require('./mockedJSON');

module.exports = function(original_array, step_size, signalId){
	var ptr = 120;
	var listeners = [];
	var _signalId = signalId;

	var regenerate_time_stamps = function(arr, step_size) {
		var ret_val = arr;
		var end_date = new Date();
		var time_stamp_ms = end_date.valueOf() - step_size * ptr;
		for (var i = 0; i < ptr; i++) {
			ret_val[i].time = new Date(time_stamp_ms);
			time_stamp_ms += step_size;
		};
		return ret_val;
	};

	var updated = regenerate_time_stamps(original_array, step_size);
	var series_1m = updated.slice(0, 120);

	setInterval(function() {
		series_1m.shift();
		var new_value = updated[ptr];
		new_value.time = new Date(); 
		series_1m.push(new_value);
		if (ptr > original_array.length - 2) {
			ptr = 0;
			return;
		}
		ptr++;
		for (var i = 0; i < listeners.length; i++) {
			listeners[i](new_value);
		};
	}, step_size);	

	return {
		getSeries_1m: function() {
			return series_1m;
		},
		addListener: function(callback) {
			listeners.push(callback);
			return callback;
		},
		removeListener: function(callback) {
			var index = listeners.indexOf(callback);
			if (index > -1) {
				listeners.splice(index, 1)
			}
		},
		getSignalId: function() {
			return signalId;
		}
	}
}