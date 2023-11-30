const prompt = require("prompt-sync")();
let userdate = prompt("Enter Date : ");
let date1 = new Date(userdate);
let date2 = new Date();

let year = date2.getFullYear() - date1.getFullYear();
let month = date2.getMonth() - date1.getMonth();
let day = date2.getDate() - date1.getDate();

if(month < 0 || (month === 0 && days < 0)){
    year--;
    month += 12;
}
if(day < 0){
    let lastmonth = new Date(
        date2.getFullYear(), date2.getMonth(), date2.getDate()
    );
    let dayinlastmonth = (date2 - lastmonth) / (24 * 60 * 60 * 1000);
    day = Math.floor(dayinlastmonth);
}
console.log(`user age is ${year} year, ${month} month, ${day} day`);