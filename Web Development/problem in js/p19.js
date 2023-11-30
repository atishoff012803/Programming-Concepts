const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Range1 : "));
let num2 = parseInt(prompt("Enter Range2 : "));
let flag = true;
for(let i = num1; i <= num2; i++){
    for(let j = 2; j < i; j++)
    {
        if(i % j == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        if(i != 1){
            console.log(i);
        }
    }
    flag = true;
}