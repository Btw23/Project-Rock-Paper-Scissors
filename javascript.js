// function that randomly chooses rock, paper or scissors
function getComputerChoice() {
  let choiceNumber = Math.floor(Math.random() * 3 + 1);
  if (choiceNumber === 1) {
    return "rock";
  } else if (choiceNumber === 2) {
    return "paper";
  } else if (choiceNumber === 3) {
    return "scissors";
  }
}


// function to play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "paper" && computerSelection === "rock" ||
      playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "playerWin";

      } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                  console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                  return "botWin"
                  
                } else if (playerSelection === "rock" && computerSelection === "rock" ||
                          playerSelection === "paper" && computerSelection === "paper" ||
                          playerSelection === "scissors" && computerSelection === "scissors") {
                            console.log("Tie!");

                } else {
                  console.log("Wrong Input!");
                }
}
let playerSelection;
let playerScore;
let botScore;

const rockButton = document.querySelector(".button-container :nth-child(1)")
const paperButton = document.querySelector(".button-container :nth-child(2)")
const scissorsButton = document.querySelector(".button-container :nth-child(3)")

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));







