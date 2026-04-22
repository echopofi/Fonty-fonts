// GM guys, here is your task.

// 1. Given a set of numbers in an array, sum all the numbers in an array and return the total.

// NOTE: If an element is not a number, do not sum it

// 2. Create a simple shopping cart, add some items to cart and also remove some items, then print all items in the cart. 

// 3. Given a list of names, you find the longest name in the array


//Question 1:

let numbers = [7, 2, 4, 4, 1, "2", "tree", true, false, null, undefined]
let sum = 0;
numbers.forEach(function (num) {
    if (typeof num === "number") {
        sum += num;
    }
})
console.log(sum)

//Question 2:

let shoppingCart = [];
shoppingCart.push("Bread", "Milk", "Eggs", "Butter", "Cheese")
console.log(`New shopping cart: ${shoppingCart}`)
shoppingCart.splice(2, 1)
console.log(`After splicing: ${shoppingCart}`)
shoppingCart.pop()
console.log(`After popping: ${shoppingCart}`)

//Question 3:

let names = ["Aaron", "Kelvin", "Kaweng", "Love", "Vince", "Fred", [1, 3, 66, "Water", " ", true, null, undefined]]   
let longCharName = [];
let maxLength = 0;
names.forEach(function (name) {
    if (name.length > maxLength) {
        maxLength = name.length;
        longCharName = [name];
    }else if (name.length === maxLength) {
        longCharName.push(name)
    }    
    
})
console.log(`The longest name(s) is/are: ${longCharName.join(", ")}`)
