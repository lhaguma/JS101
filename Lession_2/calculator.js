const readline = require('readline-sync');

//check value inputs
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
//consisten & unique messages
function prompt(message) {
  console.log(`=> ${message}`);
}

//language specific calculator selection
const ALL_LANGUAGES = require('./calculator_messages.json');
prompt(ALL_LANGUAGES.selection);
let language = readline.question();
const MESSAGES = ALL_LANGUAGES[language];


prompt(MESSAGES.welcome);

while (true) {
//Ask user for the first number
  prompt(MESSAGES.number.number1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalid.number);
    number1 = readline.question();
  }

  //Ask user for the second number
  prompt(MESSAGES.number.number2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalid.number);
    number2 = readline.question();
  }

  //Ask user for the operation
  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (!MESSAGES.invalid.opChoice.includes(operation)) {
    prompt(MESSAGES.invalid.operator);
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
  prompt(`${MESSAGES.result} ${output}`);

  //Ask user if they want to keep keep calculating
  prompt(MESSAGES.repeat);
  let keepGoing = readline.question();

  if (keepGoing[0].toLowerCase() !== 'y') break;
}