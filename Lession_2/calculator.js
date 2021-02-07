const readline = require('readline-sync');

//check value inputs
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
//consisten & unique messages
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Calculator!');

while (true) {
//Ask user for the first number
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  //Ask user for the second number
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  //Ask user for the operation
  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = readline.question();
  }

  //Perform operation on given numbers
  let output;
  switch (operation) {
    case '1':// '1' represents to Add
      output = Number(number1) + Number(number2);
      break;
    case '2':// '2' represents to Subtract
      output = Number(number1) - Number(number2);
      break;
    case '3':// '3' represents to Multiply
      output = Number(number1) * Number(number2);
      break;
    case '4':// '4' represents to Divide
      output = Number(number1) / Number(number2);
      break;
  }

  //Display result of operation
  prompt(`The result is: ${output}`);

  //Ask user if they want to keep keep calculating
  prompt("Another calculation? (y/n)");
  let keepGoing = readline.question();

  if (keepGoing[0].toLowerCase() !== 'y') break;
}