import React from 'react'
import post from '../assets/post.jpeg'
import TCP from '../assets/TCP.png'
function Networks() {
	return (
		<div class="md:container md:mx-auto px-4 mt-20 pb-10">
		<p class="flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		Networks that led to the Internet
		</p>
		<div class="mt-10 p-4 tracking-tight shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
		<div class='bg-gray-200'>
			<p class='mb-10 p-3 m-2 text-2xl font-bold'>NPL network</p>
		</div>
 <p>
			
 Following discussions with J. C. R. Licklider in 1965, Donald Davies became interested in data communications for computer networks.Later that year, at the National Physical Laboratory (United Kingdom), Davies designed and proposed a national commercial data network based on packet switching. The following year, he described the use of an "Interface computer" to act as a router. The proposal was not taken up nationally but he produced a design for a local network to serve the needs of NPL and prove the feasibility of packet switching using high-speed data transmission. He and his team were one of the first to use the term 'protocol' in a data-commutation context in 1967.
</p>
<br/>
<hr/>
<br/>
<p>
By 1969 he had begun building the Mark I packet-switched network to meet the needs of the multidisciplinary laboratory and prove the technology under operational conditions. In 1976, 12 computers and 75 terminal devices were attached, and more were added until the network was replaced in 1986. The NPL local network and the ARPANET were the first two networks in the world to use packet switching, and were interconnected in the early 1970s. The NPL team carried out simulation work on packet networks, including datagram networks, and research into internetworking.
</p>
<br/>
<div class='bg-gray-200'>
			<p class=' pb-3 p-3 m-2 text-2xl font-bold'>ARPANET</p>
		</div>
		<br/>
<p>
Robert Taylor was promoted to the head of the Information Processing Techniques Office (IPTO) at Defense Advanced Research Projects Agency (DARPA) in 1966. He intended to realize Licklider's ideas of an interconnected networking system. As part of the IPTO's role, three network terminals had been installed: one for System Development Corporation in Santa Monica, one for Project Genie at University of California, Berkeley, and one for the Compatible Time-Sharing System project at Massachusetts Institute of Technology (MIT). Taylor's identified need for networking became obvious from the waste of resources apparent to him.
</p>
<br/>
<div class='p-10 flex flex-col items-center justify-center '>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={post} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>35 Years of the Internet, 1969–2004. Stamp of Azerbaijan, 2004.</p>
</div>
<br/>
<p>
Bringing in Larry Roberts from MIT in January 1967, he initiated a project to build such a network. Roberts and Thomas Merrill had been researching computer time-sharing over wide area networks (WANs). Wide area networks emerged during the 1950s and became established during the 1960s. At the first ACM Symposium on Operating Systems Principles in October 1967, Roberts presented a proposal for the "ARPA net", based on Wesley Clark's proposal to use Interface Message Processors to create a message switching network. At the conference, Roger Scantlebury presented Donald Davies' work on packet switching for data communications and mentioned the work of Paul Baran at RAND. Roberts incorporated the packet switching concepts into the ARPANET design and upgraded the proposed communications speed from 2.4 kbps to 50 kbps. Leonard Kleinrock subsequently developed the mathematical theory behind the performance of this technology building on his earlier work on queueing theory.
</p>
<br/>
<p>
ARPA awarded the contract to build the network to Bolt Beranek & Newman, and the first ARPANET link was established between the University of California, Los Angeles (UCLA) and the Stanford Research Institute at 22:30 hours on October 29, 1969.
</p>
<p>
"We set up a telephone connection between us and the guys at SRI ...", Kleinrock ... said in an interview: "We typed the L and we asked on the phone,
</p>
<div class='flex flex-col bg-red-200 justify-center items-center text-center max-w-md mx-auto p-2 rounded-2xl shadow-2xl flex-wrap'>

<p>
"Do you see the L?"
</p>
<p>
"Yes, we see the L," came the response.
</p>
<p>
We typed the O, and we asked, "Do you see the O."
</p>
<p>
"Yes, we see the O."
</p>
<p>
Then we typed the G, and the system crashed ...
</p>
<p>
Yet a revolution had begun" ....
</p>

</div>
<br/>
<hr/>
<br/>
<p>
By December 1969, a four-node network was connected by adding the University of Utah and the University of California, Santa Barbara. In the same year, Taylor helped fund ALOHAnet, a system designed by professor Norman Abramson and others at the University of Hawaii at Manoa that transmitted data by radio between seven computers on four islands on Hawaii. The software for establishing links between network sites in the ARPANET was the Network Control Program (NCP), completed in c. 1970.
</p>
<br/>
<p>
ARPANET development was centered around the Request for Comments (RFC) process, still used today for proposing and distributing Internet Protocols and Systems. RFC 1, entitled "Host Software", was written by Steve Crocker from the University of California, Los Angeles, and published on April 7, 1969. These early years were documented in the 1972 film Computer Networks: The Heralds of Resource Sharing.

</p>
<hr/>
<br/>
<p>
Early international collaborations on ARPANET were sparse. Connections were made in 1973 to the Norwegian Seismic Array (NORSAR), via a satellite link at the Tanum Earth Station in Sweden, and to Peter Kirstein's research group at University College London which provided a gateway to British academic networks. By 1981, the number of hosts had grown to 213. ARPANET became the technical core of what would become the Internet, and a primary tool in developing the technologies used.
</p>
<br/>
<div class='bg-gray-200'>
			<p class=' mb-10 p-3 m-2 text-2xl font-bold'>Merit Network</p>
		</div>
		<p>
		The Merit Network was formed in 1966 as the Michigan Educational Research Information Triad to explore computer networking between three of Michigan's public universities as a means to help the state's educational and economic development.With initial support from the State of Michigan and the National Science Foundation (NSF), the packet-switched network was first demonstrated in December 1971 when an interactive host to host connection was made between the IBM mainframe computer systems at the University of Michigan in Ann Arbor and Wayne State University in Detroit. In October 1972 connections to the CDC mainframe at Michigan State University in East Lansing completed the triad. Over the next several years in addition to host to host interactive connections the network was enhanced to support terminal to host connections, host to host batch connections (remote job submission, remote printing, batch file transfer), interactive file transfer, gateways to the Tymnet and Telenet public data networks, X.25 host attachments, gateways to X.25 data networks, Ethernet attached hosts, and eventually TCP/IP and additional public universities in Michigan join the network. All of this set the stage for Merit's role in the NSFNET project starting in the mid-1980s.
		</p>
<br/>
<div class='bg-gray-200'>
			<p class=' mb-10 p-3 m-2 text-2xl font-bold'>CYCLADES</p>
		</div>
		<p>
		The CYCLADES packet switching network was a French research network designed and directed by Louis Pouzin. Building on the ideas of Donald Davies, Pouzin developed the network to explore alternatives to the early ARPANET design and to support internetworking research. First demonstrated in 1973, it was the first network to make the hosts responsible for reliable delivery of data, rather than the network itself, using unreliable datagrams and associated end-to-end protocol mechanisms. Concepts of this network influenced later ARPANET architecture.
		</p>
			</div>
<div>
		<p class="mt-10 flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		1973–1989: Merging the networks and creating the Internet

		</p>
		<div class="p-4 mb-10 tracking-tight shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
		<div class='bg-gray-200'>
			<p class='mb-10 p-3 m-2 text-2xl font-bold'>TCP/IP</p>
		</div>
 <p>
			
 With so many different network methods, something was needed to unify them. Bob Kahn of DARPA recruited Vinton Cerf of Stanford University to work with him on the problem. Steve Crocker formed an ARPA "Networking Working Group" with Vint Cerf. Concurrently, an International Networking Working Group formed in 1972; active members included Vint Cerf, Alex McKenzie, Donald Davies, Roger Scantlebury, Louis Pouzin and Hubert Zimmermann. By 1973, these groups had worked out a fundamental reformulation, where the differences between network protocols were hidden by using a common internetwork protocol, and instead of the network being responsible for reliability, as in the ARPANET, the hosts became responsible. This work also coined the term catenet (concatenated network).
</p>
<br/>
<hr/>
<br/>
<p>
Kahn and Cerf published their ideas in 1974, which incorporated concepts proposed by Louis Pouzin and Hubert Zimmermann, designers of the CYCLADES network. The specification of the resulting protocol, the Transmission Control Program, was published as RFC 675 by the Network Working Group in December 1974. It contains the first attested use of the term internet, as a shorthand for internetwork. This software was monolithic in design using two simplex communication channels for each user session.
</p>
<br/>
<p>
With the role of the network reduced to a core of functionality, it became possible to exchange traffic with other networks independently from their detailed characteristics, thereby solving the fundamental problems of internetworking. DARPA agreed to fund development of prototype software. Testing began in 1975 through concurrent implementations at Stanford, BBN and University College London. After several years of work, the first demonstration of a gateway between the Packet Radio network (PRNET) in the SF Bay area and the ARPANET was conducted by the Stanford Research Institute. On November 22, 1977 a three network demonstration was conducted including the ARPANET, the SRI's Packet Radio Van on the Packet Radio Network and the Atlantic Packet Satellite Network (SATNET).
</p>
<br/>
<p>
The software was redesigned as a modular protocol stack, using full-duplex channels. Between 1976 and 1977, Yogen Dalal proposed separating TCP's routing and transmission control functions into two discrete layers, which led to the splitting of the Transmission Control Program into the Transmission Control Protocol (TCP) and the IP protocol (IP) in version 3 in 1978. Originally referred to as IP/TCP, version 4 was described in IETF publication RFC 791 (September 1981), 792 and 793. It was installed on SATNET in 1982 and the ARPANET in January 1983 after the DoD made it standard for all military computer networking. This resulted in a networking model that became known informally as TCP/IP. It was also referred to as the Department of Defense (DoD) model, DARPA model, or ARPANET model. Cerf credits his graduate students Yogen Dalal, Carl Sunshine, Judy Estrin, and Richard Karp, with important work on the design and testing. DARPA sponsored or encouraged the development of TCP/IP implementations for many operating systems.
</p>
<br/>
<hr/>
<br/>
<p>
IPv4 uses 32-bit addresses which limits the address space to 232 addresses, i.e. 4294967296 addresses. The last available IPv4 address was assigned in January 2011. IPv4 is being replaced by its successor, called "IPv6", which uses 128 bit addresses, providing 2128 addresses, i.e. 340282366920938463463374607431768211456. This is a vastly increased address space. The shift to IPv6 is expected to take many years, decades, or perhaps longer, to complete, since there were four billion machines with IPv4 when the shift began.
</p>
<br/>
<div class='bg-gray-200'>
			<p class=' pb-3 p-3 m-2 text-2xl font-bold'>From ARPANET to NSFNET</p>
		</div>
		<br/>
<p>
After the ARPANET had been up and running for several years, ARPA looked for another agency to hand off the network to; ARPA's primary mission was funding cutting edge research and development, not running a communications utility. Eventually, in July 1975, the network had been turned over to the Defense Communications Agency, also part of the Department of Defense. In 1983, the U.S. military portion of the ARPANET was broken off as a separate network, the MILNET. MILNET subsequently became the unclassified but military-only NIPRNET, in parallel with the SECRET-level SIPRNET and JWICS for TOP SECRET and above. NIPRNET does have controlled security gateways to the public Internet.
</p>
<br/>
<p>
The networks based on the ARPANET were government funded and therefore restricted to noncommercial uses such as research; unrelated commercial use was strictly forbidden. This initially restricted connections to military sites and universities. During the 1980s, the connections expanded to more educational institutions, and even to a growing number of companies such as Digital Equipment Corporation and Hewlett-Packard, which were participating in research projects or providing services to those who were.
</p>
<br/>
<p>
Several other branches of the U.S. government, the National Aeronautics and Space Administration (NASA), the National Science Foundation (NSF), and the Department of Energy (DOE) became heavily involved in Internet research and started development of a successor to ARPANET. In the mid-1980s, all three of these branches developed the first Wide Area Networks based on TCP/IP. NASA developed the NASA Science Network, NSF developed CSNET and DOE evolved the Energy Sciences Network or ESNet.
</p>
<br/>
<hr/>
<br/>
<p>
NASA developed the TCP/IP based NASA Science Network (NSN) in the mid-1980s, connecting space scientists to data and information stored anywhere in the world. In 1989, the DECnet-based Space Physics Analysis Network (SPAN) and the TCP/IP-based NASA Science Network (NSN) were brought together at NASA Ames Research Center creating the first multiprotocol wide area network called the NASA Science Internet, or NSI. NSI was established to provide a totally integrated communications infrastructure to the NASA scientific community for the advancement of earth, space and life sciences. As a high-speed, multiprotocol, international network, NSI provided connectivity to over 20,000 scientists across all seven continents.
</p>
<div class='p-10 flex flex-col items-center justify-center '>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={TCP} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>35 Years of the Internet, 1969–2004. Stamp of Azerbaijan, 2004.</p>
</div>
<br/>
<div class='bg-gray-200'>
			<p class=' pb-3 p-3 m-2 text-2xl font-bold'>Transition towards the Internet</p>
		</div>
		<br/>
<p>
The term "internet" was reflected in the first RFC published on the TCP protocol (RFC 675: Internet Transmission Control Program, December 1974) as a short form of internetworking, when the two terms were used interchangeably. In general, an internet was a collection of networks linked by a common protocol. In the time period when the ARPANET was connected to the newly formed NSFNET project in the late 1980s, the term was used as the name of the network, Internet, being the large and global TCP/IP network.
</p>
<br/>
<p>
As interest in networking grew by needs of collaboration, exchange of data, and access of remote computing resources, the TCP/IP technologies spread throughout the rest of the world. The hardware-agnostic approach in TCP/IP supported the use of existing network infrastructure, such as the International Packet Switched Service (IPSS) X.25 network, to carry Internet traffic.
</p>
<br/>
<hr/>
<br/>
<p>
Finally, routing technologies were developed for the Internet to remove the remaining centralized routing aspects. The Exterior Gateway Protocol (EGP) was replaced by a new protocol, the Border Gateway Protocol (BGP). This provided a meshed topology for the Internet and reduced the centric architecture which ARPANET had emphasized. In 1994, Classless Inter-Domain Routing (CIDR) was introduced to support better conservation of address space which allowed use of route aggregation to decrease the size of routing tables.
</p>
</div>
</div>
		</div>
		
	)
}

export default Networks
