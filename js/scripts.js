//--- 2.1 -------------------------------- 2.1 -------------------------------- 2.1 ---
console.log("****************** 2.1 *******************")
// alert("\"Howdy there, Folks!\"");
console.log("\"Howdy there, Folks!\"")
console.log("console log by itself is just text - as long as you use quotes")

var age = 47;
console.log(age);

var title = 'Jolly Green Giant';
console.log(title)

var favage = 26;
console.log(favage)

var favAge = 28;
console.log(favAge)

var size = 100;
var maxSize = (size * 4) + 15;
var minSize = (size / 3) - 15 + (size * 2);
console.log(size)
console.log(maxSize)
console.log(minSize)

//single line comment
console.log("Domo arigato, Mister Roboto... Domo!")//another single line comment

/* for multi-line comments - note that comments
are good for myself (espeoncially when I plan to come back
to it later...) and for others */


//--- above 2.1 Submitted for Approval --- below 2.2 is in the works...
//--- 2.2 -------------------------------- 2.2 -------------------------------- 2.2 ---
console.log("****************** 2.2 *******************")
//--- Strings ---
console.log("<<<------------- STRINGS -------------->>>")
var text1 = 'Hello';
var text2 = "Hello - should look the same as the previous Hello";
console.log(text1);  //Output: Hello
console.log(text2);  //Output: Hello - should look the same as the previous Hello

var text1 = 'Hello,', text2 = "testing out 2 strings one after the other.";
console.log(text1, text2); //Output: Hello, testing out 2 strings one after the other.

var random = "\"anything?\"";
console.log(random); //Output: "anything?"


//--- Numbers ---
console.log("<<<------------- NUMBERS -------------->>>")
var numberInteger1 = 123, numberInteger2 = -123;
var numberFloat = 1.23;
console.log(numberInteger1);  //Output: 123
console.log(numberInteger2);  //Output: -123
console.log(numberFloat); //Output: 1.23

var numberInteger1 = 123, numberInteger2 = -123;
var numberFloat = 1.23;
console.log(numberInteger1, numberInteger2, numberFloat); //Output: 123 -123 1.23


//--- Booleans ---
console.log("<<<------------- BOOLEANS ------------->>>")
var booleanA = true;
var booleanB = false;
console.log(booleanA);  //Output: true
console.log(booleanB);  //Output: false
console.log(booleanA, booleanB);  //Output: true false


//--- Undefined & Null ---
console.log("<<<--------- UNDEFINED & NULL --------->>>")
console.log(">>> WILL <<< console.log(thisVariableDoesntExist) does not output as undefined, but as an error. Why?")
// console.log(thisVariableDoesntExist);
var emptyVariable = null;
var notNullButAString = "null";
console.log(emptyVariable); // Output: null
console.log(notNullButAString); // Output: null (but null "as text")


//--- Objects ---
console.log("<<<-------------- OBJECTS ------------->>>")
var age = 39;
var name = "Jonathan";

var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sheera",
  }
};
console.log(personParent) //Output: name: "Jonathan", age: 39, child: Sheera

personParent.name = "Anatasia";
personParent.child.size = 125; // Set new values that weren't set before

console.log(personParent.child.name) //Output = Sheera
console.log(personParent.child) //Output = name: "Sheera", size: 125

console.log(personParent.name) //Output: Anatasia
console.log(personParent["name"]); //Output: Anastasia (same as previous)
console.log(name) //Output: Jonathan
console.log(age)  //Output: 39

var weWantThisField = "age"; 
console.log(personParent[weWantThisField]); //Output = 39
console.log(personParent.age) //Output is the same = 39

var shortObject = {name: "John, age: 31"};
var emptyObject = {}; //can add properties later
console.log(shortObject) //Output: name: John, age: 31
console.log("I'm an empty object: ", emptyObject) //Output: I'm an empty object: {}
console.log('I\'m an empty object: ', emptyObject) //Output: I'm an empty object: {}

var shortObject = {name: "John", age: 31};
delete shortObject.name;
console.log("Name removed: ", shortObject) //Output: Name removed: {age: 31}


