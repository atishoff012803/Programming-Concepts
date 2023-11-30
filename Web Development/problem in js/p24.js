const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Input1 : "));
let num2 = parseInt(prompt("Enter Input2 : "));
let a = num1, b = num2, t, HCF, LCM;
while(b != 0){
    t = b;
    b = a % b;
    a = t;
}
HCF = a, LCM = Math.floor((num1 * num2) / HCF);
console.log(`HCF : ${HCF}`);
console.log(`LCM ${LCM}`);