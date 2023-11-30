const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Input : "));
if(num > 0)
    console.log(`${num} is positive number`);
else if(num == 0)
    console.log(`${num} is 0`);
else
    console.log(`${num} is negative number`);