//--- Arrays ---
console.log("<<<-------------- ARRAYS --------------->>>")
var shortArray = [1,2,3];
var mixedArray = [
    1,
    "Hello",
    {},
    ["nested array"]
];
console.log(shortArray[0]); //Output: 1  *since array indexes start w/ 0
console.log(mixedArray [3][0]); //Output: nested array

shortArray[0] = 100;
console.log(shortArray[0]);  //Output: 100

var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray);  //Output:  1, 2, 3, "Test"

//---------------------------------------------------//
console.log("----------------------------------------")
console.log("< TRY IT! --- name - age - hobbies --- >")

var owner = "Tasha"
var ownerPet = {
    name: "Kiko",
    age: 8,
    dog: {
        breed: "Norwich Terrier",
    }
}
var petHobbies = ["eat", "sleep", "play"];
petHobbies[3] = "fetch";

console.log(owner)  //Output: Tasha
console.log(ownerPet);  //Output: name: Kiko, age: 8, dog: breed: Norwich Terrier
console.log(ownerPet.name); //Output: Kiko
console.log(ownerPet.age); //Output: 8
console.log(ownerPet.dog.breed); //Output: Norwich Terrier
console.log(ownerPet.dog) //Output: breed: Nowich Terrier

console.log(petHobbies [2]); //Output: play
console.log(petHobbies); //Output: eat, sleep, play, fetch

//---------------------------------------------------//
//--- Functions ---
console.log("<<<------------ FUNCTIONS -------------->>>")
// (2) types of scopes - global (outside function)  & local (inside function)

function add(number1, number2) {
	return number1 + number2;
}

var result = add(10, 100); // The value of "result" will now be 110
console.log(result); //Output: 110

/* >Uncaught Reference Error (by GoogleChrome)
var { addAge } = require('./helpers'); // don't mind me I'm just a helper. --*/

// function scoping
console.log('------ function scoping ------');

var age = 76;
function doSomething() {
	var addAge = 10;
	return age + addAge; // We can access age inside of the function
};

console.log(age); // Output 76 -  Returns 76 (as age was defined outside of function)
/* >Uncaught Reference Error (by GoogleChrome)
console.log(addAge); // Returns undefined, as addAge was defined inside of func. --*/

function doSomething(variable1, variable2) {
	// In this case, variable2 will be undefined
	return variable1 + ' ' + variable2; // we are just adding a space in between the two variables.
}
doSomething(1); // Only one parameter given

console.log(doSomething(1)); // you can console log functions as well, but for best practice, assign it to a variable  Output: 1 undefined (undefined b/c space added b/w variables 1 and 2 above)

function doSomethingElse(variable1, variable2) {
	return variable1 + variable2;
}

// assigning functions to variables
var add = doSomethingElse(1, 2); // we give this function Numbers to add
console.log(add); //Output: 3

var somethingWithStrings = doSomethingElse('1', '2'); // we give this function Strings to "concatenate"
console.log(somethingWithStrings); // whoa, why 12? what happened here is that we are "concatenating" two string values.

var somethingWithNumberAndString = doSomethingElse(1, '2'); // we give this function Strings to "concatenate"
console.log(somethingWithNumberAndString); // whoa weird, I have one Number and one String, why still 12? There are many nuances in JavaScript, this is called type coercion.

// To find out more about this please refer to this article: https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
// The amount of JavaScript we will be coding in this course will most likely not encounter these quirks.

// Assign functions to object properties, this function on an Object is now referred to as a 'method'
console.log('------ Assign functions to object properties (methods) ------');
var myObject = {};
myObject.add = function(number1, number2) {
	return number1 + number2;
};

// to execute a method from our myObject, we have to 'invoke' it (a way to describe that you want to execute the function method on myObject)
myObject.add(10, 2);
console.log(myObject.add(10, 10));

