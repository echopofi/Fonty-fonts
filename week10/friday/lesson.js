//includes
var email = "KEFASSolex@GmaIl.CoM";
//console.log(email.includes("@"));
//console.log(email.includes(".com", 42));
console.log(email.toLowerCase());

var name = "   John Doe    ";
console.log(name.trim());
console.log(name.trimStart());
console.log(name.trimEnd());

console.log(name.replace("John", "Felix"));

//method chaining
console.log(name.replace("John", "Felix").trim());
console.log(name.replaceAll("John", "Felix"));

//reapeating strings multiple times
console.log(name.repeat(5));

//pad
var a = "MP";
console.log(a.padStart(2, "x"));
console.log(a.padEnd(2, "x"));

//introduction to arrays
