//for loop
for (let a = 0; a < 10; a++) {
	console.log("Inside for loop", a);
}
console.log("Done\n");

const names = ["Ayo", "Zubair", "Chioma", "Fatima", "Kelechi", "Tunde", "Emeka"];
for (let k = 0; k < names.length; k++) {
	//console.log(names[k])
	let html = `<div>${names[k]}</div>`;
	console.log(html);
}

//while loop
let d = 0;
while (d < 5) {
	console.log("\nwhile-loop", d);
	d++
}

const sunaye = ["Ayo", "Zubair", "Chioma", "Fatima", "Kelechi", "Tunde", "Emeka"];
let s = 0;

while (s < sunaye.length) {
	console.log(`\nin-while ${sunaye[s]}`);
	s++
}


//do while
let i = 5;

do{
	console.log("do-while", i);
	i++
}
while (i < 5) {
	console.log(i);
	i++
}
