const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Input1 : "));
let num2 = parseInt(prompt("Enter Input2 : "));
let num3 = parseInt(prompt("Enter Input3 : "));
if(num1 > num2 & num1 > num3){
    console.log(`${num1} is greatest among num1 num2 num3`);
}else if(num2 > num1 & num2 > num3){
    console.log(`${num2} is greatest among num1 num2 num3`);
}else{
    console.log(`${num3} is greatest among num1 num2 num3`);
}