const prompt = require("prompt-sync")();
let inum = parseInt(prompt("Enter Num Value : "));
let bunm = parseFloat(prompt("Enter Root Value : "));
bunm = 1 / bunm;
console.log("root : ",Math.pow(inum, bunm));