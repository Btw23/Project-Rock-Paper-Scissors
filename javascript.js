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
  playerSelection = prompt("Choose rock, paper or scissors");
  if (playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "paper" && computerSelection === "rock" ||
      playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

      } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                  return `You Lose! ${computerSelection} beats ${playerSelection}`;
                  
                } else if (playerSelection === "rock" && computerSelection === "rock" ||
                          playerSelection === "paper" && computerSelection === "paper" ||
                          playerSelection === "scissors" && computerSelection === "scissors") {
                            return "Tie!"

                } else {
                  return "Wrong Input!"
                }
}

let computerSelection
let playerSelection 



