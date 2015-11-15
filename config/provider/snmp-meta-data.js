module.exports = [
	{
		"shortName": "ifSpeed",
		"description": "An estimate of the interface's current bandwidth in bits per second"
	},
	{
		"shortName": "ifInOctets",
		"description": "The total number of octets received on the interface, including framing characters"
	},
	{
		"shortName": "ifOutOctets",	
		"description": "The total number of octets transmitted out of the interface, including framing characters"
	},
	{
		"shortName": "InUtil",	
		"description": "Utilisation of the interface calculated based on ifSpeed and ifInOctets by sampling"
		
	},
	{
		"shortName": "OutUtil",		
		"description": "Utilisation of the interface calculated based on ifSpeed and ifOutOctets by sampling"
		
	},
	{
		"shortName": "ifInUcastPkts",	
		"description": "The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were not addressed to a multicast or broadcast address at this sub-layer"
		
	},
	{
		"shortName": "ifInNUcastPkts",	
		"description": "The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were addressed to a multicast or broadcast address at this sub-layer"
		
	},
	{
		"shortName": "ifInDiscards",	
		"description": "The number of inbound packets which were chosen to be discarded even though no errors had been detected to prevent their being deliverable to a higher-layer protocol. One possible reason for discarding such a packet could be to free up buffer space"
		
	},
	{
		"shortName": "ifInErrors",
		"description": "For packet-oriented interfaces, the number of inbound packets that contained errors preventing them from being deliverable to a higher-layer protocol"
		
	},
	{
		"shortName": "ifInUnknownProtos",		
		"description": "For packet-oriented interfaces, the number of packets received via the interface which were discarded because of an unknown or unsupported protocol. For character-oriented or fixed-length interfaces that support protocol multiplexing the number of transmission units received via the interface which were discarded because of an unknown or unsupported protocol. For any interface that does not support protocol multiplexing, this counter will always be 0"
		
	},
	{
		"shortName": "ifOutUcastPkts",		
		"description": "The total number of packets that higher-level protocols requested be transmitted, and which were not addressed to a multicast or broadcast address at this sub-layer, including those that were discarded or not sent"
		
	},
	{
		"shortName": "ifOutNUcastPkts",		
		"description": "The total number of packets that higher-level protocols requested be transmitted, and which were addressed to a multicast or broadcast address at this sub-layer, including those that were discarded or not sent"
		
	},
	{
		"shortName": "ifOutDiscards",	
		"description": "The number of outbound packets which were chosen to be discarded even though no errors had been detected to prevent their being transmitted. One possible reason for discarding such a packet could be to free up buffer space"
		
	},
	{
		"shortName": "ifOutErrors",		
		"description": "For packet-oriented interfaces, the number of outbound packets that could not be transmitted because of errors"
		
	},
	{
		"shortName": "ifOutQLen",		
		"description": "The length of the output packet queue (in packets)"
		
	},
	{
		"shortName": "ipInReceives",		
		"description": "The total number of input datagrams received from interfaces, including those received in error"
		
	},
	{
		"shortName": "ipInHdrErrors",		
		"description": "The number of input datagrams discarded due to errors in their IPv4 headers, including bad checksums, version number mismatch, other format errors, time-to-live exceeded, errors discovered in processing their IPv4 options, etc"
		
	},
	{
		"shortName": "ipInAddrErrors",		
		"description": "The number of input datagrams discarded because the IPv4 address in their IPv4 header's destination field was not a valid address to be received at this entity. This count includes invalid addresses (e.g., 0.0.0.0) and addresses of unsupported Classes (e.g., Class E). For entities which are not IPv4 routers, and therefore do not forward datagrams, this counter includes datagrams discarded because the destination address was not a local address"
		
	},
	{
		"shortName": "ipInUnknownProtos",		
		"description": "The number of locally-addressed datagrams received successfully but discarded because of an unknown or unsupported protocol"
		
	},
	{
		"shortName": "ipInDiscards",		
		"description": "The number of input IPv4 datagrams for which no problems were encountered to prevent their continued processing, but which were discarded (e.g., for lack of buffer space). Note that this counter does not include any datagrams discarded while awaiting re-assembly"
		
	},
	{
		"shortName": "ipInDelivers",		
		"description": "The total number of input datagrams successfully delivered to IPv4 user-protocols (including ICMP)"
		
	},
	{
		"shortName": "ipOutRequests",		
		"description": "The total number of IPv4 datagrams which local IPv4 user protocols (including ICMP) supplied to IPv4 in requests for transmission. Note that this counter does not include any datagrams counted in ipForwDatagrams"
		
	},
	{
		"shortName": "ipOutDiscards",		
		"description": "The number of output IPv4 datagrams for which no problem was encountered to prevent their transmission to their destination, but which were discarded (e.g., for lack of buffer space). Note that this counter would include datagrams counted in ipForwDatagrams if any such packets met this (discretionary) discard criterion"
		
	},
	{
		"shortName": "ipOutNoRoutes",		
		"description": "The number of IPv4 datagrams discarded because no route could be found to transmit them to their destination. Note that this counter includes any packets counted in ipForwDatagrams which meet this `no-route' criterion. Note that this includes any datagrams which a host cannot route because all of its default routers are down"
		
	},
	{
		"shortName": "ipReasmReqds",		
		"description": "The number of IPv4 fragments received which needed to be reassembled at this entity"
		
	},
	{
		"shortName": "ipReasmOKs",		
		"description": "The number of IPv4 datagrams successfully re-assembled"
		
	},
	{
		"shortName": "ipReasmFails",		
		"description": "The number of failures detected by the IPv4 re-assembly algorithm (for whatever reason: timed out, errors, etc). Note that this is not necessarily a count of discarded IPv4 fragments since some algorithms (notably the algorithm in RFC 815) can lose track of the number of fragments by combining them as they are received"
		
	},
	{
		"shortName": "ipFragOKs",		
		"description": "The number of IPv4 datagrams that have been successfully fragmented at this entity"
		
	},
	{
		"shortName": "ipFragFails",		
		"description": "The number of IPv4 datagrams that have been discarded because they needed to be fragmented at this entity but could not be, e.g., because their Don't Fragment flag was set"
		
	},
	{
		"shortName": "ipFragCreates",		
		"description": "The number of IPv4 datagram fragments that have been generated as a result of fragmentation at this entity"
		
	},
	{
		"shortName": "icmpOutErrors",		
		"description": "The number of ICMP messages which this entity did not send due to problems discovered within ICMP, such as a lack of buffers. This value should not include errors discovered outside the ICMP layer, such as the inability of IP to route the resultant datagram. In some implementations, there may be no types of error which contribute to this counter's value"
		
	},
	{
		"shortName": "tcpActiveOpens",		
		"description": "The number of times that TCP connections have made a direct transition to the SYN-SENT state from the CLOSED state"
		
	},
	{
		"shortName": "tcpPassiveOpens",		
		"description": "The number of times TCP connections have made a direct transition to the SYN-RCVD state from the LISTEN state"
		
	},
	{
		"shortName": "tcpAttemptFails",		
		"description": "The number of times that TCP connections have made a direct transition to the CLOSED state from either the SYN-SENT state or the SYN-RCVD state, plus the number of times that TCP connections have made a direct transition to the LISTEN state from the SYN-RCVD state"
		
	},
	{
		"shortName": "tcpEstabResets",		
		"description": "The number of times that TCP connections have made a direct transition to the CLOSED state from either the ESTABLISHED state or the CLOSE-WAIT state"
		
	},
	{
		"shortName": "tcpCurrEstab",
		"description": "The number of TCP connections for which the current state is either ESTABLISHED or CLOSE-WAIT"
		
	},
	{
		"shortName": "tcpInSegs",		
		"description": "The total number of segments received, including those received in error. This count includes segments received on currently established connections"
		
	},
	{
		"shortName": "tcpOutSegs",		
		"description": "The total number of segments sent, including those on current connections but excluding those containing only retransmitted octets"
		
	},
	{
		"shortName": "tcpRetransSegs",		
		"description": "The total number of segments retransmitted; that is, the number of TCP segments transmitted containing one or more previously transmitted octets"
		
	},
	{
		"shortName": "tcpInErrs",		
		"description": "The total number of segments received in error (e.g., bad TCP checksums)"
		
	},
	{
		"shortName": "tcpOutRsts",		
		"description": "The number of TCP segments sent containing the RST flag"
		
	},
	{
		"shortName": "udpInDatagrams",		
		"description": "The total number of UDP datagrams delivered to UDP users"
		
	},
	{
		"shortName": "udpNoPorts",		
		"description": "The total number of received UDP datagrams for which there was no application at the destination port"
		
	},
	{
		"shortName": "udpInErrors",		
		"description": "The number of received UDP datagrams that could not be delivered for reasons other than the lack of an application at the destination port"
		
	},
	{
		"shortName": "udpOutDatagrams",		
		"description": "The total number of UDP datagrams sent from this entity"
		
	},
	{
		"shortName": "snNvLogNewEntries",		
		"description": "Counter for events that are logged in Non-Volatile Memory"
		
	},
	{
		"shortName": "snTrapTimeLastGenerated",		
		"description": "The value of sysUpTime at the time the last trap was generated"
		
	},
	{
		"shortName": "snResetPowerUpCount",		
		"description": "The number of times the system was powered up"
		
	},
	{
		"shortName": "snX200RmStateChanges",		
		"description": "Number of changes to RM active state"
		
	},
	{
		"shortName": "snX200SignalledFaults",		
		"description": "Number of signalled faults"
		
	}	
];