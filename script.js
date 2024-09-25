// create a function that randomly returns a string of 'rock' 'paper' or 'scissors'
// create a function that takes a user choice of 'rock' 'paper' or 'scissors'
// keep track of players and computers score
// round by round game, play up to 5 rounds
// declare a winner each round and a total winner at end of game

function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.33) {
    return "scissors";
  } else if (randomNum < 0.67) {
    return "paper";
  } else {
    return "rock";
  }
}

console.log(randomNum);
