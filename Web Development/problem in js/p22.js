const prompt = require("prompt-sync")();
let ip = parseInt(prompt("Enter Input : "));
let IP = ip, count = 0;
while(ip != 0){
    let rem = ip % 10;
    count = (count * 10) + rem;
    ip = Math.floor(ip / 10);
}
if(IP == count)
    console.log(`${IP} is Palindrome Number`);
else
    console.log(`${IP} is not Palindrome Number`);