const prompt = require("prompt-sync")();
let r1 = parseInt(prompt("Enter r1 : "));
let r2 = parseInt(prompt("Enter r2 : "));
console.log("Even Number Sum From R1 to R2 : ");
let count1 = 0;
for(let i = r1; i <= r2; i++){
    if(i % 2 == 0){
        count1 += i;
    }
}
console.log(count1);
console.log("Odd Number Sum From R1 to R2 : ");
let count2 = 0;
for(let i = r1; i <= r2; i++){
    if(i % 2 != 0){
        count2 += i;
    }
}
console.log(count2);