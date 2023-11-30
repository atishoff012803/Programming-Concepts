const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num Value : "));
let flag = true;
for(let i = 2; i < num; i++){
    if(num % i == 0)
        flag = false;
}
if(flag)
    console.log(`${num} is prime number`);
else
    console.log(`${num} is not prime number`);