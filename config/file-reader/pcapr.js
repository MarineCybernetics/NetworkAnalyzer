"use strict";

var fs = require('fs'),
    child_process = require('child_process');


module.exports = {
	extrHierarchy : function() {
	    child_process.exec('tshark -r ./dev/1.pcapng -qz io,phs', function(error, stdout, stderr){
	      fs.writeFile("./dev/txtdata/hierarchy.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("Hierarchy file was saved!");
	        });
	      });
		return true;
	},
	extrIPconv : function() {
	    child_process.exec('tshark -r ./dev/1.pcapng -qz conv,ip', function(error, stdout, stderr){
	      fs.writeFile("./dev/txtdata/IPcov.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("IPcov file was saved!");
	        });
	      });
		return true;		
	},
	extrTCPconv : function() {
	    child_process.exec('tshark -r ./dev/1.pcapng -qz conv,tcp', function(error, stdout, stderr){
	      fs.writeFile("./dev/txtdata/TCPcov.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("TCPcov file was saved!");
	        });
	      });
		return true;		
	},
	extrUDPconv : function() {
	    child_process.exec('tshark -2 -r ./dev/1.pcapng -R "eth.dst contains 01:00:5E" -qz conv,udp', function(error, stdout, stderr){
	      fs.writeFile("./dev/txtdata/UDPcov.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("UDPcov file was saved!");
	        });
	      });
		return true;		
	}	

};