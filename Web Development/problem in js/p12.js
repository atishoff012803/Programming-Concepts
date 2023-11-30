const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Base : "));
let num2 = parseInt(prompt("Enter Power : "));
console.log(Math.pow(num1, num2));