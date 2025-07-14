let playerScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const choice = prompt("Choice rock, paper, or scissors.:");
  return choice;
}

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber <= (1/3)) {
    randomNumber = "rock";
    return randomNumber;
  } else if (randomNumber <= (2/3)) {
    randomNumber = "paper";
    return randomNumber;
  } else {
    randomNumber = "scissors";
    return randomNumber;
  }
}

getHumanChoice(); 

getComputerChoice();