const readline = require('readline-sync');

let name = readline.question('What is your name? ');

if (name.split('').includes('!')) {
  console.log(`Hello ${name.slice(0,-1)}. Why are you screaming`.toUpperCase());
} else {
  console.log(`Hello ${name}.`);
}
