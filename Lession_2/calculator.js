const readline = require('readline-sync');

console.log('Welcome to Calculator!');

//Ask user for the first number 
console.log("What's the first number?");
let number1 = readline.question();

//Ask user for the second number
console.log("What's the second number?");
let number2 = readline.question();

//Ask user for the operation 
console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

//Perform operation on given numbers
let output;
if(operation === '1') { // '1' represents to Add
  output = Number(number1) + Number(number2);
} else if(operation === '2') { // '2' represents to Subtract
  output = Number(number1) - Number(number2);
} else if(operation === '3') { // '3' represents to Multiply
  output = Number(number1) * Number(number2);
} else if(operation === '4') { // '4' represents to Divide
  output = Number(number1) / Number(number2);
}
//Display result of operation 
console.log(`The result is: ${output}`);
