"use strict";

var React = require('react'),
    ContactsStore = require('../../stores/ContactsStore'),
    ThrusterActionCreators = require('../../actions/ThrusterActionCreators');

var Contact = React.createClass({
  displayName: "Contact",
  render: function() {
    var contactData = this.props.contactData;
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="well">
          <h6>Competence: <strong>{contactData.competence}</strong></h6>
          <h6>Name: <strong>{contactData.name}</strong></h6>
          <h6>Company: <strong>{contactData.company}</strong></h6>
          <h6>Skype: <strong>{contactData.skype}</strong></h6>
          <h6>Email: <strong>{contactData.email}</strong></h6>
          <h6>Phone: <strong>{contactData.phone}</strong></h6>
        </div>
      </div>
    );
  }
});

var Status = React.createClass({
  displayName: "Status",
  componentDidMount: function() {
    ThrusterActionCreators.startContactsDataRequest();
    ContactsStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ThrusterActionCreators.stopContactsDataRequest();    
    ContactsStore.removeChangeListener(this._onChange);
  },
  getInitialState: function() {
    return ContactsStore.getContactsData();
  },
  render: function() {

    var contactsList = <div />
    var contacts = this.state.contacts;

    if (contacts !== undefined) {
      contactsList = contacts.map(function(one, index) {
        return (
          <Contact contactData={one} key={index}/>
        );
      });
    };

    return (
      <div className="row">
      	{contactsList}
      </div>
    );
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(ContactsStore.getContactsData());
    }
  }
});

module.exports = Status;


