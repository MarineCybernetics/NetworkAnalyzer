"use strict";
var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		CHANGE_EVENT = 'change';

var _dimensions = {width: 0, height: 0};
var _listener;

var WindowStore = assign({}, EventEmitter.prototype, {
	getDimensions: function() {
		return _dimensions;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
		if (!_listener) {
			console.log("adding window listener");
		  window.addEventListener('resize', () => {
	      this._updateDimensions();
	      this.emitChange();
			});
			_listener = true;
		}
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
  _updateDimensions: function() {
    _dimensions.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    _dimensions.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
  },
	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;
		switch(action.type) {
			default:
				//no op
		}
	})
});

module.exports = WindowStore;