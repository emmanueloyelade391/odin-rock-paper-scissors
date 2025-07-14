//Create player and computer score and set them to 0
let playerScore = 0;
let computerScore = 0;

//getHumanChoice() receives the player's choice as the user input
function getHumanChoice() {
  const choice = prompt("Choice rock, paper, or scissors.:");
  return choice;
}

//getComputerChoice() randomly chooses an option for the computer as a
//1 out of 3 chance for all options
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

//Tomorrow, make a function to simulate a round between player and
//computer by comparing their choices.