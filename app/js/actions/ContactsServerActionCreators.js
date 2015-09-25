"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		ActionTypes = require('../constants/ActionTypes');

var ContactsServerActionCreators = {
	handleContactsSuccess: function(response) {
		AppDispatcher.handleServerAction({
			type: ActionTypes.REQUEST_CONTACTS_DATA_SUCCESS,
			response: response
		});
	}
};

module.exports = ContactsServerActionCreators;