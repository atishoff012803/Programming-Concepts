const prompt = require("prompt-sync")();
let range = parseInt(prompt("Enter Range : "));
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for(let i = 1; i <= range; i++){
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    console.log(temp);
}