const readline = require("readline-sync");

let age = Number(readline.question("What is your age? "));
let retireAge = Number(readline.question("At what age would you like to retire? "));
console.log();

let lapseTime = retireAge - age;
let time = new Date();
let thisYear = time.getFullYear();

console.log(`It's ${thisYear}. You will retire in ${thisYear + (lapseTime)}.`);
console.log(`You have only ${lapseTime} years of work to go!\n`);
