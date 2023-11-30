const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Input Value : "));
let NUM = num, count = 0, NUM1 = num, count1 = 0;
while(num != 0){
    let rem1 = num % 10;
    count++;
    num = Math.floor(num / 10);
}
while(NUM != 0){
    let rem2 = NUM % 10;
    count1 += Math.pow(rem2, count);
    NUM = Math.floor(NUM / 10);
}
if(NUM1 == count1)
    console.log(`${NUM1} is Armstrong Number`);
else
    console.log(`${NUM1} is not Armstrong Number`);