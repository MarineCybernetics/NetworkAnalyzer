"use strict";

var HierarchyAPI = require('../utils/HierarchyAPI');

var _hierarchyInterval;

var HierarchyActionCreators = {
	startHierarchyRequest: function() {
		_hierarchyInterval = setInterval(function() {
			HierarchyAPI.requestHierarchy();
		}, 1000);
	},
	stopHierarchyRequest: function() {
		clearInterval(_hierarchyInterval);
	}
};

module.exports = HierarchyActionCreators;