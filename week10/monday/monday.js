/*
1. Store a quote and the author in variables and print:

"Your quote here" - Author Name

2. Create a user biography builder using the following variables:
- firstName
- lastName
- country
- job

Output:
"Andrew is a developer from India."

3. Create a simple user profile card generator

Create multiple variables and display a formatted block:

Example:

Name: Solex
Age: 34
Country: Nigeria
Hobby: Coding
*/

//1.
let quote = "From whom much is expected, less is given.";
let author = "Adaku Peter";
console.log(`"${quote}" - ${author}`);

//2.
let firstName = "Andrew";
let lastName = "Governor";
let country = "India";
let job = "developer";
console.log(`${firstName} ${lastName} is a ${job} from ${country}.`);

//3.
let name = "Solex";
let age = 34;
let hobby = "Coding";
console.log(`
    Name: ${name},
    Age: ${age},
    Country: ${country},
    Hobby: ${hobby}
    `);
