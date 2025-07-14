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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("You win! Rock beats scissors.");
      playerScore++;
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else if (computerChoice === "paper") {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("You lose! Paper beats rock.");
      computerScore++;
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("It's a tie");
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    }
  } 
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("You win! Paper beats rock.");
      playerScore++;
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else if (computerChoice === "scissors") {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("You lose! Scissors beats paper.");
      computerScore++;
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("It's a tie");
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("You win! Scissors beats paper.");
      playerScore++;
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else if (computerChoice === "rock") {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("You lose! Rock beats scissors.");
      computerScore++;
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else {
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log("It's a tie");
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    }
  }
}

function playGame(human, computer) {
  playRound(human, computer);
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human, computer);
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human, computer);
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human, computer);
  human = getHumanChoice();
  computer = getComputerChoice();
  playRound(human, computer);
}

let humanSelection = getHumanChoice(); 

let computerSelection = getComputerChoice();

console.log(`Original player score: ${playerScore}`);
console.log(`Original computer score: ${computerScore}`);

playGame(humanSelection, computerSelection);