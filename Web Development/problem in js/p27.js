const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter input : "));
let count = 0;
for(let i = 1; i < num; i++){
    if(num % i == 0)
        count += i;
}
if(count == num)
    console.log(`${num} is a perfect number`);
else
    console.log(`${num} is not a perfect number`);