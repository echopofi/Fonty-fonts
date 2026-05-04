const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const input = document.querySelector("input")
const greet = document.querySelector("input")
const h2 = document.querySelector("#bold")
const italic = document.querySelector("#italic")

body.style.backgroundColor = "lightblue";
h1.style.fontFamily = "Arial, sans-serif";
h1.style.marginTop= "10px";

input.style.padding = "10px";
input.style.fontSize = "16px";
input.style.border = "2px solid #ccc";
input.style.borderRadius = "9px";



h2.style.fontSize = "35px";
h2.style.fontWeight = "bold";
h2.style.color = "darkblue";

italic.style.fontSize = "20px";
italic.style.fontStyle = "italic";
italic.style.color = "grey";

greet.addEventListener("input", function(e){
    h2.textContent = e.target.value
    italic.textContent = e.target.value
})