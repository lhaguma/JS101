const readline = require('readline-sync');
const SQUARE_FEET =  10.7639; //1 square meter == 10.7639 square feet
const VALID_INPUTS = {
  feet: 'f',
  meters: 'm'
};

function invalidChoice (choice) {
  return !Object.keys(VALID_INPUTS).includes(choice) &&
  !Object.values(VALID_INPUTS).includes(choice);
}

function shortToFullChoice (shortChoice) {
  if (shortChoice.length < 2) {
    return Object.keys(VALID_INPUTS).
      find(key => VALID_INPUTS[key] === shortChoice);
  } else {
    return shortChoice;
  }
}

function flipChoice (choice) {
  if (choice === 'meters') {
    return 'feet';
  } else {
    return 'meters';
  }
}

console.log('Please enter you desired input method: meters (m) or feet (f)?');
let inputChoice = shortToFullChoice(readline.prompt());
while (invalidChoice(inputChoice)) {
  console.log('Incorrect input! Please enter one: meter, m , feet, f');
  inputChoice = shortToFullChoice(readline.prompt());
}

console.log(`Enter the length of the room in ${inputChoice}:`);
let Length = readline.prompt();

console.log(`Enter the width of the room in ${inputChoice}:`);
let Width = readline.prompt();

let room = Number(Length) * Number(Width);
let roomConvert;

if (inputChoice === 'meters') {
  roomConvert = room * SQUARE_FEET;
} else {
  roomConvert = room / SQUARE_FEET;
}

console.log(`The area of the room is ${room.toFixed(2)} square ${inputChoice} (${roomConvert.toFixed(2)} square ${flipChoice(inputChoice)}).`);
