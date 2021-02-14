const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function userWins (userChoice, computerChoice) {
  let winner;
  if ((userChoice === 'rock' &&
  (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
  (userChoice === 'paper' &&
  (computerChoice === 'rock' || computerChoice === 'spock')) ||
  (userChoice === 'scissors' &&
  (computerChoice === 'paper' || computerChoice === 'lizard')) ||
  (userChoice === 'lizard' &&
  (computerChoice === 'spock' || computerChoice === 'paper')) ||
  (userChoice === 'spock' &&
  (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    winner = 'You win!';
  }
  return winner;
}

function computerWins (userChoice, computerChoice) {
  let winner;
  if ((userChoice === 'rock' &&
  (computerChoice === 'paper' || computerChoice === 'spock')) ||
  (userChoice === 'paper' &&
  (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
  (userChoice === 'scissors' &&
  (computerChoice === 'rock' || computerChoice === 'spock')) ||
  (userChoice === 'lizard' &&
  (computerChoice === 'scissors' || computerChoice === 'rock')) ||
  (userChoice === 'spock' &&
  (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    winner = 'Computer wins!';
  }
  return winner;
}

while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice");
    userChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  let userIsWinner = userWins(userChoice, computerChoice);
  let computerIsWinner = computerWins(userChoice, computerChoice);

  if (userIsWinner) {
    prompt(userIsWinner);
  } else if (computerIsWinner) {
    prompt(computerIsWinner);
  } else {
    prompt("It's a tie.");
  }

  prompt('Do you want to play again (y/n)?');
  let playAgainAnswer = readline.question().toLowerCase();

  while (playAgainAnswer[0] !== 'n' && playAgainAnswer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    playAgainAnswer = readline.question().toLowerCase();
  }

  if (playAgainAnswer[0] !== 'y') break;

}