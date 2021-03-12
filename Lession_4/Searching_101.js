// Write a program that solicits six numbers from the user,
const readline = require("readline-sync");
let numbers = [];
console.log("Enter the 1st number:");
numbers.push(readline.prompt());
console.log("Enter the 2nd number:");
numbers.push(readline.prompt());
console.log("Enter the 3rd number:");
numbers.push(readline.prompt());
console.log("Enter the 4th number:");
numbers.push(readline.prompt());
console.log("Enter the 5th number:");
numbers.push(readline.prompt());
console.log("Enter the last number:");
let searchNum = readline.prompt();

if (numbers.includes(searchNum)) {
  console.log(`The number ${searchNum} appears in ${numbers}`);
} else {
  console.log(`The number ${searchNum} does not appears in ${numbers}`);
}
