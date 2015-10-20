"use strict";

var React = require('react');

var Metadata = React.createClass({
  displayName: "ThrusterInfo",
  getInitialState: function() { 
    return {
      type: "Tunnel",
      vendor: "Panasonic",
      description: "Decent one. No complains so far."
    };
  },
  render: function() {
    var imgPath = "img/" + this.props.title + ".jpg";
    return (
      <div className="row metadata">
        <div className="col-md-2">
          <img src={imgPath} width="100%"/>
        </div>
        <div className="col-md-10">
          <p><strong style={{color: "#368282"}}>Type:&nbsp;</strong>{this.state.type}</p>
          <p><strong style={{color: "#368282"}}>Vendor:&nbsp;</strong>{this.state.vendor}</p>
          <p><strong style={{color: "#368282"}}>Description:&nbsp;</strong>{this.state.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = Metadata;