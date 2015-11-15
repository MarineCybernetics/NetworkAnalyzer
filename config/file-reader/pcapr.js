"use strict";

var fs = require('fs'),
    child_process = require('child_process');


module.exports = {
    extrSummary : function() {
	    child_process.exec('tshark -n -q -r ./dev/1.pcapng -z io,stat,0', function(error, stdout, stderr){
	      fs.writeFile("./dev/generated/summary.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("Summary file was saved!");
	        });
	      });
		return true;
	},
	extrHierarchy : function() {
	    child_process.exec('tshark -r ./dev/1.pcapng -qz io,phs', function(error, stdout, stderr){
	      fs.writeFile("./dev/generated/hierarchy.txt", stdout, function(err) {
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
	      fs.writeFile("./dev/generated/IPcov.txt", stdout, function(err) {
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
	      fs.writeFile("./dev/generated/TCPcov.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("TCPcov file was saved!");
	        });
	      });
		return true;		
	},
	extrUDPconv : function() {
	    child_process.exec('tshark -2 -r ./dev/1.pcapng -R "eth.dst not contains 01:00:5E" -qz conv,udp', function(error, stdout, stderr){
	      fs.writeFile("./dev/generated/UDPcov.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("UDPcov file was saved!");
	        });
	      });
		return true;		
	},	
	extrUDPMconv : function() {
	    child_process.exec('tshark -2 -r ./dev/1.pcapng -R "eth.dst contains 01:00:5E" -qz conv,udp', function(error, stdout, stderr){
	      fs.writeFile("./dev/generated/UDPMcov.txt", stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("UDPMcov file was saved!");
	        });
	      });
		return true;		
	},
	extrUDP : function(nodeIP) {
    	var filePath = "./dev/generated/" + nodeIP + "_udp.txt";
    	var command = 'tshark -r ./dev/1.pcapng -qz conv,udp,"ip.addr==' + nodeIP + '"';
    	console.log(command);
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
    extrUDPNodeConv : function(nodeIP) {
    	var filePath = "./dev/generated/" + nodeIP + "_node_udp.txt";
    	var command = 'tshark -2 -r ./dev/1.pcapng -R "ip.addr==' + nodeIP + ' and udp and not icmp" -c 100 -Tfields -e frame.time_relative -e ip.src -e udp.srcport -e ip.dst -e udp.dstport -e frame.cap_len';
	    child_process.exec(command, function(error, stdout, stderr){
	      fs.writeFile(filePath, stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("UDPnode file was saved!");
	        });
	      });
		return true;		
	},
	extrTCP : function(nodeIP) {
    	var filePath = "./dev/generated/" + nodeIP + "_tcp.txt";
    	var command = 'tshark -r ./dev/1.pcapng -qz conv,tcp,"ip.addr==' + nodeIP + '"';
	    child_process.exec(command, function(error, stdout, stderr){
	      fs.writeFile(filePath, stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("TCP file was saved!");
	        });
	      });
		return true;		
	},
    extrIP : function(nodeIP) {
    	var filePath = "./dev/generated/" + nodeIP + "_ip.txt";
    	var command = 'tshark -r ./dev/1.pcapng -qz conv,ip,"ip.addr==' + nodeIP + '"';
	    child_process.exec(command, function(error, stdout, stderr){
	      fs.writeFile(filePath, stdout, function(err) {
	        if(err) {
	         return console.log(err);
	        }
	         console.log("IP file was saved!");
	        });
	      });
		return true;		
	}	

};
