"use strict";

var fs = require('fs'),
    child_process = require('child_process');


module.exports = {
    extrSummary : function() {
	    var stdout = child_process.execSync('tshark -n -q -r ./dev/provide/1.pcapng -z io,stat,0');
	      fs.writeFileSync("./dev/generated/summary.txt", stdout);
	      console.log("summary file is saved");
		return true;
	},
	extrHierarchy : function() {
	    var stdout = child_process.execSync('tshark -r ./dev/provide/1.pcapng -qz io,phs');
	      fs.writeFileSync("./dev/generated/hierarchy.txt", stdout);
	      console.log("hierarchy file is saved");
		return true;
	},
	extrTCPconv : function() {
	    var stdout = child_process.execSync('tshark -r ./dev/provide/1.pcapng -qz conv,tcp');
	      fs.writeFileSync("./dev/generated/TCPcov.txt", stdout);
	      console.log("TCPcov file is saved");
		return true;		
	},
	extrUDPconv : function() {
	    var stdout = child_process.execSync('tshark -2 -r ./dev/provide/1.pcapng -R "not(eth.dst contains 01:00:5E)" -qz conv,udp');
	      fs.writeFileSync("./dev/generated/UDPcov.txt", stdout);
	      console.log("UDPscov file is saved");
		return true;		
	},	
	extrUDPMconv : function() {
	    var stdout = child_process.execSync('tshark -2 -r ./dev/provide/1.pcapng -R "eth.dst contains 01:00:5E" -qz conv,udp');
	      fs.writeFileSync("./dev/generated/UDPMcov.txt", stdout);
	      console.log("UDPMcov file is saved");
		return true;		
	},
	extrUDP : function(nodeIP) {
    	var filePath = "./dev/generated/" + nodeIP + "_udp.txt";
    	var command = 'tshark -r ./dev/provide/1.pcapng -qz conv,udp,"ip.addr==' + nodeIP + '"';
	    var stdout = child_process.execSync(command);
	      fs.writeFileSync(filePath, stdout);
	      console.log(nodeIP + "node UDP file is saved");
		return true;		
	},
    extrUDPNodeConv : function(nodeIP) {
    	var filePath = "./dev/generated/" + nodeIP + "_node_udp.txt";
    	var command = 'tshark -2 -r ./dev/provide/1.pcapng -R "ip.addr==' + nodeIP + ' and udp and not icmp" -c 100 -Tfields -e frame.time_relative -e ip.src -e udp.srcport -e ip.dst -e udp.dstport -e frame.cap_len';
	    var stdout = child_process.execSync(command);
	    fs.writeFileSync(filePath, stdout);
	    console.log(nodeIP + "node UDP packets file is saved");
		return true;		
	},
	extrTCP : function(nodeIP) {
    	var filePath = "./dev/generated/" + nodeIP + "_tcp.txt";
    	var command = 'tshark -r ./dev/provide/1.pcapng -qz conv,tcp,"ip.addr==' + nodeIP + '"';
	    var stdout = child_process.execSync(command);
	    fs.writeFileSync(filePath, stdout);
	    console.log(nodeIP + "node TCP file is saved");  
		return true;		
	}	
};
