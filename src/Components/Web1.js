import React from 'react'
import host from '../assets/host.png'
import card from '../assets/card.jpeg'
function Web1() {
	return (
		<div class="md:container md:mx-auto pl-10 pr-10 px-4 mt-20 pb-10">
		<p class="flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		1989–2004: Rise of the global Internet, Web 1.0
		</p>
		<div class="mt-10 p-4 tracking-tight shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
		<p>
		Initially, as with its predecessor networks, the system that would evolve into the Internet was primarily for government and government body use. However, interest in commercial use of the Internet quickly became a commonly debated topic. Although commercial use was forbidden, the exact definition of commercial use was unclear and subjective. UUCPNet and the X.25 IPSS had no such restrictions, which would eventually see the official barring of UUCPNet use of ARPANET and NSFNET connections. (Some UUCP links still remained connecting to these networks however, as administrators cast a blind eye to their operation.)
		</p>
		<br/>
		<p>
		By 1990, ARPANET's goals had been fulfilled and new networking technologies exceeded the original scope and the project came to a close. New network service providers including PSINet, Alternet, CERFNet, ANS CO+RE, and many others were offering network access to commercial customers. NSFNET was no longer the de facto backbone and exchange point of the Internet. The Commercial Internet eXchange (CIX), Metropolitan Area Exchanges (MAEs), and later Network Access Points (NAPs) were becoming the primary interconnections between many networks. The final restrictions on carrying commercial traffic ended on April 30, 1995 when the National Science Foundation ended its sponsorship of the NSFNET Backbone Service and the service ended. NSF provided initial support for the NAPs and interim support to help the regional research and education networks transition to commercial ISPs. NSF also sponsored the very high speed Backbone Network Service (vBNS) which continued to provide support for the supercomputing centers and research and education in the United States.
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>World Wide Web and introduction of browsers</p>
		</div>
 <p>
			
 The World Wide Web (sometimes abbreviated "www" or "W3") is an information space where documents and other web resources are identified by URIs, interlinked by hypertext links, and can be accessed via the Internet using a web browser and (more recently) web-based applications. It has become known simply as "the Web". As of the 2010s, the World Wide Web is the primary tool billions use to interact on the Internet, and it has changed people's lives immeasurably.
</p>
<br/>
<hr/>
<br/>
<p>
NCSA Mosaic was a graphical browser which ran on several popular office and home computers. It is credited with first bringing multimedia content to non-technical users by including images and text on the same page, unlike previous browser designs; Marc Andreessen, its creator, also established the company that in 1994, released Netscape Navigator, which resulted in one of the early browser wars, when it ended up in a competition for dominance (which it lost) with Microsoft Windows' Internet Explorer, which was bundled with Windows which in turn led to the United States v. Microsoft Corporation antitrust lawsuit. The Web began to enter general use in 1993-4, when websites for everyday use started to become available. Commercial use restrictions were lifted in 1995. In the US, the online service America Online (AOL) offered their users a connection to the Internet via their own internal browser, using a dial-up internet connection. Faster Broadband internet connections have replaced many dial-up connections since the beginning of the 2000s.
</p>
<br/>
<div class='bg-gray-200'>
			<p class=' pb-3 p-3 m-2 text-2xl font-bold'>Use in wider society</p>
		</div>
		<br/>
<p>
During the first decade or so of the public Internet, the immense changes it would eventually enable in the 2000s were still nascent. In terms of providing context for this period, mobile cellular devices ("smartphones" and other cellular devices) which today provide near-universal access, were used for business and not a routine household item owned by parents and children worldwide. Social media in the modern sense had yet to come into existence, laptops were bulky and most households did not have computers. Data rates were slow and most people lacked means to video or digitize video; media storage was transitioning slowly from analog tape to digital optical discs (DVD and to an extent still, floppy disc to CD). Enabling technologies used from the early 2000s such as PHP, modern JavaScript and Java, technologies such as AJAX, HTML 4 (and its emphasis on CSS), and various software frameworks, which enabled and simplified speed of web development, largely awaited invention and their eventual widespread adoption.
</p>
<br/>
<div class='p-10 flex flex-col items-center justify-center '>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={host} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Number of Internet hosts worldwide: 1969–present</p>
</div>
<br/>
<p>
In 1992, the U.S. Congress passed the Scientific and Advanced-Technology Act, 42 U.S.C. § 1862(g), which allowed NSF to support access by the research and education communities to computer networks which were not used exclusively for research and education purposes, thus permitting NSFNET to interconnect with commercial networks. This caused controversy within the research and education community, who were concerned commercial use of the network might lead to an Internet that was less responsive to their needs, and within the community of commercial network providers, who felt that government subsidies were giving an unfair advantage to some organizations.
</p>
<br/>
<p>
During the period 1997 to 2001, the first speculative investment bubble related to the Internet took place, in which "dot-com" companies (referring to the ".com" top level domain used by businesses) were propelled to exceedingly high valuations as investors rapidly stoked stock values, followed by a market crash; the first dot-com bubble. However this only temporarily slowed enthusiasm and growth, which quickly recovered and continued to grow.
</p>
<br/>
<p>
Typical design elements of these "Web 1.0" era websites included: Static pages instead of dynamic HTML; content served from filesystems instead of relational databases; pages built using Server Side Includes or CGI instead of a web application written in a dynamic programming language; HTML 3.2-era structures such as frames and tables to create page layouts; online guestbooks; overuse of GIF buttons and similar small graphics promoting particular items; and HTML forms sent via email. (Support for server side scripting was rare on shared servers so the usual feedback mechanism was via email, using mailto forms and their email program.
</p>
<hr/>
<br/>
<p>
With the call to Web 2.0 following soon afterward, the period of the Internet up to around 2004–2005 was retrospectively named and described by some as Web 1.0.
</p>

<br/>
<hr/>
<div class='p-10 flex flex-col items-center justify-center '>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={card} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2 text-center'>Stamped envelope of Russian Post issued in 1993 with stamp and graphics dedicated to first Russian underwater digital optic cable laid in 1993 by Rostelecom from Kingisepp to Copenhagen</p>
</div>
</div>
		</div>
	)
}

export default Web1
