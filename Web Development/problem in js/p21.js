const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Input: "));
let count = 0;
while(num != 0){
    let rem = num % 10;
    count = (count * 10) + rem;
    num = Math.floor(num / 10);
}
console.log(`reverse number : ${count}`);