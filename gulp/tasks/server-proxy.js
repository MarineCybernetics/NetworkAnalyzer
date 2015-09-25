var httpProxy = require('http-proxy'),
  express = require('express'),
  livereload = require('connect-livereload'),
  http = require('http'),
  serverport = 8083;


var proxy = httpProxy.createProxyServer({
  target: 'http://172.27.48.5:8080/'
});

proxy.on('error', function(err, req, res) {
  if (typeof res.writeHead === 'function') {
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
  }
});

var restUrl = function(url) {
  var restUrls = [
    "acknowledgealert",
    "aggregatedprogress",
    "alerts",
    "messages",
    "applicationversion",
    "cancelall",
    "executionstatus",
    "finishfmea",
    "getReport",
    "reportinfo",
    "reportlist",
    "reset",
    "tests",
    "resetteststates",
    "runall",
    "savecomment",
    "saveresultoverride",
    "setreportsettings",
    "setscript",
    "userinput",
    "files",
    "debug",
    "status",
    "kafka",
    "navigation"
  ];

  var isRest = false;
  restUrls.forEach(function(restUrl) {
    if (url.indexOf(restUrl) !== -1) {
      isRest = true;
      return;
    }
  });
  return isRest;
};

var proxyMiddleware = function(req, res, next) {
  if (restUrl(req.url)) {
    proxy.web(req, res);
  } else {
    next();
  }
};

module.exports = function() {
  "use strict";
  var app = express(),
    server = http.createServer(app);
  app.use(livereload({
    port: 35729
  }));
  app.use(express.static('./dist/public/signature'));
  app.use(proxyMiddleware);
  server.on('upgrade', function(req, socket, head) {
    proxy.ws(req, socket, head);
  });
  server.listen(serverport);
};