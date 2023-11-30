const prompt = require("prompt-sync")();
let N = parseInt(prompt("Enter N Value : "));
let R = parseInt(prompt("Enter R Value : "));
let N_R = N - R, TEMP1 = 1, TEMP2 = 1, TEMP3 = 1;

for(let i = 1; i <= N; i++){
    TEMP1 *= i;
}
for(let i = 1; i <= R; i++){
    TEMP2 *= i;
}
for(let i = 1; i <= N_R; i++){
    TEMP3 *= i;
}
console.log(`nCr : ${TEMP1/(TEMP2 * TEMP3)}`);
console.log(`nPr : ${TEMP1 / TEMP3}`);