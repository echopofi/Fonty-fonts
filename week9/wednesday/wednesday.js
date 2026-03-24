//primitive data types are stored in the stack ad the stack is in your RAM beceause their size is been known at rhr e run-time, in compiled languagies
//learn Hi\eap an Stack
// 
let person = {
    name: "John",
    name: "Jill", //this is called over-ride, as js over rides John
    age: 30,
    city: "Jos",
    isMarried: false,
    address: {
        home: "123 Main St",
        work: "456 Main St"
    },
    hobbies: ["reading", "traveling", "swimming"],
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
    }  
};
person.greet();
console.log(person.address.work);
//person.name = "Jack Sparrow";
console.log(person.name);

//spread operator is used to add items to an object
person = { ...person, country: "Nigeria", state: "Plateau", nextOfKin: "Jane Doe" };
console.log(person);

person1 = { ...person, name: "Jack Sparrow", hasCAr: true, isDevorced: false, carName: "Toyota Hilux" }; // this is called over-ride, as js over rides John
console.log(person1);
console.log(person);

console.log(Number.MAX_SAFE_INTEGER)
let number = Number.MAX_SAFE_INTEGER + 1;
console.log(number);
console.log(number2);
// this is because of the way js handles numbers, it uses a 64-bit floating point representation, which can only safely represent integers up to 2^53 - 1, which is 9007199254740991. when you go beyond that, you start to lose precision and you get unexpected results
number += 3;
console.log(number);

console.log(Bigint(number + 2));
console.log(typeof 2n); // this is how you declare a bigint, you add n at the end of the number
console.log(typeof BigInt(number + 2)); // this is how you convert a number to a bigint, you use the BigInt function
