const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Number : "));
let temp = 1;
for(let i = 1; i <= num; i++){
    temp *= i;
}
console.log(`factorial : ${temp}`);