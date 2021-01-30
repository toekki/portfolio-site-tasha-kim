//--- 2.1 -------------------------------- 2.1 -------------------------------- 2.1 ---
console.log("*************** 2.1 ****************")
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
console.log("*************** 2.2 ****************")
//--- Strings ---
console.log("------------- STRINGS --------------")
var text1 = 'Hello';
var text2 = "Hello - should look the same as the previous Hello";
console.log(text1);
console.log(text2);

var text1 = 'Hello,', text2 = "testing out 2 strings one after the other.";
console.log(text1, text2);

var random = "\"anything?\"";
console.log(random);


//--- Numbers ---
console.log("------------- NUMBERS --------------")
var numberInteger1 = 123, numberInteger2 = -123;
var numberFloat = 1.23;
console.log(numberInteger1);
console.log(numberInteger2);
console.log(numberFloat);

var numberInteger1 = 123, numberInteger2 = -123;
var numberFloat = 1.23;
console.log(numberInteger1, numberInteger2, numberFloat);


//--- Booleans ---
console.log("------------- BOOLEANS -------------")
var booleanA = true;
var booleanB = false;
console.log(booleanA);
console.log(booleanB);
console.log(booleanA, booleanB);


//--- Undefined & Null ---
console.log("--------- UNDEFINED & NULL ---------")
console.log(">>> WILL <<< console.log(thisVariableDoesntExist) does not output as undefined, but as an error. Why?")
// console.log(thisVariableDoesntExist);
var emptyVariable = null;
var notNullButAString = "null";
console.log(emptyVariable); // Outputs null
console.log(notNullButAString); // Outputs as null (text)


//--- Objects ---
console.log("-------------- OBJECTS -------------")
var age = 39;
var name = "Jonathan";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sheera",
  }
};
console.log(personParent)
personParent.name = "Anatasia"; // Set the name property to "Anne"
personParent.child.size = 125; // Set new values that weren't set before

console.log(personParent.child.name) //Output = Sara
console.log(personParent.child) //Output = name: Sara, size: 175

console.log(personParent.name) //Output = Anne
console.log(personParent["name"]); //Output is also Anne (same as previous)
console.log(name)
console.log(age)

var weWantThisField = "age";
console.log(personParent[weWantThisField]); //Output = 28
console.log(personParent.age) //Output is the same = 28

var shortObject = {name: "John, age: 31"};
var emptyObject = {}; //can add properties later
console.log(shortObject)
console.log("I'm an empty object: ", emptyObject)
console.log('I\'m an empty object: ', emptyObject)

var shortObject = {name: "John", age: 31};
delete shortObject.name;
console.log("Name removed: ", shortObject)


//--- Arrays ---
console.log("-------------- ARRAYS ---------------")
var shortArray = [1,2,3];
var mixedArray = [
    1,
    "Hello",
    {},
    ["nested array"]
];
console.log(shortArray[0]); //Outputs 1 since array indexes start w/ 0
console.log(mixedArray [3][0]); //Outputs nested array

shortArray[0] = 100;
console.log(shortArray[0]);

var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray);

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

console.log(owner)
console.log(ownerPet);
console.log(ownerPet.name);
console.log(ownerPet.age);
console.log(ownerPet.dog.breed);

console.log(petHobbies [2]); //Outputs "play"
console.log(petHobbies);

//---------------------------------------------------//
