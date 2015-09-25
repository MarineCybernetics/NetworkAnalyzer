"use strict";
module.exports = {
  create: function(path) {
    var websocket,
      watchers = [],
      echoID,
      reconnect = true;

    var notify = function(message) {
      if (message === undefined || message.header === undefined) {
        console.log("received message is not in a proper format: " + message);
        return;
      }
      watchers.forEach(function(watcher) {
        if (watcher.event === message.header.event) {
          watcher.callback(message.data);
        }
      });
    };

    var startEcho = function(errorHandler) {
      if (websocket === undefined || websocket.readyState === WebSocket.CLOSED) {
        console.log("WebSocket cannot start echoing for it is disonnected");
        return;
      }
      echoID = setInterval(function() {
        try {
          if (websocket === undefined || websocket.readyState !== WebSocket.OPEN) {
            throw new Error('WebSocket is not connected');
          }
          websocket.send("echo");
          if (errorHandler) {
            errorHandler.resetError();
          }
        } catch (err) {
          if (errorHandler) {
            errorHandler.setError();
          }
          throw err;
        }
      }, 1000);
    };

    var openSocket = function() {
      if (websocket !== undefined && websocket.readyState !== WebSocket.CLOSED) {
        console.log("WebSocket is already opened");
        return;
      }
      var url = "ws://" + $(location).attr('host') + "/" + path;
      websocket = new WebSocket(url);

      websocket.onopen = function() {
        console.log("WebSocket is connected to " + url);
      };

      websocket.onmessage = function(event) {
        if (event.data === "echo") {
          return;
        }
        try {
          var message = JSON.parse(event.data);
          notify(message);
        } catch (e) {
          console.log(e);
        }
      };

      websocket.onclose = function() {
        if (reconnect) {
          setTimeout(function() {
            openSocket();
          }, 1000);
        }
      };
    };

    return {
      open: openSocket,
      echo: startEcho,
      subscribe: function(event, callback) {
        var subscription = {
          "event": event,
          "callback": callback
        };
        watchers.push(subscription);
        console.log("subscribing to " + subscription.event);
        return subscription;
      },
      unsubscribe: function(subscription) {
        var index = watchers.indexOf(subscription);
        console.log("unsubscribing from " + subscription.event);
        if (index < 0) {
          throw ("wtf could not find socket on receive subscription");
        }
        watchers.splice(index, 1);
      },
      close: function() {
        console.log("WebSocket /" + path + " has been closed");
        reconnect = false;
        clearInterval(echoID);
        websocket.close();
      }
    };
  }
};