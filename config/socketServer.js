"use strict";

var WebSocketServer = require('ws').Server;
var mockedJSON = require('./mockedJSON.js');
var custom = mockedJSON.getCustomData();
var socketclients = {};
var sendWith1Hz = ['/weather', '/enginestatus', '/runningtest', '/messager'];
var automaticTests = mockedJSON.getAutomaticTests();
var manualTests = mockedJSON.getManualTests();

module.exports = {
	setSocketsUp: function(server) {
		var socketserver = new WebSocketServer({
      server: server
    });

    mockedJSON.watchCustomData(function(data) {
	    custom = data;
	    socketclients['/websocket'].forEach(function(ws) {
	      sendMessage(ws);
	    });
	  });

	  mockedJSON.watchAutomaticTests(function(data) {
	    automaticTests = data;
	    socketclients['/automatictests'].forEach(function(ws) {
	      sendMessage(ws);
	    });
	  });

	  mockedJSON.watchManualTests(function(data) {
	    manualTests = data;
	    socketclients['/manualtests'].forEach(function(ws) {
	      sendMessage(ws);
	    });
	  });

	  var sendMessage = function(ws) {
	    var url = ws.upgradeReq.url;
	    switch (url) {
	      case "/websocket":
	        ws.send(JSON.stringify({
	          "header": {
	            "event": "websocket"
	          },
	          "data": {"event": "websocket", "data": {"websocket": "connected", "timestamp": Date.now()}}
	        }));
	        break;
	      case "/weather":
	        ws.send(JSON.stringify({
	          "header": {
	            "event": "weather"
	          },
	          "data": custom.weather
	        }));
	        break;
	      case "/enginestatus":
	        ws.send(JSON.stringify({
	          "header": {
	            "event": "engineStatus"
	          },
	          "data": custom.engineStatus
	        }));
	        break;
	      case "/runningtest":
	        ws.send(JSON.stringify({
	          "header": {
	            "event": "runningTest"
	          },
	          "data": custom.runningTest
	        }));
	        break;
	      case "/automatictests":
	        ws.send(JSON.stringify({
	          "header": {
	            "event": "automaticTests"
	          },
	          "data": automaticTests
	        }));
	        break;
	      case "/manualtests":
	        ws.send(JSON.stringify({
	          "header": {
	            "event": "manualTests"
	          },
	          "data": manualTests
	        }));
	        break;
	      case "/messager":
	        ws.send(JSON.stringify({
	          "header": {
	            "event": "messager"
	          },
	          "data": custom
	        }));
	        break;
	      default:
	      	//no op
	      	break;
	    }
	  };

	  socketserver.on("connection", function(ws) {
	    var upgradeUrl = ws.upgradeReq.url;

	    if (socketclients[upgradeUrl] === undefined) {
	      socketclients[upgradeUrl] = [];
	    }

	    socketclients[upgradeUrl].push(ws);
	    
	    if (upgradeUrl.indexOf("websocket") > -1 || upgradeUrl.indexOf("messager") > -1) {
	    	var date = new Date();
	    	console.log(date.toLocaleString() + " a client has connected to " + upgradeUrl + " (total " + socketclients[upgradeUrl].length + ")");
	    }

	    ws.on("message", function(data) {
	      if (data === "echo") {
	        ws.send(data);
	      }
	    });

	    ws.on("close", function() {
	      socketclients[upgradeUrl].forEach(function(outbound, index) {
	        if (outbound === ws) {
	          socketclients[upgradeUrl].splice(index, 1);
	          if (upgradeUrl.indexOf("websocket") > -1 || upgradeUrl.indexOf("messager") > -1) {
	          	var date = new Date();
	          	console.log(date.toLocaleString() + " removed an oubound connection from " + upgradeUrl + " (total " + socketclients[upgradeUrl].length + ")");
	          }
	        }
	      });
	    });

	    sendMessage(ws);
	  });

	  setInterval(function() {
	    Object.keys(socketclients).forEach(function(key) {
	      if (socketclients.hasOwnProperty(key) && sendWith1Hz.indexOf(key) >= 0) {
	        socketclients[key].forEach(function(ws) {
	          sendMessage(ws);
	        });
	      }
	    });
	  }, 1000);
	}
}