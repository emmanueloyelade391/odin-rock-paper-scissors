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


//playRound compares the user's choice to the computer, displays the
//results to the screen, updates the scores, and ends the game when 
//either the user or computer gets 5 points. 
function playRound(humanChoice, computerChoice) {
    const results = document.querySelector("#results");
    const outcome = document.querySelector("#outcome");
    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        results.textContent = `You chose: ${humanChoice} > Computer chose: ${computerChoice}`;
        outcome.textContent = "You win! Rock beats scissors.";
        playerScore++;
        updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
        updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
        if (playerScore === 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
            outcome.textContent = "";
          } else if (computerScore === 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
            outcome.textContent = "";
          }
      } else if (computerChoice === "paper") {
            results.textContent = `You chose: ${humanChoice} < Computer chose: ${computerChoice}`;
            outcome.textContent = "You lose! Paper beats rock.";
            computerScore++;
            updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
            updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
        if (playerScore === 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
            outcome.textContent = "";
          } else if (computerScore === 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
            outcome.textContent = "";
          }
      } else {
        results.textContent = `You chose: ${humanChoice} = Computer chose: ${computerChoice}`;
        outcome.textContent = "It's a tie";
      }
    } 
      if (humanChoice === "paper") {
        if (computerChoice === "rock") {
          results.textContent = `You chose: ${humanChoice} > Computer chose: ${computerChoice}`;
          outcome.textContent = "You win! Paper beats rock.";
          playerScore++;
          updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
          updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
          if (playerScore === 5) {
              results.textContent = "You win the overall game! restart to play again!";
              const deleteButtons = document.querySelectorAll("button");
              deleteButtons.forEach(button => {
                button.remove();
              });
              outcome.textContent = "";
            } else if (computerScore === 5) {
              results.textContent = "You lose! The computer wins! restart to play again!";
              const deleteButtons = document.querySelectorAll("button");
              deleteButtons.forEach(button => {
                button.remove();
              });
              outcome.textContent = "";
            }
        } else if (computerChoice === "scissors") {
            results.textContent = `You chose: ${humanChoice} < Computer chose: ${computerChoice}`;
            outcome.textContent = "You lose! Scissors beats paper.";
            computerScore++;
            updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
            updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
        if (playerScore === 5) {
            results.textContent = "You win the overall game! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
            outcome.textContent = "";
          } else if (computerScore === 5) {
            results.textContent = "You lose! The computer wins! restart to play again!";
            const deleteButtons = document.querySelectorAll("button");
            deleteButtons.forEach(button => {
              button.remove();
            });
            outcome.textContent = "";
          }
      } else {
        results.textContent = `You chose: ${humanChoice} = Computer chose: ${computerChoice}`;
        outcome.textContent = "It's a tie";
      }
    }

      if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
          results.textContent = `You chose: ${humanChoice} > Computer chose: ${computerChoice}`;
          outcome.textContent = "You win! Scissors beats paper.";
          playerScore++;
          updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
          updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
          if (playerScore === 5) {
              results.textContent = "You win the overall game! restart to play again!";
              const deleteButtons = document.querySelectorAll("button");
              deleteButtons.forEach(button => {
                button.remove();
              });
              outcome.textContent = "";
            } else if (computerScore === 5) {
              results.textContent = "You lose! The computer wins! restart to play again!";
              const deleteButtons = document.querySelectorAll("button");
              deleteButtons.forEach(button => {
                button.remove();
              });
              outcome.textContent = "";
            }
        } else if (computerChoice === "rock") {
            results.textContent = `You chose: ${humanChoice} < Computer chose: ${computerChoice}`;
            outcome.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
            updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
            updatedComputerScore.textContent = `Computer Score: ${computerScore}`;
            if (playerScore === 5) {
              results.textContent = "You win the overall game! restart to play again!";
              const deleteButtons = document.querySelectorAll("button");
              deleteButtons.forEach(button => {
                button.remove();
              });
              outcome.textContent = "";
            } else if (computerScore === 5) {
              results.textContent = "You lose! The computer wins! restart to play again!";
              const deleteButtons = document.querySelectorAll("button");
              deleteButtons.forEach(button => {
                button.remove();
              });
              outcome.textContent = "";
            }
        } else {
          results.textContent = `You chose: ${humanChoice} = Computer chose: ${computerChoice}`;
          outcome.textContent = "It's a tie";
        }
    }
}

//playerScore and computerScore initialize the score.
//updatedPlayerScore and updatedComputerScore display the scores
//to the web page.
let playerScore = 0;
let computerScore = 0;
const updatedPlayerScore = document.querySelector("#updated-player-score");
updatedPlayerScore.textContent = `Player Score: ${playerScore}`;
const updatedComputerScore = document.querySelector("#updated-computer-score");
updatedComputerScore.textContent = `Computer Score: ${computerScore}`;


//rock stores a reference to the button with the rock id.
//When the rock button is clicked, it stores the user's choice and 
//computer's choice and calls the playRound function. 
const rock = document.querySelector("#rock");
rock.addEventListener("click", (event) => {
  const target = event.target.id
  const computerChoice = getComputerChoice();
  playRound(target, computerChoice);
});

//paper stores a reference to the button with the paper id.
//When the paper button is clicked, it stores the user's choice and 
//computer's choice and calls the playRound function. 
const paper = document.querySelector("#paper");
paper.addEventListener("click", (event) => {
  const target = event.target.id
  const computerChoice = getComputerChoice();
  playRound(target, computerChoice);
});

//scissors stores a reference to the button with the scissors id.
//When the scissors button is clicked, it stores the user's choice and 
//computer's choice and calls the playRound function. 
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", (event) => {
  const target = event.target.id
  const computerChoice = getComputerChoice();
  playRound(target, computerChoice);
});