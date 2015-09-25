"use strict";
var React = require('react'),
  router = require('./router');

router.run(function(Handler) {
  React.render(<Handler />, document.getElementById("react-view"));
});