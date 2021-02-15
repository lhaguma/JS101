//Constants
const readline = require('readline-sync');
const NUMBER_OF_ROUNDS = 5;
const VALID_CHOICES = {
  rock: 'r',
  paper:'p',
  scissors: 'sc',
  spock: 'sp',
  lizard: 'l'
};
const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

//Functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function getRandomChoice() {
  return Object.keys(VALID_CHOICES)[
    Math.floor(
      Math.random() * Object.keys(VALID_CHOICES).length
    )];
}

function choiceIsInvalid (choice) {
  return !Object.values(VALID_CHOICES).includes(choice) &&
    !Object.keys(VALID_CHOICES).includes(choice);
}

function convertToFullChoice(userShortChoice) {
  if (Object.values(VALID_CHOICES).includes(userShortChoice)) {
    return Object.keys(VALID_CHOICES).
      find(key => VALID_CHOICES[key] === userShortChoice);
  } else {
    return userShortChoice;
  }
}

function getUsersChoice () {
  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (choiceIsInvalid(choice)) {
    prompt(`That's not a valid choice.\nOther valid inputs: ${Object.values(VALID_CHOICES).join(', ')}`);
    choice = readline.question().toLowerCase();
  }

  return convertToFullChoice(choice);
}

function userWins (userFullChoice, computerFullChoice) {
  return WINNING_COMBINATIONS[userFullChoice].includes(computerFullChoice);
}

function displayWinner (userFullChoice, computerFullChoice) {
  if (userWins(userFullChoice, computerFullChoice)) {
    prompt('You win!');
  } else if (userFullChoice === computerFullChoice) {
    prompt("It's a tie.");
  } else {
    prompt('Computer wins!');
  }
}

function displayGrandWinner (userFullChoice, computerFullChoice) {
  if (userFullChoice > computerFullChoice) {
    prompt('You are the Grand Champion!\n');
  } else if (computerFullChoice > userFullChoice) {
    prompt('Computer is the Grand Champion!\n');
  } else {
    prompt("It's a tie.\n");
  }
}

//Game loop sequence
while (true) {
  prompt('Welcome to the Rock Paper Scissors Lizard Spock Game!\n');

  let userScore = 0;
  let computerScore = 0;

  prompt(`Best score in the ${NUMBER_OF_ROUNDS} rounds wins!`);

  //Rounds of the game
  for (let index = 1; index <= NUMBER_OF_ROUNDS; index += 1) {
    prompt(`Round ${index}:`);

    // Ask and validate user choice
    let userChoice = getUsersChoice();

    //Randomly select computer's choice
    let computerChoice = getRandomChoice();

    //Display user and computer choices and winner
    prompt(`You chose ${userChoice}, computer chose ${computerChoice}\n`);
    displayWinner(userChoice, computerChoice);

    //Keep track of score
    if (userWins(userChoice, computerChoice)) {
      userScore += 1;
    } else if (userChoice === computerChoice) {
      userScore += 1;
      computerScore += 1;
    } else {
      computerScore += 1;
    }

    //Display score
    prompt(`Your score: ${userScore}. Computer's score: ${computerScore}\n`);
  }

  //Display grand winner after 5 rounds
  displayGrandWinner (userScore, computerScore);

  //Ask user if they want to play again
  prompt('Do you want to play again (y/n)?');
  let playAgainAnswer = readline.question().toLowerCase();

  while (playAgainAnswer[0] !== 'n' && playAgainAnswer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    playAgainAnswer = readline.question().toLowerCase();
  }
  console.clear();
  if (playAgainAnswer !== 'y') break;
}