// Or as we learned, assigning to a variable
var addResult = myObject.add(10, 50);
var addResult2 = myObject.add(20, 667);
var addResult3 = myObject.add(17, 577);
console.log(addResult, addResult2, addResult3); // logging out multiple results in one invocation of console.log

var a = { age: 1 };
var b = a;
b.name = "John"; // a.name will now also be "John"
console.log(a);
console.log(b);

// Let's practice with a basic Todo function. 
// The functionality will let us retrieve the list of todos, add a todo, edit a todo, and delete a todo from our list.
console.log('------ A todo list ------');

var todoList = []; // let's create an empty todo list with an empty array.

var getTodoList = function() {
	if (todoList.length) {
		return console.log('My todo list:', todoList);
	}
	return console.log('No todos today hurray 🎉');
}

// Our addAtodo function specifies that it takes a todo as it's argument
// we can add all sorts of data types.
var addAtodo = function(todo) {
	return todoList.push(todo);
}

// Our removeAtodo function specifies that it takes an index as it's argument
var removeAtodo = function(index) {
	// here we've seen the delete functionality in action before, here it will delete data at the specified array location given the index
	return delete todoList[index];
}

// Our updateAtodo function specifies that it takes an index and a newTodo as it's arguments
var updateAtodo = function(index, newTodo) {
	// here we have seen this before to access and override existing data in an array.
	return todoList[index] = newTodo;
}

var v = getTodoList();
console.log(v);

// let's create and add a todo item to our empty array list.
var myFirstTodo = 'Make coffee and take out the trash.';
var mySecondTodo = 'Order more stuff I might need from Amazon Prime.';
var myThirdTodo = 'Work on CareerFoundry assigments :)';

addAtodo(myFirstTodo);
addAtodo(mySecondTodo);
addAtodo(myThirdTodo);

console.log('-');
console.log(getTodoList()); // as we can see, the result is an array with 3 Strings.

// So now let's say we completed our second todo item and want to delete it, and we see that our delete function requires an index as it's argument. 
// remember going over indexes? If not please refer back to the array section.
// Our second todo item is at index 1, remember Arrays start at 0 index.
console.log('-');
removeAtodo(1);
console.log(getTodoList()); // as you can see the todo item at index 1 has been removed and a "<1 empty item>" is stated. This is generated when using the delete function. There are many ways to remove or "delete" data in JavaScript, this is the most basic implementation.
console.log('-');
updateAtodo(2, 'Assignments are all done, and I can chill for the day.');
console.log(getTodoList());

// here we are adding an Object (complex data type)
var myFourthTodo = {
	id: 1, // here we are just adding an id to identify our fourth todo with a Number data type
	item: 'go to the gym.', 
	completed: false // false is a boolean
};

console.log('-');
addAtodo(myFourthTodo);
console.log(getTodoList());

var amoutToDeposit = 1280.52 + 99 + 25877.15;
// Lets just update our second todo with something
var anotherTodoItem = {
	bankName: 'The bank of cats and dogs',
	depositToBank: 'check amout (cause I can\'t do math :X):' + '🐱 ' + amoutToDeposit
};

console.log('-');
updateAtodo(1, anotherTodoItem);
console.log(getTodoList()); // as we can see the Object is now added to our todo list.


//---------------------------------------------------//
//--- Primitive and Complex Data Types  ---
console.log("<<<------ How Primitive and Complex Data Types Differ -------->>>")

console.log('---------------');
console.log('------ Primitive Data Types ------');
console.log('-');

var a = 1;
var b = a; // Both a & b now have the value 1
console.log('value of a: ', a);
console.log('value of b: ', b);

console.log('-');

a = 2; // Now, a = 2 and b remains 1
console.log('value of a: ', a);
console.log('value of b: ', b);


console.log('------ Complex Data Types ------');
// Arrays
var a = [1, 2];
var b = a; // Both a & b contain the same array instance
console.log('value of a: ', a);
console.log('value of b: ', b);

a.push(3); // Both a & b will be [1, 2, 3]
// so when we add to a (or b), the other will always stay exactly the same
console.log('value of a: ', a);
console.log('value of b: ', b);

