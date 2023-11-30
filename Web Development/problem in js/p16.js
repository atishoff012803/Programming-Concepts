const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Number: "));
let temp = 1, NUM = num, count = 0;
while (num !== 0) {
    let rem = num % 10;
    for (let i = 1; i <= rem; i++) {
        temp *= i;
    }
    count += temp;
    temp = 1;
    num = Math.floor(num / 10);
}
if (NUM === count)
    console.log(`${NUM} is a strong number`);
else
    console.log(`${NUM} is not a strong number`);
