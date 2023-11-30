const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
let range = parseInt(prompt("Enter Range : "));
for(let i = 0; i <= range; i++){
    console.log(`${num} * ${i} = ${i  * num}`);
}