const prompt = require("prompt-sync")();
let range = parseInt(prompt("Enter Range : "));
let count1 = 0;
for(let i = 0 ; i <= range; i++){
    count1 += i;
}console.log(count1);

let r1 = parseInt(prompt("Enter Range1 : "));
let r2 = parseInt(prompt("Enter Range2 : "));
let count2 = 0;
for(let i = r1 ; i <= r2; i++){
    count2 += i;
}console.log(count2);