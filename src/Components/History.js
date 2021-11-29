import React from 'react'
import p23 from '../assets/p23.png'
import p24 from '../assets/p24.png'
import p25 from '../assets/p25.png'
import p26 from '../assets/p26.png'

function History() {
	return (
		<div class="md:container md:mx-auto px-4 mt-20 pb-10">
		<p class="flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		Pylint
		</p>
		<div class="mt-10 p-3 tracking-tight

 shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
 <p>
			
 Beginner to coding standards? Pylint can be your guide to reveal what's really going on behind the scenes and help you to become a more aware programmer.
</p>
<br/>
<p>Sharing code is a rewarding endeavor. Putting your code out there can be either an act of philanthropy, coming of age, or a basic extension of belief in open source. Whatever the motivation, your good intentions may not have the desired outcome if people find your code hard to use or understand. The Python community has formalized some recommended programming styles to help everyone write code in a common, agreed-upon style that makes the most sense for shared code. This style is captured in PEP 8, the "Style Guide for Python Code". Pylint can be a quick and easy way of seeing if your code has captured the essence of PEP 8 and is therefore friendly to other potential users.</p>
<br/>
<p>
Perhaps you're not ready to share your code but you'd like to learn a bit more about writing better code and don't know where to start. Pylint can tell you where you may have run astray and point you in the direction to figure out what you have done and how to do better.
</p>
<br/>
<p>
This tutorial is all about approaching coding standards with little or no knowledge of in-depth programming or the code standards themselves. It's the equivalent of skipping the manual and jumping right in.
</p>
<br/>
<p>
Pylint is a tool that
</p>
<br/>
<p>
	<li>
	Lists Errors which comes after execution of that Python code
	</li>
	<li>Enforces a coding standard and looks for code smells
</li>
	<li>Suggest how particular blocks can be updated
</li>
	<li>Offer details about the code’s complexity
</li>
</p>
<br/>
<p>
Pylint tool is similar to pychecker, pyflakes, flake8, and mypy.
</p>
<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Installation</p>
		</div>
		<p>
		To install pylint, make sure Python is installed on your PC. Open the command prompt(Windows) / terminal(Linux) on your PC and type the following command
		</p>
		<div class='bg-gray-500'>
			<p class='mt-10 text-white mb-10 p-3 m-2 text-2xl font-normal'> &gt;&gt;pip install pylint</p>
		</div>
		<p>To verify the pylint installation, type the following command</p>
		<div class='bg-gray-500'>
			<p class='mt-10 text-white mb-10 p-3 m-2 text-2xl font-normal'> &gt;&gt;pylint --version</p>
			
		</div>
		<p>
		You should see pylint “2.4.4” version. We can also verify the installation by reinstalling the pylint. In that case, if pylint is already installed you should see Requirement already satisifed on your screen.
		</p>
		<br/>
		<p>
		Working with Pylint
		</p>
		<br/>
		<p>
		Consider the following program that accepts two numbers and prints their sum.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p23} alt='history'/>
		</div>
		<p>
		Now save the above program in the file gfg.py
		</p>
		<p>
		Open your command prompt / terminal and type the following command
		</p>
		<div class='bg-gray-500'>
			<p class='mt-10 text-white mb-10 p-3 m-2 text-2xl font-normal'> &gt;&gt;pylint gfg.py</p>
			
		</div>
		<p>
		In the pylint 2.4.4 version, you will get a report as shown below. Messages might change depending on the version.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p24} alt='history'/>
		</div>	
		<hr/>
		<br/>
		<p>
		Score for the code given above is -10.0/10.0(Very low). If we get a low score it doesn’t mean that our code is wrong. The score represents how good/bad your code is understandable by another programmer. We need to improve our code by considering the suggestions given in the report.
		</p>
		<br/>
		<p>
		Let’s discuss some techniques to improve score.
		</p>
		<li>
		ID C0326 suggest a bad-white space error means we need to give a whitespace between a and = symbol. This rule is applicable to all declarations where an operator is used immediately after an identifier.
		</li>
		<li>ID C0304 comes under missing-new-line suggestion which means we have to add a blank line when we complete our code.</li>
		<li>ID C0114 comes under missing-module-docstring suggestion which means we need to add a docstring at the top which refers to the use of the program written below that.</li>
		<li>ID C0103 comes under invalid-name suggestion which can be avoided by writing the identifiers start with a capital letter. But, we usually believe that class names use CamelCasing i.e class names start with an upper-case letter. To avoid this suggestion we will add a regular expression to pylint that actually accepts all the variables in the lowercase letters. We will discuss this more in the further examples.</li>
		<br/>
		<p>
		The modified version of the code is:
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p25} alt='history'/>
		</div>
		<p>
		If we run the above code using pylint, we will get the following result
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p26} alt='history'/>
		</div>	
		<p>Here we improved our score from -10.0 to 10.0. That’s great. But, is my code understandable? The answer is no. There are some more changes which we need to specify the pylint module to score our code.</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Changing Invalid Name suggestion
</p>
		</div>
		<p>
		As discussed earlier, the pylint module will use the uppercase naming convention by default. The regular expression used to identify that uppercase convention is (([A-Z_][A-Z1-9_]*)|(__.*__))$. We need to add our suggestion as a regular expression that accepts identifiers starting with lowercase alphabets. To do that, open your command prompt and execute the following statement.
		</p>
		<div class='bg-gray-500'>
			<p class='mt-10 text-white mb-10 p-3 m-2 text-2xl font-normal'> &gt;&gt;pylint --const-rgx='[a-z\_][a-z0-9\_]{2, 30}$' filename.py
			</p>
			
		</div>
		<p>
		This will avoid the use of the uppercase convention. We can modify that permanently by changing rules in pylint –generate-rcfile which we will discuss in future articles.
		</p>
		<br/>
			</div>
		</div>
	)
}

export default History
