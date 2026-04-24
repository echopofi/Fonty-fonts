let numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//return even numbers only
// let evenNumbers = []
// numbers.forEach(function (num) {
//     if (num % 2 == 0) {
//         evenNumbers.push(num)
//     }
// })
// console.log(evenNumbers)
// let even = numbers.filter((number) => {
//     if (number % 2 == 0) {
//         return number;
//     }
// })
// console.log(even)
// let even = numbers.filter((number) => number % 2 == 0)
// console.log(even) 
// //learn about the characteristics of array methods and how to use them effectively in your code.
// let fruits = ["Mango", "Pear", "Banana", "Guava", "Orange", "Grape"]
// let fuitlen = fruits.filter((fruit) => fruit.length > 4)
// console.log(fuitlen)

let fruits = ["Mango", "Pear", "Banana", "Guava", "Orange", "Grape", 23]

let longest;
fruits.forEach((fruit) => {
    if (!longest || fruit.length > longest.length) {
        console.log(longest, fruit)
        longest = fruit
    }
})
console.log(longest)

//join method merges all the elements of an array into a string, separated by a specified separator. If no separator is provided, it defaults to a comma (,).
let names = ["Aaron", "Kelvin", "Kaweng", "Love", "Vince", "Fred"]
let nameString = names.join(", ")
console.log(nameString)

//map is similar to forEach but it returns a new array with the results of calling a provided function on every element in the calling array. It does not modify the original array.
let nameLengths = names.map((name) => name.length)
console.log(nameLengths)

let num = [1, 2, 3, 4, 5]
let test = num.map((n) => {
    if (n % 2 == 0) {
        return n
    }
    return;
}) //explain what is happening here and how map works in this context. The map function iterates through each element in the num array and applies the provided function to it. If the number is even, it returns the number; otherwise, it returns null. The result is a new array where even numbers are preserved and odd numbers are replaced with null.
//then why im i see [5,6,6,4,5] instead of [null, 2, null, 4, null]?
console.log(test)


//reduce() method executes a reducer function on each element of the array, resulting in a single output value. It takes two parameters: a callback function and an optional initial value. The callback function takes four arguments: accumulator, currentValue, currentIndex, and array. The reduce method applies the callback function to each element of the array, passing the accumulated result from the previous iteration as the first argument and the current element as the second argument. If an initial value is provided, it is used as the first argument for the first call to the callback function; otherwise, the first element of the array is used as the initial value and the iteration starts from the second element.
let i = 0;  
num.reduce((accumulator, currentValue) => {
    console.log(i++, accumulator + currentValue)
    return accumulator + currentValue
})
console.log(num)

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
let sliced = num.slice(2, 4)
console.log(sliced)


//some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let hasEven = num.some((n) => n % 2 == 0)
console.log(hasEven)

//sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// let sorted = [6, 4, 5, 3, 1, 2]
// sorted.sort((first, second) => second - first) //under the hood this is like saying if i is less than j, return a negative value (i - j), which tells the sort function to place i before j. If i is greater than j, return a positive value (i - j), which tells the sort function to place i after j. If i and j are equal, return 0, which tells the sort function that their order does not matter.
// console.log(sorted)

// fruits.sort((a, b) => {
//     return a.localeCompare(b)
// }) //sorts in alphabetical order by default
// console.log(fruits)

//sort an array without using sort(), you can use loops, forEach, map and filter, sort the array in both ascending and descending order/ seperate arrays with separate logics
//study splice, torevers, find, shift, unshift

let listed = [6, 4, 5, 3, 1, 2]
let ascending = []
let descending = []
listed.forEach((num) => {
    if (ascending.length === 0 || num >= ascending[ascending.length - 1]) {
        ascending.push(num)
    } else {
        descending.push(num)
    }
})
console.log(`Ascending: ${ascending}`)
console.log(`Descending: ${descending}`)


let list = [1, 3, 5, 2, 4]
let doubled = list.map((n)=> n * 2)
console.log(doubled)