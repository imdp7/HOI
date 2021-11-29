import React from 'react'
import p16 from '../assets/p16.png'
import p17 from '../assets/p17.png'
import p18 from '../assets/p18.png'
import p19 from '../assets/p19.png'
import p20 from '../assets/p20.png'
import p21 from '../assets/p21.png'
import p22 from '../assets/p22.png'
function Networks() {
	return (
		<div class="md:container md:mx-auto px-4 mt-20 pb-10">
		<p class="flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		Arrange Act Assert pattern for Python developers
		</p>
		<div class="mt-10 p-4 tracking-tight shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
		<p>
		A test is a procedure that exercises a behavior to determine if the behavior functions correctly. There are several different kinds of tests, like unit tests, integration tests, or end-to-end tests, but all functional tests do the same basic thing: they try something and report PASS or FAIL.
		</p>
		<br/>
		<p>
		Testing provides an empirical feedback loop for development. That’s how testing keeps us safe. With tests, we know when things break. Without tests, coding can be dangerous. We don’t want to deploy big ol’ bugs!
		</p>
		<br/>
		<p>
		So, if we intend to spend time writing tests, how can we write good tests? There’s a simple but powerful pattern I like to follow: Arrange-Act-Assert.
		</p>
		<div class='bg-gray-200'>
			<p class='mb-10 p-3 m-2 text-2xl font-bold'>The Pattern</p>
		</div>
 <p>
 Arrange-Act-Assert is a great way to structure test cases. It prescribes an order of operations:
</p>
<br/>
<p>
<li>
<b>Arrange</b> inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test.
</li>
<br/>
<li>
<b>Act</b> on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.
</li>
<br/>
<li>
<b>Assert</b> expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.
</li>
<br/>
</p>
<br/>
<p>
<b>Behavior-Driven Development </b> follows the Arrange-Act-Assert pattern by another name: <b>Given-When-Then</b>. The Gherkin language uses Given-When-Then steps to specify behaviors in scenarios. Given-When-Then is essentially the same formula as Arrange-Act-Assert.
</p>
<br/>
<p>
Every major programming language has at least one test framework. Frameworks like <b>JUnit, NUnit, Cucumber</b>, and (my favorite) <b>pytest</b> enable you, as the programmer, to automate tests, execute suites, and report results. However, the framework itself doesn’t make a test case “good” or “bad.” You, as the tester, must know how to write good tests!
</p>
<br/>
	<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>The shape of an AAA test</p>
		</div>
		<p>
		Here is a test that I was working on recently that follows the AAA pattern. I’ve extracted it from Vim and blocked out the code with the colour that Vim assigns.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p16} alt='history'/>
		</div>
		<p>
		Hopefully in this rough image you will see three sections to the test separated by an empty line:
		</p>
		<br/>
		<p>
			<li>First there is the test definition, docstring and Arrangement.</li>
			<li>Empty line.</li>
			<li>In the middle, there is a single line of code - this is the most important part: The Act.</li>
			<li>Empty line.</li>
			<li>Finally there are the Assertions. You can see that the Assert block code lines all start with the orange / brown colour - that is because the Python keyword assert is marked with this colour in Vim with my current configuration.</li>
		</p>
		<br/>
		<p>
		While working on test suites that employ this pattern, my experience has been that I’ve found it easier to understand each test. My eye has definitely got used to the test “shape”. Want to know what is being tested? Just look at the clear line above the assertion block.
		</p>
		<br/>
		<p>
		Follow this pattern across your tests and your suite will be much improved.
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Background</p>
		</div>
		<p>
		I’ll now go into detail on each of these parts using Pytest and a toy test example - a simple happy-path test for Python’s builtin list.reverse function.
		</p>
		<br/>
		<p>
		I’ve made the following assumptions:
		</p>
		<p>
			<li>We all love PEP008, so we want tests to pass flake8 linting.</li>
			<li>PEP020, The Zen of Python, is also something we work towards - I will use some of it’s “mantras” when I justify some of the suggestions in this guide.</li>
			<li>Simplicity trumps performance. We want a test suite that is easy to maintain and manage and can pay for that with some performance loss. I’ve assumed this is a reasonable trade off because the tests are run much less frequently than the SUT in production.</li>
		</p>
		<br/>
		<p>
		This post is only an introduction to the AAA pattern. Where certain topics will be covered in more detail in future posts in this series, I have marked them with a footnote.
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Definition</p>
		</div>
		<p>
		The definition of the test function.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p17} alt='history'/>
		</div>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Guidelines</p>
		</div>
		<p>
			<li>Name your function something descriptive because the function name will be shown when the test fails in Pytest output.</li>
			<li>Good test method names can make docstrings redundant in simple tests</li>
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Docstring</p>
		</div>
		<p>
		An optional short single line statement about the behaviour under test.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p18} alt='history'/>
		</div>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Guidelines</p>
		</div>
		<p>
		Docstrings are not part of the AAA pattern. Consider if your test needs one or if you are best to omit it for simplicity.
		</p>
		<br/>
		<p>
		If you do include a docstring, then I recommend that you:
		</p>
		<br/>
		<p>
			<li>Follow the existing Docstring style of your project so that the tests are consistent with the code base you are testing.</li>
			<li>Keep the language positive - state clearly what the expected behaviour is. Positive docstrings read similar to:<br/>
			<p class='text-center'>X does Y when Z</p></li>
			<li>Be cautious when using any uncertain language in the docstring and follow the mantra “Explicit is better than implicit” (PEP20)
			<p>Words like “should” and “if” introduce uncertainty. For example:</p></li>
			
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Arrange</p>
		</div>
		<p>
		The block of code that sets up the conditions for the test action.
		</p>
		<br/>
		<p>
		There’s not much work to do in this example to build a list, so the arrangement block is just one line.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p19} alt='history'/>
		</div>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Guidelines</p>
		</div>
		<p>
			<li>Use a single block of code with no empty lines.</li>
			<li>Do not use assert in the Arrange block. If you need to make an assertion about your arrangement, then this is a smell that your arrangement is too complicated and should be extracted to a fixture or setup function and tested in its own right.</li>
			<li>Only prepare non-deterministic results not available after action.</li>
			<li>The arrange section should not require comments. If you have a large arrangement in your tests which is complex enough to require detailed comments then consider:
			<li>Extracting the comments into a multi-line docstring.</li>
			<li>Extracting the arrangement code into a fixture and testing that the fixture is establishing the expected conditions as previously mentioned.</li>
			</li>
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Act</p>
		</div>
		<p>
		The line of code where the Action is taken on the SUT.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p20} alt='history'/>
		</div>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Guidelines</p>
		</div>
		<p>
			<li>Start every Action line with result =. This makes it easier to distinguish test actions and means you can avoid the hardest job in programming: naming. When every result is called result, then you do not need to waste brain power wondering if it should be item = or response = etc. An added benefit is that you can find test actions easily with a tool like grep..</li>
			<li>Even when there is no result from the action, capture it with result = and then assert result is None. In this way, the SUT’s behaviour is pinned.</li>
			<li>If you struggle to write a single line action, then consider extracting some of that code into your arrangement.</li>
			<li>The action can be wrapped in with ... raises for expected exceptions. In this case your action will be two lines surrounded by empty lines.</li>
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Assert</p>
		</div>
		<p>
		The block of code that performs the assertions on the state of the SUT after the action.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p21} alt='history'/>
		</div>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Guidelines</p>
		</div>
		<p>
			<li>Use a single block of code with no empty lines.</li>
			<li>First test result, then side effects.</li>
			<li>Limit the actions that you make in this block. Ideally, no actions should happen, but that is not always possible.</li>
			<li>Use simple blocks of assertions. If you find that you are repeatedly writing the same code to extract information from the SUT and perform assertions on it, then consider extracting an assertion helper.</li>
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>The final test
</p>
		</div>
		<p>
		Here’s the example test in full:
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p22} alt='history'/>
		</div>

</div>
		</div>
	
	)
}

export default Networks
