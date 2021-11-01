import React from 'react'
import Content from './Content'
import Section from './Section'
import imdp7 from '../assets/imdp7.jpeg'

function Main() {
	return (
		<div class="p-2 flex-wrap">
			<Content/>
			<Section/>
			<div class='p-10'>
			<h2 class="flex justify-center rounded-lg items-center bg-indigo-600 text-white text-4xl shadow-lg font-mono font-black p-3">
			Team
			</h2>
			</div>
<div class="md:flex gap-8 justify-center">
    <div class="md:w-1/2 text-center mb-8 md:mb-0">
        <img class="w-48 h-48 rounded-full mx-auto -mb-24" src={imdp7} alt="Avatar Jacky"/>
        <div class="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
            <h3 class="font-title text-gray-800 text-xl mb-3">
	    Darshan Patel
            </h3>
            <p class="font-body">
                FullStack Engineer
            </p>
            <p class="font-body text-sm mb-4">
                He love React and he hate PHP
            </p>
            <a class="font-body text-blue-500 hover:text-gray-800" href="asdasd">
                dp775@njit.edu
            </a>
        </div>
    </div>
    
</div>

		</div>
	)
}

export default Main
