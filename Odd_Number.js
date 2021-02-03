//Odd numbers 
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

//alternative method - work on progress
let readlineSync = require('readline-sync');
let max = Number(readlineSync.question('Enter Maximum Number: '));

for (let i = 1; i <= max; i += 1) {
  if ( i % 2 === 0 ) continue;
  console.log(i);
}