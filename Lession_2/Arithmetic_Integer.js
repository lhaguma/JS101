const readline = require('readline-sync');

console.log('==> Enter the first number:');
let firstNumber = Number(readline.question());

console.log('==> Enter the second number:');
let secondNumber = Number(readline.question());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${parseInt(firstNumber / secondNumber,10)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);