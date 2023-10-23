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
  scoreDiv.style.color = "white";

  if (playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "paper" && computerSelection === "rock" ||
      playerSelection === "scissors" && computerSelection === "paper") {
        winnerDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++
        scoreDiv.textContent = `${playerScore} : ${botScore}`;

      } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                  winnerDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                  botScore++
                  scoreDiv.textContent = `${playerScore} : ${botScore}`;
                  
                } else if (playerSelection === "rock" && computerSelection === "rock" ||
                          playerSelection === "paper" && computerSelection === "paper" ||
                          playerSelection === "scissors" && computerSelection === "scissors") {
                            winnerDiv.textContent = "Tie!";
                            scoreDiv.textContent = `${playerScore} : ${botScore}`;
                }

                if (playerScore >= 5) {
                  scoreDiv.textContent = "You Win!";
                  scoreDiv.style.color = "green";
                  playerScore = 0;
                  botScore = 0;

                } else if (botScore >= 5) {
                  scoreDiv.textContent = "You Lose!";
                  scoreDiv.style.color = "red";
                  playerScore = 0;
                  botScore = 0;
                }
}

let playerScore = 0;
let botScore = 0;

const winnerDiv = document.querySelector(".winner");
const scoreDiv = document.querySelector(".score");

const rockButton = document.querySelector(".button-container :nth-child(1)")
const paperButton = document.querySelector(".button-container :nth-child(2)")
const scissorsButton = document.querySelector(".button-container :nth-child(3)")

rockButton.addEventListener("click", () => {
  playRound("rock")
})

paperButton.addEventListener("click", () => {
  playRound("paper")
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors")
});







