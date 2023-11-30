const prompt = require("prompt-sync")();
let range = parseInt(prompt("Enter Range Value : "));
let count = 0;
console.log("even number sum : ");
for(let i = 1; i <= range; i++){
    if(i % 2 == 0){
        count += i;
    }
}
console.log(count);
let count1 = 0;
console.log("odd number sum : ");
for(let i = 1; i <= range; i++){
    if(i % 2 != 0){
        count1 += i;
    }
}
console.log(count1);