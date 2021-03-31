const readline = require("readline-sync");
const UNMARKED_SPACE = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";
const GAMES_TO_WIN_MATCH = 5;
const USER = 'Player';
const COMPUTER = 'Computer';
const WINNING_COMBINATIONS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // Winning horizontally
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // Winning vertically
  [1 ,5 , 9], [3, 5, 7] // Winning diagonally
];

let firstPlayer;

function displayBoard (board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function displayFullBoard (board) {
  console.clear();
  console.log(`${firstPlayer} choose first each round.`);
  console.log(`You are ${USER_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  console.log(`First to a score of 5 wins the entire match.`);
  displayBoard(board);
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = UNMARKED_SPACE;
  }

  return board;
}

function joinOr (array, delimiter = ", ", term = "or") {
  if (array.length === 0) {
    return "";
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else if (array.length === 2 ) {
    return `${array[0]} ${term} ${array[1]}`;
  } else {
    let firstHalf = array.slice(0, -1).join(delimiter);
    return `${firstHalf + delimiter + term} ${array.slice(-1)}`;
  }
}

function validSquares (board) {
  return Object.keys(board).filter(keys => board[keys] === UNMARKED_SPACE);
}

function prompt(str) {
  console.log(`=> ${str}`);
}

function playerChoosesSquare (board) {
  let userSquare;

  while (true) {
    prompt(`Choose one square to mark: ${joinOr(validSquares(board))}`);
    userSquare = readline.prompt().trim();

    if (validSquares(board).includes(userSquare)) break;

    prompt("Please enter a valid square or a square not yet marked.");
  }

  board[userSquare] = USER_MARKER;
}

function findAtRiskSquare(line, board, maker) {
  let winningLine = line.map(square => board[String(square)]);

  if (winningLine.filter(val => val === maker).length === 2) {
    let defenseSquare = line.find(square => board[square] === UNMARKED_SPACE);
    return defenseSquare;
  }
  return undefined;
}

function chooseRandomSquare (board) {
  let randomIndex = Math.floor(Math.random() * validSquares(board).length);
  return validSquares(board)[randomIndex];
}

function findCriticalSquare (board, marker, square) {
  for (let idx = 0; idx < WINNING_COMBINATIONS.length; idx++) {
    let line = WINNING_COMBINATIONS[idx];
    square = findAtRiskSquare(line, board, marker);
    if (square) break;
  }
  return square;
}

function computerChoosesSquare (board) {
  let computerSquare;

  // Offense
  computerSquare = findCriticalSquare(board, COMPUTER_MARKER, computerSquare);

  // Defense
  if (!computerSquare) {
    computerSquare = findCriticalSquare(board, USER_MARKER, computerSquare);
  }

  // Pick the optima square: #5
  if (!computerSquare && validSquares(board).includes('5')) computerSquare = '5';

  // random selection
  if (!computerSquare) computerSquare = chooseRandomSquare(board);

  board[computerSquare] = COMPUTER_MARKER;
}

function playSingleRound (board, round, winner, userScore, compScore, player) {
  // Messages displayed with board
  displayFullBoard(board);
  if (round > 0) prompt(`${winner} Round ${round - 1}!`);
  console.log("");

  prompt(`Round: ${round}`);
  displayScore(userScore, compScore);

  // Each player takes a turn marking board until someone wins
  chooseSquare(board, player);
}

function determineWinner (board) {


  let playerWins = WINNING_COMBINATIONS.some(combo => {
    return combo.every(square => board[square] === USER_MARKER);
  });

  let computerWins = WINNING_COMBINATIONS.some(combo => {
    return combo.every(square => board[square] === COMPUTER_MARKER);
  });

  if (playerWins) {
    return USER;
  } else if (computerWins) {
    return COMPUTER;
  } else {
    return undefined;
  }

}

function boardFull (board) {
  return validSquares(board).length === 0;
}

function someoneWins (board) {
  return !!determineWinner(board);
}

function displayScore (userScore, computerScore) {
  prompt(`Score: Player = ${userScore} Computer = ${computerScore}`);
}

function playFirst () {
  let validChoices = ["player", "computer", "random"];
  let smallChoice = ['p', 'c', 'r'];
  let choice;

  while (true) {
    prompt(`Choose who will plays first for every rounds: (p)layer, (c)omputer, or (r)andom`);
    choice = readline.prompt().toLowerCase().trim();
    if (validChoices.includes(choice) || smallChoice.includes(choice[0])) break;
    prompt(`Please choose one of these choices: ${joinOr(validChoices)}`);
    prompt(`These are also valid choices: ${joinOr(smallChoice)}`);
  }

  if (['random', 'r'].includes(choice)) {
    choice = ["player", "computer"][Math.floor(Math.random() * 2)];
  } else if (choice.length === 1) {
    choice = validChoices.filter(value => value[0] === choice)[0];
  }

  return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}

function chooseSquare (board, currentPlayer) {
  if (currentPlayer === USER) {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer (currentPlayer) {
  if (currentPlayer === USER) {
    return COMPUTER;
  } else {
    return USER;
  }
}

function updatePreviousRoundWinner (board) {
  if (!determineWinner(board)) {
    return "Player and Computer tied";
  } else {
    return `${determineWinner(board)} won`;
  }
}

function displayCurrentWinner (board, round) {
  if (someoneWins(board)) {
    prompt(`${determineWinner(board)} wins Round ${round}!`);
  } else {
    prompt(`Round ${round} is a tie!`);
  }
}

function displayGrandWinner (userScore, computerScore) {
  // Determin which player wins the match
  if (userScore > computerScore && userScore >= GAMES_TO_WIN_MATCH) {
    prompt(`Player Wins the match!\n`);
  } else if (computerScore > userScore &&
    computerScore >= GAMES_TO_WIN_MATCH) {
    prompt(`Computer Wins the match!\n`);
  } else if (userScore >= GAMES_TO_WIN_MATCH ||
    computerScore >= GAMES_TO_WIN_MATCH) {
    prompt(`It's a Tie!\n`);
  }
}

// Introduce game and rules
console.clear();
prompt("Welcome to the Tic Tac Toe Game!");
prompt("Game Rules: Each player will choose a square on the board according to its number:");
let exampleSquares = initializeBoard();
for (let idx = 0; idx <= 9; idx += 1) {
  exampleSquares[String(idx)] = String(idx);
}
displayBoard(exampleSquares);

// Establish first player
firstPlayer = playFirst();

// Initiallize match
while (true) {
  let round = 0;
  let userScore = 0;
  let computerScore = 0;
  let previousRoundWinner;

  // Initiallize each round of the match
  while (true) {
    let board = initializeBoard();
    let currentPlayer = firstPlayer;

    // Computer and Player taking turns marking board
    while (true) {
      playSingleRound (board, round,
        previousRoundWinner, userScore, computerScore, currentPlayer);

      // Change who plays next
      currentPlayer = alternatePlayer(currentPlayer);

      // If board is full or some one wins move to next round
      if (someoneWins(board) || boardFull(board)) break;
    }

    // Display board
    displayFullBoard(board);

    // Determine who won round
    previousRoundWinner = updatePreviousRoundWinner (board);

    // Display current winner
    displayCurrentWinner(board, round);

    // Update scores and round
    round++;

    switch (determineWinner(board)) {
      case USER: userScore++;
        break;
      case COMPUTER: computerScore++;
        break;
      default:
        userScore++;
        computerScore++;
        break;
    }

    // display updated score
    displayScore(userScore, computerScore);

    // Determin which player wins the match
    if (userScore >= GAMES_TO_WIN_MATCH ||
      computerScore >= GAMES_TO_WIN_MATCH) {
      displayGrandWinner (userScore, computerScore);
      break;
    }
  }

  // Ask player if they want a rematch
  let validPlayAgainResponse = "yn";
  prompt("Do you want to play again? (y)es or (n)o?");
  let playAgainResponse = readline.prompt().toLocaleLowerCase();

  while (!validPlayAgainResponse.includes(playAgainResponse)) {
    prompt("Please enter y or n. Case does not matter.");
    playAgainResponse = readline.prompt().toLocaleLowerCase().trim();
  }

  if (playAgainResponse === 'n') break;
}

prompt("Thank you for playing Tic Tac Toe!");