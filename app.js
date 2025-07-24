//getHumanChoice() receives the player's choice as the user input
function getHumanChoice(choice) {
  const humanChoice = choice;
  return humanChoice;
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
    //humanChoice = humanChoice.toLowerCase();
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

//playGame() runs playRound() 5 times and announces the definitive 
//winner of the game after playRound() is ran 5 times.
/*function playGame() {
  // playRound() compares the player's choice to the computer's choice and
  // decides who wins. Then the scores are updated and everything is printed
  // to the browser console.
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

  //Create player and computer score and set them to 0
  let playerScore = 0;
  let computerScore = 0;
  console.log(`Original player score: ${playerScore}`);
  console.log(`Original computer score: ${computerScore}`);

  playRound(getHumanChoice(), getComputerChoice());

  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (playerScore === computerScore) {
    console.log("It's an overall tie!");
  } else {
    console.log("You lose! The computer wins!");
  }
} */

//playGame();

let counter = 0;
let playerScore = 0;
let computerScore = 0;
const updatedPlayerScore = document.querySelector("#updated-player-score");
updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
const updatedComputerScore = document.querySelector("#updated-computer-score");
updatedComputerScore.textContent = `Computer Score: ${computerScore}`;

const rock = document.querySelector("#rock");
rock.addEventListener("click", (event) => {
  const target = event.target.id
  const computerChoice = getComputerChoice();
  playRound(getHumanChoice(target), computerChoice);
  const results = document.querySelector("#results");
  if (computerChoice === "scissors") {
        results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
        console.log("You win! Rock beats scissors.");
        playerScore++;
        updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
        updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
        if (playerScore > 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          } else if (computerScore > 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          }
      } else if (computerChoice === "paper") {
        results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
        console.log("You lose! Paper beats rock.");
        computerScore++;
        updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
        updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
        if (playerScore > 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          } else if (computerScore > 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          }
      } else {
        results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
        console.log("It's a tie");
      }
  counter++;
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", (event) => {
  const target = event.target.id
  const computerChoice = getComputerChoice();
  playRound(getHumanChoice(target), getComputerChoice());
  const results = document.querySelector("#results");
  if (computerChoice === "rock") {
        results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
        console.log("You win! Paper beats rock.");
        playerScore++;
        updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
        updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
        if (playerScore > 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          } else if (computerScore > 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          }
        } else if (computerChoice === "scissors") {
        results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
        console.log("You lose! Scissors beats paper.");
        computerScore++;
        updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
        updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
        if (playerScore > 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          } else if (computerScore > 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          }
        } else {
        results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
        console.log("It's a tie");
        }
  counter++;
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", (event) => {
  const target = event.target.id
  const computerChoice = getComputerChoice();
  playRound(getHumanChoice(target), getComputerChoice());
  const results = document.querySelector("#results");
  if (computerChoice === "paper") {
          results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
          console.log("You win! Scissors beats paper.");
          playerScore++;
          updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
          updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
          if (playerScore > 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          } else if (computerScore > 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          }
        } else if (computerChoice === "rock") {
          results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
          console.log("You lose! Rock beats scissors.");
          computerScore++;
          updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
          updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
          if (playerScore > 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          } else if (computerScore > 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
          }
        } else {
          results.textContent = `You chose: ${target}. Computer chose: ${computerChoice}`;
          console.log("It's a tie");
        }
  counter++;
});