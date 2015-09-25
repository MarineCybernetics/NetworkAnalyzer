"use strict";

var ContactsServerActionCreators = require('../actions/ContactsServerActionCreators');

var ContactsAPI = {
	requestContacts: function() {
		$.get('/contacts', function(response) {
			ContactsServerActionCreators.handleContactsSuccess(response);
		});
	}
};

module.exports = ContactsAPI;