// let fruits = [ ["Mango", "Guava"], ["Pear", "Pineapple"], "Mango", "Orange"]
// let mango = fruits.find((fruit, index) => {
//     console.log(fruit, index)
//     return fruit == "Mango"
// })
// console.log(`The element found is ${mango}`)

let fruits = [
    {
        name: "Mango",
        price: 200,
        stock: 10
    },
    {
        name: "Orange",
        price: 100,
        stock: 6
    },
    {
        name: "Pineapple",
        price: 500,
        stock: 6
    },
    {
        name: "Apple",
        price: 500,
        stock: 10
    },
]
let users = [
    {
        name: "MP",
        balance: 20000
    }
]
let mango = fruits.find((fruit, index) => {
    return fruit.name == "Mango" && fruit.stock > 0
})
console.log(mango)
function checkFruit(name) {
    return fruits.find(fruit => fruit.name == name)
}
function buyFruit(name, qty) {
    let fruit = checkFruit(name)

    if(fruit == undefined || typeof(fruit) != "object" && fruits instanceof Array) {
        console.log(`the fruit ${name} is not avilable`)
        return;
    }

    if (fruit.stock < qty) {
        console.log(`Quantity required for ${name} is not available`)
        return;
    }

    fruit.stock -= qty
}

buyFruit("Mango", 10)
console.log(fruits)

//Note study Social Engineering