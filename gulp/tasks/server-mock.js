"use strict";

var express = require('express'),
    http = require('http'),
    config = require('../../config/server.js'),
    socketServer = require('../../config/socketServer.js'),
    livereload = require('connect-livereload'),
    serverport = 8083;

var mockedJSON = require('../../config/mockedJSON');

var seriesProvider = require('../../config/seriesProvider');

var app = express(),
    server = http.Server(app);

module.exports = function() {
    // global controller
  app.use(function(req,res,next) {
    res.header('X-Frame-Options' , "GOFORIT");
    next();
  });

  app.use(livereload({
    port: 35729
  }));

  app.use(express.static('./dist/public/signature'));

  socketServer.setSocketsUp(server);

  config.drawRoutes(app);

  server.listen(serverport, function() {
    console.log('listening on *:' + serverport);
  });
};