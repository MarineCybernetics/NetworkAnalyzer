"use strict";

var HierarchyServerActionCreators = require('../actions/HierarchyServerActionCreators');

var HierarchyAPI = {
	requestHierarchy: function() {
		$.get('/statistics/hierarchy', function(response) {
			HierarchyServerActionCreators.handleHierarchySuccess(response);                             
		});
	}
};

module.exports = HierarchyAPI;