"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
  WEATHER_RECEIVED: null,
  ENGINE_STATUS_RECEIVED: null,
  APPLICATION_VERSION_RECEIVED: null,
  WEBSOCKET_MESSAGE_RECEIVED: null,
  REQUEST_KAFKA_INFO_SUCCESS: null,
  REQUEST_NAVIGATION_SUCCESS: null,
  REQUEST_CHARTS_DATA_SUCCESS: null,

  PLC_CLICK: null,
  CLOSE_PLC_INFO: null,

  CHAIR_CLICK: null,
  CLOSE_CHAIR_INFO: null,  

  SERVER_CLICK: null,
  CLOSE_SERVER_INFO: null,

  REQUEST_SNMP_DATA_SUCCESS: null,
  REQUEST_NMAP_DATA_SUCCESS: null,
  REQUEST_HIERARCHY_SUCCESS: null,
  REQUEST_SUMMARY_SUCCESS: null,  
  REQUEST_TOPOLOGY_SUCCESS: null,
  REQUEST_TCP_DATA_SUCCESS: null,
  REQUEST_UDP_DATA_SUCCESS: null,
  REQUEST_META_DATA_SUCCESS: null,

  CANCEL_ALL_PRESSED: null,
  MESSAGER_RECEIVED: null,
  REQUEST_CONTACTS_DATA_SUCCESS: null,
  REQUEST_SIGNAL_DATA_SUCCESS: null,
  SIGNAL_VALUE_RECEIVED: null,
  REQUEST_EVA_STATUS_SUCCESS: null,
  LOST_CONNECTION: null,
  BACK_ONLINE: null
});