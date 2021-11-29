import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import p11 from '../assets/p11.png'
import p12 from '../assets/p12.png'
import p13 from '../assets/p13.png'
import p14 from '../assets/p14.png'
import p15 from '../assets/p15.png'
function Web1() {
	return (
		<div class="md:container md:mx-auto  px-4 mt-20 pb-10">
		<p class="flex tracking-tighter text-3xl w-auto sm:w-auto text-center text-white font-semibold p-2 bg-blue-400 justify-center shadow-2xl font-mono">
		Object-oriented programming (OOP) in Python.
		</p>
		<div class="mt-10 p-4 tracking-tight shadow-2xl whitespace-pre-line sm:whitespace-pre-wrap font-serif text-xl font-base text-justify">
		<p>
		<b>Object-oriented programming (OOP)</b> is a method of structuring a program by bundling related properties and behaviors into individual<b> objects</b>. In this tutorial, you’ll learn the basics of object-oriented programming in Python.
		</p>
		<br/>
		<p>
		Conceptually, objects are like the components of a system. Think of a program as a factory assembly line of sorts. At each step of the assembly line a system component processes some material, ultimately transforming raw material into a finished product.
		</p>
		<br/>
		<p>
		An object contains data, like the raw or preprocessed materials at each step on an assembly line, and behavior, like the action each assembly line component performs.
		</p>

		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>What Is Object-Oriented Programming in Python?</p>
		</div>
 <p>		
 Object-oriented programming is a programming paradigm that provides a means of structuring programs so that properties and behaviors are bundled into individual <b>objects</b>.
</p>
<br/>
<p>
For instance, an object could represent a person with <b>properties</b> like a name, age, and address and <b>behaviors</b> such as walking, talking, breathing, and running. Or it could represent an email with properties like a recipient list, subject, and body and behaviors like adding attachments and sending.
</p>
<br/>
<p>
Put another way, object-oriented programming is an approach for modeling concrete, real-world things, like cars, as well as relations between things, like companies and employees, students and teachers, and so on. OOP models real-world entities as software objects that have some data associated with them and can perform certain functions.
</p>
<br/>
<p>
Another common programming paradigm is <b>procedural programming</b>, which structures a program like a recipe in that it provides a set of steps, in the form of functions and code blocks, that flow sequentially in order to complete a task.
</p>
<br/>
<p>
The key takeaway is that objects are at the center of object-oriented programming in Python, not only representing the data, as in procedural programming, but in the overall structure of the program as well.
</p>
<br/>
<hr/>
<br/>
<div class='bg-gray-200'>
			<p class=' pb-3 p-3 m-2 text-2xl font-bold'>Define a Class in Python</p>
		</div>
		<br/>
<p>
Primitive <b>data structures</b>—like numbers, <b>strings</b>, and lists—are designed to represent simple pieces of information, such as the cost of an apple, the name of a poem, or your favorite colors, respectively. What if you want to represent something more complex?

For example, let’s say you want to track employees in an organization. You need to store some basic information about each employee, such as their name, age, position, and the year they started working.

One way to do this is to represent each employee as a list:
</p>
<br/>
<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p1} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.1</p>
</div>
<br/>
<p>
There are a number of issues with this approach.
</p>
<br/>
<p>
First, it can make larger code files more difficult to manage. If you reference kirk[0] several lines away from where the kirk list is declared, will you remember that the element with index 0 is the employee’s name?
</p>
<br/>
<p>
Second, it can introduce errors if not every employee has the same number of elements in the list. In the mccoy list above, the age is missing, so mccoy[1] will return "Chief Medical Officer" instead of Dr. McCoy’s age.
</p>
<br/>
<p>
A great way to make this type of code more manageable and more maintainable is to use <b> classes</b>.
</p>
<br/>
<hr/>
<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Classes vs Instances</p>
		</div>
	<p>
	Classes are used to create user-defined data structures. Classes define functions called <b> methods</b>, which identify the behaviors and actions that an object created from the class can perform with its data.
	</p>
	<br/>
	<p>
	In this tutorial, you’ll create a Dog class that stores some information about the characteristics and behaviors that an individual dog can have.
	</p>
	<br/>
	<p>
	A class is a blueprint for how something should be defined. It doesn’t actually contain any data. The Dog class specifies that a name and an age are necessary for defining a dog, but it doesn’t contain the name or age of any specific dog.
	</p>
	<br/>
	<p>
	While the class is the blueprint, an <b>instance</b> is an object that is built from a class and contains real data. An instance of the Dog class is not a blueprint anymore. It’s an actual dog with a name, like Miles, who’s four years old.
	</p>
	<br/>
	<p>
	Put another way, a class is like a form or questionnaire. An instance is like a form that has been filled out with information. Just like many people can fill out the same form with their own unique information, many instances can be created from a single class.
	</p>
	<br/>
	<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>How to Define a Class</p>
		</div>
		<p>
		All class definitions start with the class keyword, which is followed by the name of the class and a colon. Any code that is indented below the class definition is considered part of the class’s body.	
		</p>
		<br/>
		<p>
		Here’s an example of a Dog class:
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p2} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.2</p>
		</div>
		<p>
		The body of the Dog class consists of a single statement: the pass keyword. pass is often used as a placeholder indicating where code will eventually go. It allows you to run this code without Python throwing an error.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p3} alt='history'/>
		</div>
		<p>
		The Dog class isn’t very interesting right now, so let’s spruce it up a bit by defining some properties that all Dog objects should have. There are a number of properties that we can choose from, including name, age, coat color, and breed. To keep things simple, we’ll just use name and age.
		</p>
		<br/>
		<p>
		The properties that all Dog objects must have are defined in a method called .__init__(). Every time a new Dog object is created, .__init__() sets the initial <b> state</b> of the object by assigning the values of the object’s properties. That is, .__init__() initializes each new instance of the class.
		</p>
		<br/>
		<p>
		You can give .__init__() any number of parameters, but the first parameter will always be a variable called self. When a new class instance is created, the instance is automatically passed to the self parameter in .__init__() so that new <b>attributes</b> can be defined on the object.
		</p>
		<br/>
		<p>
		Let’s update the Dog class with an .__init__() method that creates .name and .age attributes:
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p4} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.3</p>
		</div>
		<p>
		Notice that the .__init__() method’s signature is indented four spaces. The body of the method is indented by eight spaces. This indentation is vitally important. It tells Python that the .__init__() method belongs to the Dog class.
		</p>
		<br/>
		<p>
		In the body of .__init__(), there are two statements using the self variable:
		</p>
		<br/>
		<p>
			<li>
			<b>self.name = name </b> creates an attribute called name and assigns to it the value of the name parameter.
			</li>
			<li>
			<b>self.age = age </b> creates an attribute called age and assigns to it the value of the age parameter.
			</li>
		</p>
		<br/>
		<p>
		Attributes created in .__init__() are called <b>instance attributes</b>. An instance attribute’s value is specific to a particular instance of the class. All Dog objects have a name and an age, but the values for the name and age attributes will vary depending on the Dog instance.
		</p>
		<br/>
		<p>
		On the other hand,<b> class attributes</b> are attributes that have the same value for all class instances. You can define a class attribute by assigning a value to a variable name outside of .__init__().
		</p>
		<br/>
		<p>
		For example, the following Dog class has a class attribute called species with the value "Canis familiaris":
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p5} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.4</p>
		</div>
		<p>
		Class attributes are defined directly beneath the first line of the class name and are indented by four spaces. They must always be assigned an initial value. When an instance of the class is created, class attributes are automatically created and assigned to their initial values.
		</p>
		<br/>
		<p>
		Use class attributes to define properties that should have the same value for every class instance. Use instance attributes for properties that vary from one instance to another.
		</p>
		<br/>
		<p>
		Now that we have a Dog class, let’s create some dogs!
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Instance Methods</p>
		</div>
		<p>
		<b>Instance methods </b> are functions that are defined inside a class and can only be called from an instance of that class. Just like .__init__(), an instance method’s first parameter is always self.
		</p>
		<br/>
		<p>
		Open a new editor window in IDLE and type in the following Dog class:
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p6} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.5</p>
		</div>
		<p>
		This Dog class has two instance methods:
		</p>
		<br/>
		<p>
			<li>
			<b>.description()</b> returns a string displaying the name and age of the dog.
			</li>
			<li>
			<b>.speak()</b> has one parameter called sound and returns a string containing the dog’s name and the sound the dog makes.
			</li>
		</p>
		<br/>
		<p>
		Save the modified Dog class to a file called dog.py and press <b>F5</b> to run the program. Then open the interactive window and type the following to see your instance methods in action:
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p7} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.6</p>
		</div>
		<p>
		In the above Dog class, .description() returns a string containing information about the Dog instance miles. When writing your own classes, it’s a good idea to have a method that returns a string containing useful information about an instance of the class. However, .description() isn’t the most Pythonic way of doing this.
		</p>
		<br/>
		<p>
		Methods like .__init__() and .__str__() are called dunder methods because they begin and end with double underscores. There are many dunder methods that you can use to customize classes in Python. Although too advanced a topic for a beginning Python book, understanding dunder methods is an important part of mastering object-oriented programming in Python.
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Inherit From Other Classes in Python</p>
		</div>
		<p>
		Inheritance is the process by which one class takes on the attributes and methods of another. Newly formed classes are called<b> child classes</b>, and the classes that child classes are derived from are called <b>parent classes</b>.
		</p>
		<br/>
		<p>
		Child classes can override or extend the attributes and methods of parent classes. In other words, child classes inherit all of the parent’s attributes and methods but can also specify attributes and methods that are unique to themselves.
		</p>
		<br/>
		<p>
		Although the analogy isn’t perfect, you can think of object inheritance sort of like genetic inheritance.
		</p>
		<br/>
		<p>
		You may have inherited your hair color from your mother. It’s an attribute you were born with. Let’s say you decide to color your hair purple. Assuming your mother doesn’t have purple hair, you’ve just <b> overridden </b> the hair color attribute that you inherited from your mom.
		</p>
		<br/>
		<p>
		You also inherit, in a sense, your language from your parents. If your parents speak English, then you’ll also speak English. Now imagine you decide to learn a second language, like German. In this case you’ve <b>extended </b>your attributes because you’ve added an attribute that your parents don’t have.
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Parent Classes vs Child Classes</p>
		</div>
		<p>
		Let’s create a child class for each of the three breeds mentioned above: Jack Russell Terrier, Dachshund, and Bulldog.
		</p>
		<br/>
		<p>
		For reference, here’s the full definition of the Dog class:
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p8} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.7</p>
		</div>
		<p>
		More generally, all objects created from a child class are instances of the parent class, although they may not be instances of other child classes.
		</p>
		<br/>
		<p>
		Now that you’ve created child classes for some different breeds of dogs, let’s give each breed its own sound.
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Inheritance</p>
		</div>
		<p>
		Inheritance is the capability of one class to derive or inherit the properties from another class. The class that derives properties is called the derived class or base class and the class from which the properties are being derived is called the base class or parent class.
		</p>
		<br/>
		<p>
		The benefits of inheritance are:
		</p>
		<p>
		<li>
		It represents real-world relationships well.
		</li>
		<li>
		It provides the reusability of a code. We don’t have to write the same code again and again. Also, it allows us to add more features to a class without modifying it.
		</li>
		<li>
		It is transitive in nature, which means that if class B inherits from another class A, then all the subclasses of B would automatically inherit from class A.
		</li>
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p9} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.8</p>
		</div>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p10} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.9</p>
		</div>
		<p>
		In the above article, we have created two classes i.e. Person (parent class) and Employee (Child Class). The Employee class inherits from the Person class. We can use the methods of the person class through employee class as seen in the display function in the above code. A child class can also modify the behavior of the parent class as seen through the details() method.
		</p>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Polymorphism</p>
		</div>	
		<p>
		Polymorphism simply means having many forms. For example, we need to determine if the given species of birds fly or not, using polymorphism we can do this using a single function.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p11} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.10</p>
		</div>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p12} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.11</p>
		</div>
		<div class='bg-gray-200'>
			<p class='mt-10 mb-10 p-3 m-2 text-2xl font-bold'>Encapsulation</p>
		</div>	
		<p>
		Encapsulation is one of the fundamental concepts in object-oriented programming (OOP). It describes the idea of wrapping data and the methods that work on data within one unit. This puts restrictions on accessing variables and methods directly and can prevent the accidental modification of data. To prevent accidental change, an object’s variable can only be changed by an object’s method. Those types of variables are known as private variables.
		</p><br/>
		<p>
		A class is an example of encapsulation as it encapsulates all the data that is member functions, variables, etc.
		</p>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p13} alt='history'/>
		</div>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p14} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.12</p>
		</div>
		<div class='p-10 flex flex-col items-center justify-center'>
		<img class='md:w-auto shadow-3xl rounded-2xl'  src={p15} alt='history'/>
		<p class='font-mono font-base antialiased font-light text-sm p-2'>Python 1.13</p>
		</div>
</div>
		</div>
	)
}

export default Web1
