const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
if(Math.ceil(Math.sqrt(num)) == Math.floor(Math.sqrt(num))){
    console.log(`${num} is a perfect square number`);
}else{
    console.log(`${num} is not a perfect square number`);
}