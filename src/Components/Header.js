import React from 'react'
import logo from '../assets/logo.png'
function Header() {

 
				// const btn = document.querySelector("button.mobile-menu-button");
				// const menu = document.querySelector(".mobile-menu");

				// btn.addEventListener("click", () => {
				// 	menu.classList.toggle("hidden");
				// });


	
	return (
	
<nav class="flex items-center justify-between flex-wrap bg-black p-3">
<a href="/">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">History of Internet</span>
  </div>
  </a>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-black">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto text-right">
    <div class="text-sm lg:flex-grow mr-6">
      <a href="history" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black hover:bg-white p-2 pr-2 rounded-xl mr-6">
        History
      </a>
      <a href="networks" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black hover:bg-white p-2 rounded-xl mr-6">
        Networks
      </a>
      <a href="web1" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black hover:bg-white p-2 rounded-xl mr-6">
        Web 1.0
      </a>
      <a href="web2" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black hover:bg-white p-2 rounded-xl mr-6">
        Web 2.0
      </a>
      <a href="InterGover" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black hover:bg-white p-2 rounded-xl mr-6">
        Internet Governance
      </a>
      <a href="UserCul" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black hover:bg-white p-2 rounded-xl mr-6">
        Use & Culture
      </a>
    </div>
  </div>
</nav>



	)
}

export default Header
