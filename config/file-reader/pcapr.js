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
	},
    extrUDP : function(nodeIP) {
    	var filePath = "./dev/txtdata/" + nodeIP + "_udp.txt";
    	var command = 'tshark -2 -r ./dev/1.pcapng -R "ip.addr==' + nodeIP + ' and udp and not icmp" -c 100 -Tfields -e frame.time_relative -e ip.src -e udp.srcport -e ip.dst -e udp.dstport -e frame.cap_len';
	    child_process.exec(command, function(error, stdout, stderr){
	      fs.writeFile(filePath, stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("UDP file was saved!");
	        });
	      });
		return true;		
	},
	extrTCP : function(nodeIP) {
    	var filePath = "./dev/txtdata/" + nodeIP + "_tcp.txt";
    	var command = 'tshark -r ./dev/1.pcapng -qz conv,tcp,"ip.addr==' + nodeIP + '"';
    	console.log(command);
	    child_process.exec(command, function(error, stdout, stderr){
	      fs.writeFile(filePath, stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("TCP file was saved!");
	        });
	      });
		return true;		
	}	

};
