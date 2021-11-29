import React from 'react'

function Web2() {
	return (
		<div class="md:container md:mx-auto px-4 mt-20 pb-10">
		<p class="flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		Python Design Patterns
		</p>
		<div class="mt-10 p-4 tracking-tight shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
		<p>
		Design Patterns is the most essential part of Software Engineering, as they provide the general repeatable solution to a commonly occurring problem in software design. They usually represent some of the best practices adopted by experienced object-oriented software developers.
		</p>
		<br/>
		<p>
		We can not consider the Design Patterns as the finished design that can be directly converted into code. They are only templates that describe how to solve a particular problem with great efficiency.
		</p>
		<br/>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Creational Design Pattern:</p>
		</div>
		<p>
		Creational patterns provides essential information regarding the Class instantiation or the object instantiation. Class Creational Pattern and the Object Creational pattern is the major categorization of the Creational Design Patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.
		</p>
		<br/>
		<p>
		Classification of Creational Design Patterns –
		</p>
		<li>Factory Method</li>
		<li>Abstract Factory Method</li>
		<li>Builder Method</li>
		<li>Prototype Method</li>
		<li>Singleton Method</li>
		<br/>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Structural Design Patterns:</p>
		</div>
		<p>
		Structural design patterns are about organizing different classes and objects to form larger structures and provide new functionality while keeping these structures flexible and efficient. Mostly they use Inheritance to compose all the interfaces. It also identifies the relationships which led to the simplification of the structure.
		</p>
		<br/>
		<p>
		Classification of Structural Design Patterns –
		</p>
		<li>Adapter Method</li>
		<li>Bridge Method</li>
		<li>Composite Method</li>
		<li>Decorator Method</li>
		<li>Facade Method</li>
		<li>Proxy Method</li>
		<li>FlyWeight Method</li>
		<br/>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Behavioral Design Pattern:</p>
		</div>
		<p>
		Structural design patterns are about organizing different Behavioral patterns are all about identifying the common communication patterns between objects and realize these patterns. These patterns are concerned with algorithms and the assignment of responsibilities between objects.
		</p>
		<br/>
		<p>
		Classification of Behavioral Design Patterns –</p>
		<li>Chain of Responsibility Method</li>
		<li>Command Method</li>
		<li>Iterator Method</li>
		<li>Mediator Method</li>
		<li>Memento Method</li>
		<li>Observer Method</li>
		<li>State Method</li>
		<li>Strategy Method</li>
		<li>Template Method</li>
		<li>Visitor Method</li>
		<br/>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Advantages of using Design Patterns</p>
		</div>
		<li>
		<b>Reusability:</b> By using Inheritance, they helps in making the code reusable and hence we can use them in multiple projects.
		</li>
		<li><b>Transparent:</b> It improves the transparency of the code for all the developers who are going to use it in future.</li>
		<li><b>Established Solution:</b> We can blindly believe on the solution provided by Design Patterns as they are well-proved and testified at critical stages.</li>
		<li><b>Established Communication:</b> Design patterns make communication between designers more efficient. Software professionals can immediately picture the high-level design in their heads when they refer the name of the pattern used to solve a particular issue when discussing system design.</li>
		<li><b>Efficient Development:</b> Design patterns helps in the development of the highly cohesive modules with minimal coupling.</li>

</div>
		</div>
	)
}

export default Web2
