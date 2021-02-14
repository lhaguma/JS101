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

function getFullChoice(userShortChoice) {
  return Object.keys(VALID_CHOICES).
    find(key => VALID_CHOICES[key] === userShortChoice);
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

//Game loop sequence
while (true) {
  prompt('Welcome to the Rock Paper Scissors Lizard Spock Game!\n');

  let userScore = 0;
  let computerScore = 0;

  //Rounds of the game
  for (let index = 1; index <= NUMBER_OF_ROUNDS; index += 1) {
    prompt(`Round ${index}:`);

    // Ask and validate user choice
    prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(', ')}`);
    let userChoice = readline.question();

    while (!Object.values(VALID_CHOICES).includes(userChoice) &&
    !Object.keys(VALID_CHOICES).includes(userChoice)) {
      prompt(`That's not a valid choice.\nOther valid inputs: ${Object.values(VALID_CHOICES).join(', ')}`);
      userChoice = readline.question();
    }

    //Convert short choice into full choice
    let userLongChoice;
    if (Object.values(VALID_CHOICES).includes(userChoice)) {
      userLongChoice = getFullChoice(userChoice);
    } else {
      userLongChoice = userChoice;
    }

    //Randomly select computer's choice
    let randomIndex = Math.floor(Math.random() *
    Object.keys(VALID_CHOICES).length);
    let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

    //Display user and computer choices and winner
    prompt(`You chose ${userLongChoice}, computer chose ${computerChoice}\n`);
    displayWinner(userLongChoice, computerChoice);

    //Keep track of score
    if (userWins(userLongChoice, computerChoice)) {
      userScore += 1;
    } else if (userLongChoice === computerChoice) {
      userScore += 1;
      computerScore += 1;
    } else {
      computerScore += 1;
    }

    //Display score
    prompt(`Your score: ${userScore}. Computer's score: ${computerScore}\n`);
  }

  //Display grand winner after 5 rounds
  if (userScore > computerScore) {
    prompt('You are the Grand Champion!\n');
  } else if (computerScore > userScore) {
    prompt('Computer is the Grand Champion!\n');
  } else {
    prompt("It's a tie.\n");
  }

  //Ask user if they want to play again
  prompt('Do you want to play again (y/n)?');
  let playAgainAnswer = readline.question().toLowerCase();

  while (playAgainAnswer[0] !== 'n' && playAgainAnswer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    playAgainAnswer = readline.question().toLowerCase();
  }
  console.clear();
  if (playAgainAnswer[0] !== 'y') break;
}