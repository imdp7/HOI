import React from 'react'
import history from '../assets/history.jpeg'

function History() {
	return (
		<div class="md:container md:mx-auto pl-10 pr-10 px-4 mt-20 pb-10">
		<p class="flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		History of the Internet
		</p>
		<div class="mt-10 p-3 tracking-tight

 shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
 <p>
			
	The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration,prticularly with researchers in the United Kingdom and France.
</p>
<div class='p-10 flex flex-col items-center justify-center '>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={history} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Map of the TCP/IP test network in February 1982</p>
		</div>

<p>
	Computer science was an emerging discipline in the late 1950s that began to consider time-sharing between computer users, and later, the possibility of achieving this over wide area networks. Independently, Paul Baran proposed a distributed network based on data in message blocks in the early 1960s and Donald Davies conceived of packet switching in 1965 at the National Physical Laboratory (NPL) and proposed building a national commercial data network in the UK. The Advanced Research Projects Agency (ARPA) of the U.S. Department of Defense awarded contracts in 1969 for the development of the ARPANET project, directed by Robert Taylor and managed by Lawrence Roberts. ARPANET adopted the packet switching technology proposed by Davies and Baran, underpinned by mathematical work in the early 1970s by Leonard Kleinrock at UCLA. The network was built by Bolt, Beranek, and Newman.
</p>
<br/>
<hr/>
<br/>
<p>
	Early packet switching networks such as the NPL network, ARPANET, Merit Network, and CYCLADES researched and provided data networking in the early 1970s. ARPA projects and international working groups led to the development of protocols for internetworking, in which multiple separate networks could be joined into a network of networks, which produced various standards. Bob Kahn, at ARPA, and Vint Cerf, at Stanford University, published research in 1974 that evolved into the Transmission Control Protocol (TCP) and Internet Protocol (IP), the two protocols of the Internet protocol suite. The design included concepts from the French CYCLADES project directed by Louis Pouzin.
</p>
<br/>
<hr/>
<br/>
<p>
	In the early 1980s, the National Science Foundation (NSF) funded national supercomputing centers at several universities in the United States, and provided interconnectivity in 1986 with the NSFNET project, thus creating network access to these supercomputer sites for research and academic organizations in the United States. International connections to NSFNET, the emergence of architecture such as the Domain Name System, and the adoption of TCP/IP internationally on existing networks marked the beginnings of the Internet. Commercial Internet service providers (ISPs) emerged in 1989 in the United States and Australia. The ARPANET was decommissioned in 1990. Limited private connections to parts of the Internet by officially commercial entities emerged in several American cities by late 1989 and 1990. The NSFNET was decommissioned in 1995, removing the last restrictions on the use of the Internet to carry commercial traffic.
</p>
<br/>
<hr/>
<br/>
<p>
	Research at CERN in Switzerland by British computer scientist Tim Berners-Lee in 1989–90 resulted in the World Wide Web, linking hypertext documents into an information system, accessible from any node on the network. Since the mid-1990s, the Internet has had a revolutionary impact on culture, commerce, and technology, including the rise of near-instant communication by electronic mail, instant messaging, voice over Internet Protocol (VoIP) telephone calls, video chat, and the World Wide Web with its discussion forums, blogs, social networking services, and online shopping sites. Increasing amounts of data are transmitted at higher and higher speeds over fiber-optic networks operating at 1 Gbit/s, 10 Gbit/s, or more. The Internet's takeover of the global communication landscape was rapid in historical terms: it only communicated 1% of the information flowing through two-way telecommunications networks in the year 1993, 51% by 2000, and more than 97% of the telecommunicated information by 2007. The Internet continues to grow, driven by ever greater amounts of online information, commerce, entertainment, and social networking services. However, the future of the global network may be shaped by regional differences.
</p>
			</div>
		</div>
	)
}

export default History
