const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Range1 : "));
console.log("Even Number List : ");
for(let i = 0; i <= num; i++){
    if(i % 2 == 0)
        console.log(i);
}
console.log("Odd Number List : ");
for(let i = 0; i <= num; i++){
    if(i % 2 != 0)
        console.log(i);
}