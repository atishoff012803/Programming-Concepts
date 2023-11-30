const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
let sq = num * num;
let NUM = num;
let count = 0;
while(NUM > 0){
    NUM = Math.floor(NUM / 10);
    count++;
}
let div = Math.pow(10, count);
let rem = sq % div;
if(rem == num)
    console.log(`${num} is an automorphic number`);
else
    console.log(`${num} is not an automorphic number`);