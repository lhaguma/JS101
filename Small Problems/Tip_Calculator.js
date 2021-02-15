//Tip Calculator
let readlineSync = require('readline-sync');
let bill = Number(readlineSync.question('What is the bill? '));
let tipPercent = Number(readlineSync.question('What is the tip percentage? '));
let tipAmount = bill*(tipPercent/100);

console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${(bill+tipAmount).toFixed(2)}`);
