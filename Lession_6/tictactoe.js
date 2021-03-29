const readline = require("readline-sync");
const UNMARKED_SPACE = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";
const GAMES_TO_WIN_MATCH = 5;
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
  console.log(`${firstPlayer[0].toUpperCase() + firstPlayer.slice(1)} choose first each round.`);
  console.log(`You are ${USER_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  console.log(`First to score of 5 wins the entire match.`);
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

function computerChoosesSquare (board) {
  let computerSquare;

  // Offense
  for (let idx = 0; idx < WINNING_COMBINATIONS.length; idx++) {
    let line = WINNING_COMBINATIONS[idx];
    computerSquare = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (computerSquare) break;
  }

  // Defense
  if (!computerSquare) {
    for (let idx = 0; idx < WINNING_COMBINATIONS.length; idx++) {
      let line = WINNING_COMBINATIONS[idx];
      computerSquare = findAtRiskSquare(line, board, USER_MARKER);
      if (computerSquare) break;
    }
  }

  // Pick the optima square: #5
  if (!computerSquare && validSquares(board).includes('5')) computerSquare = '5';

  // random selection
  if (!computerSquare) computerSquare = chooseRandomSquare(board);

  board[computerSquare] = COMPUTER_MARKER;
}

function determineWinner (board) {


  let playerWins = WINNING_COMBINATIONS.some(combo => {
    return combo.every(square => board[square] === USER_MARKER);
  });

  let computerWins = WINNING_COMBINATIONS.some(combo => {
    return combo.every(square => board[square] === COMPUTER_MARKER);
  });

  if (playerWins) {
    return 'Player';
  } else if (computerWins) {
    return 'Computer';
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

  let validChoices = ["player", "computer", "choose"];
  let choice;

  while (true) {
    prompt(`Choose who will plays first for all rounds: ${joinOr(validChoices)}`);
    choice = readline.prompt().toLowerCase().trim();
    if (validChoices.includes(choice)) break;
    prompt(`Please choose one of these choices: ${joinOr(validChoices)}`);
  }

  if (choice === "choose") {
    let smallChoice = ["player", "computer"];
    let randomIndex = Math.floor(Math.random() * 2);
    choice = smallChoice[randomIndex];
  }

  return choice;
}

function chooseSquare (board, currentPlayer) {
  if (currentPlayer === "player") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer (currentPlayer) {
  if (currentPlayer === "player") {
    return "computer";
  } else {
    return "player";
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
      // Messages displayed with board
      displayFullBoard(board);
      if (round > 0) prompt(`${previousRoundWinner} Round ${round - 1}!`);
      console.log("");
      prompt(`Round: ${round}`);
      displayScore(userScore, computerScore);

      // Each player takes turns marking board until someone wins
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      // If board is full or some one wins move to next round
      if (someoneWins(board) || boardFull(board)) break;
    }

    // Display board
    displayFullBoard(board);

    // Determine who won round
    if (!determineWinner(board)) {
      previousRoundWinner = "Player and Computer tied";
    } else {
      previousRoundWinner = `${determineWinner(board)} won`;
    }

    // Update scores and round
    if (someoneWins(board)) {
      prompt(`${determineWinner(board)} wins Round ${round}!`);
      round++;
      if (determineWinner(board) === 'Player') {
        userScore++;
      } else {
        computerScore++;
      }
    } else {
      prompt(`Round ${round} is a tie!`);
      round++;
      userScore++;
      computerScore++;
    }

    displayScore(userScore, computerScore);

    // Determin which player wins the match
    if (userScore > computerScore && userScore >= GAMES_TO_WIN_MATCH) {
      prompt(`Player Wins the match!\n`);
      break;
    } else if (computerScore > userScore &&
      computerScore >= GAMES_TO_WIN_MATCH) {
      prompt(`Computer Wins the match!\n`);
      break;
    } else if (userScore >= GAMES_TO_WIN_MATCH ||
      computerScore >= GAMES_TO_WIN_MATCH) {
      prompt(`It's a Tie!\n`);
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