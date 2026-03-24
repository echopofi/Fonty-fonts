/*TASK
===========
1. Create variables for:
- your name
- your age
- whether you are a student

Print them to the console
*/

console.log("Question 1\n")
let myName = "Aaron";
let myAge = 25;
var isStudent = true
console.log(`My name is ${myName}, I am ${myAge} years old, Im I a student? ${isStudent}.\n`)

/*
2. Fix the Error and explain what it failed

let name = "John"
let age = 20

console.log(Name)
*/

let name = "John"
let age = 20
console.log("Question 2")
console.log(name)
console.log("The issue with the given code was that the variable name was declared but Name was was outputed, name and Name are not the same thing, so javascript will print an error saing 'Name is not defined.'\n ")


/*


3. Evaluate:

console.log(true + false)
console.log(true + true)
console.log(false + false)
-
*/
console.log("Question 3")
console.log("true + false => 1 \ntrue + true => 2 \nfalse + false => 0")


/*
4. Create variables for:

- studentName
- studentAge
- isGraduated
*/
let  studentName;
let studentAge;
let isGraduated;
console.log("\n")


/*

5. Consider a person object

let person = {
  name: "John",
  age: 25,
  isStudent: true
}

- Print each property
- Change the age
- Add a new property: country
-
*/
var person = {
  name: "John",
  age: 25,
  isStudent: true
}
console.log("Question 4")
console.log(
	person.name,
	person.age,
	person.isStudent
)
person = {...person, country: "India"}
person.age = 37
console.log("\nQuestion 5")
console.log(person)

/*

6. Create an object for a phone having at least 3 properties
-
*/
let phone = {
	phoneCompany: "Samsung",
	model: "Galaxy S20",
	storage: "256G"
}
console.log("\nQuestion 6")
console.log(phone)

/*
7. Consider a user object

let user = {
  username: "admin",
  password: "1234"
}

- Print username
- Print password
-
*/
let user = {
  username: "admin",
  password: "1234"
}
console.log("\nQuestion 7");
console.log(user.username);
console.log(user.password);
/*

8. Create:

- a variable with no value
- a variable intentionally set to empty

Then explain the difference
-
*/
let a;
let b = null;
console.log("\nQuestion 8")
console.log(
	a,
	b
)
console.log("Variable a prints 'undefined' because no value has been assigned to it, \nVariable b prints null because the value that was assigned to it does not exist therefore the null \n")
/*

9. Create:

- a person object

inside it include:

- name (string)
- age (number)
- isStudent (boolean)
-
*/
var person = {
	name: "Happy",
	age: 23,
	isStudent: false
}
console.log("Question 9")
console.log(person)
/*

10. What is the output for each data logged:

let x = null
let y

console.log(x)
console.log(y)
console.log(typeof x)
console.log(typeof y)
*/
console.log("\nconsole.log(x) => null \nconsole.log(y) => undefined \nconsole.log(typeof x) => object \nconsole.log(typeof y) => undefined")

