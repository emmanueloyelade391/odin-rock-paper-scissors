//Create player and computer score and set them to 0

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

// playRound() compares the player's choice to the computer's choice and
// decides who wins. Then the scores are updated and everything is printed
// to the browser console.

function playGame() {
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("You win! Rock beats scissors.");
        playerScore++;
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
      } else if (computerChoice === "paper") {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("You lose! Paper beats rock.");
        computerScore++;
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
      } else {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("It's a tie");
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
      }
      } 
      if (humanChoice === "paper") {
        if (computerChoice === "rock") {
          console.log(`You chose: ${humanChoice}`);
          console.log(`Computer chose: ${computerChoice}`);
          console.log("You win! Paper beats rock.");
          playerScore++;
          console.log(`Your score: ${playerScore}`);
          console.log(`Computer score: ${computerScore}`);
        } else if (computerChoice === "scissors") {
          console.log(`You chose: ${humanChoice}`);
          console.log(`Computer chose: ${computerChoice}`);
          console.log("You lose! Scissors beats paper.");
          computerScore++;
          console.log(`Your score: ${playerScore}`);
          console.log(`Computer score: ${computerScore}`);
        } else {
          console.log(`You chose: ${humanChoice}`);
          console.log(`Computer chose: ${computerChoice}`);
          console.log("It's a tie");
          console.log(`Your score: ${playerScore}`);
          console.log(`Computer score: ${computerScore}`);
        }
      }

      if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
          console.log(`You chose: ${humanChoice}`);
          console.log(`Computer chose: ${computerChoice}`);
          console.log("You win! Scissors beats paper.");
          playerScore++;
          console.log(`Your score: ${playerScore}`);
          console.log(`Computer score: ${computerScore}`);
        } else if (computerChoice === "rock") {
          console.log(`You chose: ${humanChoice}`);
          console.log(`Computer chose: ${computerChoice}`);
          console.log("You lose! Rock beats scissors.");
          computerScore++;
          console.log(`Your score: ${playerScore}`);
          console.log(`Computer score: ${computerScore}`);
        } else {
          console.log(`You chose: ${humanChoice}`);
          console.log(`Computer chose: ${computerChoice}`);
          console.log("It's a tie");
          console.log(`Your score: ${playerScore}`);
          console.log(`Computer score: ${computerScore}`);
        }
      }
    }

  let playerScore = 0;
  let computerScore = 0;
  console.log(`Original player score: ${playerScore}`);
  console.log(`Original computer score: ${computerScore}`);

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (playerScore === computerScore) {
    console.log("It's an overall tie!");
  } else {
    console.log("You lose! The computer wins!");
  }
} 

playGame();