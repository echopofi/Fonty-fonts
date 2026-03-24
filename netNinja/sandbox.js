//alert("Hey, this is from sand box")
console.log("This is also from sand box")
let a = "Constantine"
console.log(a[-1])
let up = a.toUpperCase()
let down = a.toLowerCase()
console.log(down)

let email = "constantine@gmail.com"
let i = email.replace("gmail", "yahoo")
console.log(i)

let likes = 100

let sen = "the blog has "+ likes + " views"
console.log(sen)
let author = "Constantine"
let title = "How to be a programmer"
let quantity = 500
let html = `
    <h1>${title}</h1>
    <h2>${author}</h2>
    <h3>${quantity}</h3>
    
`
let html2 = `the title is ${title} and the author is ${author} and the quantity is ${quantity}`
console.log(html2)
console.log(html)