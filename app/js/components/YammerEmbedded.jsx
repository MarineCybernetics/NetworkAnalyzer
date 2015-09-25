"use strict";

var React = require('react');

var YamerEmbedded = React.createClass({
  displayName: 'YammerFeed',
  componentDidMount: function() {
    yam.connect.embedFeed(
      { container: '#embedded-feed',
        network: 'dnvgl.com',
        feedType: 'group'//,                // can be 'group', 'topic', or 'user'          
        // feedId: '119112',                     // feed ID from the instructions above
        // config: {
        //   defaultGroupId: 119112      // specify default group id to post to 
        // }
      }
    );      
  },
  render: function() {
    return (
      <div className="yammer-feed" id="embedded-feed">
      </div>
    );
  }
});

module.exports = YamerEmbedded;