// const prompt = require("prompt-sync")()
// let userInput = prompt("Type here: ")
// console.log(userInput)

let value = 1
switch (value) {
    case 1:
        console.log("One")
        break
    case 2:
        console.log("Two")
        
    default:
        console.log("Boom!!!")
}
let d = []
let f = Array.from("Waterfalls")
f.push(455)
console.log(f.join("/"), typeof(f))

let [a, ...b] = Array.from(1234456677)
console.log(a,b)