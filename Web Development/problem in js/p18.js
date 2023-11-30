const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Range : "));
let flag = true;
for(let i = 1; i <= num1; i++){
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