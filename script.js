// create a function that randomly returns a string of 'rock' 'paper' or 'scissors'
// create a function that takes a user choice of 'rock' 'paper' or 'scissors'
// keep track of players and computers score
// round by round game, play up to 5 rounds
// declare a winner each round and a total winner at end of game
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const arrOfChoices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * arrOfChoices.length);
  return arrOfChoices[randomNum];
};

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You tied! You both picked ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You won! Scissors cuts Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lost! Scissors get crushed by Rock.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You won! Paper covers Rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lost! Paper gets cut by Scissors.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You won! Rock beats Scissors.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lost! Rock gets covered by Paper.";
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt(
      "Choose what to throw.",
      "Rock, Paper, or Scissors"
    ).toLowerCase();
    console.log("1", singleRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    return "You beat the computer!";
  } else if (computerScore > playerScore) {
    return "You got beat by the computer!";
  } else {
    return "You tied!";
  }
};

console.log(game());