// Objects
var a = { age: 1 };
var b = a;
b.name = "John"; // a.name will now also be "John"

console.log('value of a: ', a);
console.log('value of b: ', b);

// Unexpected behaviour 
var john = {
	age: 30
};

var person = john;

function testFunction() {
	person.age = 40;
	//do something else
}

testFunction();
console.log(john.age); // this will now output 40 as the object was changed
console.log(person.age); // this will also output 40



//---------------------------------------------------//
//--- Conditionals with If & Else ---
console.log("<<<--------- Conditionals with If & Else ----------->>>")

var age = 10; // feel free to change the age

if (age === 20) {
	console.log("You are 20 years old!");
} else {
	console.log("You are not 20 years old...");
}

var myCondition = true;
if (myCondition) {
	console.log('hey! myCondition variable is equal to: ', myCondition);
	// do something else
}

console.log('------ Comparisons ------');

var condition1 = 1 < 2; // is smaller than -> true
var condition2 = 1 > 2; // is greater than -> false
var condition3 = 1 >= 1; // is greater than or equal -> true
var condition4 = 1 <= 2; // is smaller than or equal -> true
var condition5 = 1 === 2; // is equal -> false
var condition6 = 1 !== 2; // is not equal -> true

// Try console.log(condition1, condition2, ...) yourself!

console.log('/////-------tk practice-------/////')

console.log('Yes, 1 is definitely less than 2! —', condition1)
console.log('Incorrect!', condition2)

console.log('/////-------tk practice-------/////')


// JavaScript will also try to auto-convert any value into a boolean when putting it in a condition
var condition = 10; //(true) 10 is considered "truthy" (more on this in next section)
if (condition) {
  console.log('Hello there!');
}


//---------------------------------------------------//
//--- Truthy vs. Falsy ---
console.log("<<<--------------- Truthy vs. Falsy ----------------->>>")

// Keep in mind!
// Strings: “” (an empty string) is false; anything else is true
// Numbers: 0 is false; any other number is true
// Null, Undefined: false
// Arrays: always true (even an empty array!)
// Objects: always true (even an empty object without properties!)

var userInput = ""; // empty string
if (userInput) {
	// Do something with the user input!
} else {
	console.log('I will execute when all "else" fails...');
}

// here we are inverting from false to true using the "!" operator.
var userInput = "";
if (!userInput) {
	// This is equal to if (userInput == false)
	console.log('Hey I\'m true!');
} else {
	console.log('I will execute when all "else" fails...');
}

// Why is this true? It's also known as type coercion, see resource at the end for a good read on it.
if (userInput == false) { // userInput initially is an empty String, but JavaScript coerced the "" on the left side into a false boolean, which then compared to the right side false boolean, and ultimately equal which is a truthy.
	console.log('Hey I\'m true!, confused? Yeah me too... but don\'t worry it\'ll get better!');
} else {
	console.log('I will execute when all "else" fails...');
}
console.log('------ Diving deeper ------');

var input1 = "10";
var input2 = 10;
console.log(input1 == input2); // true - it converts the string "10" into the number 10
console.log(input1 === input2); // false - different data types!

var input3 = "";
var input4 = 0;
console.log(input3 == input4); // true - these end up being (internally) converted to false

var a = [1, 2];
var b = a; // b is now sharing the same array instance as a.
// Remember, adding a value to a would also add it to b
var c = [1, 2]; // c has the same content as a & b, but is a different instance.
// Changing it has no effect on a & b.

a === b; // true
a === c; // false
b == c; //false - the non-strict comparator also returns false here
console.log('{ age: 1 } === { age: 1 } is', { age: 1 } === { age: 1 }); // false - the objects have the same content, but are not the same instances!

// If you really want to compare array or object content, you’ll need to do so manually. The following example uses chaining of conditions, which we’ll explain in more detail in the next section:

var a = [1, 2];
var b = [1, 2];
var isEqual = a[0] === b[0] && a[1] === b[1];
console.log('isEqual value:', isEqual);

// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
console.log('---------------');

