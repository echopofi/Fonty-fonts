//array methods
//let topics = [push, pop, slice, splice, shift, filter, includes. forEach, join, map, reduce, sum, sort, toReverse]
//console.log(topics.length)

// let users = [];
// users.push({name: "MP", age: 30})
// console.log(users)

// let fruits = []
// fruits.push("Mango", "Kiwi", "Banana", "Orange", "pear")
// console.log(fruits)

// empty = []
// function toPush() {
//     console.log(fruits.pop())
//     console.log(fruits, fruits.length)
// }

// toPush()

// fruits = ["Mango", "Kiwi", "Banana", "Orange", "pear"]
// fruits.forEach(function (fruit, index) {
//     fruits[index] = fruit + " Fruit";

//     if (fruit == "pear") {
//         return;
//     }

//     console.log(`${fruit} is at at index ${index}`)
// })
// console.log(fruits)

fruits = ["Mango", "Pear", "Banana", "Guava", "Orange", "Grape"]
fruits.forEach(function (f, index) {
    if (index % 2 == 0) {
        console.log(`${f} +  :No`)
    } else {
        console.log(`${f} +  :Yes`)
    }
})
