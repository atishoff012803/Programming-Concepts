const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Input1 : "));
let num2 = parseInt(prompt("Enter Input2 : "));
let choice = parseInt(prompt("Enter Choice : "));

switch(choice){
    case 1:
        console.log(`num1 + num2 : ${num1 + num2}`);
        break;
    case 2:
        console.log(`num1 - num2 : ${num1 - num2}`);
        break;
    case 3:
        console.log(`num1 * num2  : ${num1 * num2}`);
        break;
    case 4:
        console.log(`num1 / num2 : ${num1 / num2}`);
        break;
    case 5:
        console.log(`num1 % num2 : ${num1 % num2}`);
        break;
    default:
        console.log(`invalid choice!`);
        break;
}