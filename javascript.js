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
  playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();

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

let playerScore;
let botScore;

// function that plays a series of 5 games 
function game() {
  playerScore = 0;
  botScore = 0;
  for (let i = 1; i <= 5; i++) {
    let game = playRound();
    if (game === "playerWin") {
      playerScore++
      console.log(`Player Score: ${playerScore} Bot Score: ${botScore}`)
    
    } else if (game === "botWin") {
      botScore++
      console.log(`Player Score: ${playerScore} Bot Score: ${botScore}`)
    
    } else {
      console.log(`Player Score: ${playerScore} Bot Score: ${botScore}`)
    }
  }

  // checks whether you win series, lose series, or if its a tie
  if (playerScore > botScore) {
    console.log(`You Win! Final score: ${playerScore} : ${botScore}`);
  
  } else if (playerScore < botScore) {
    console.log(`You Lose! Final score: ${playerScore} : ${botScore}`);
  
  } else if (playerScore === botScore) {
    console.log(`Tie! Final score: ${playerScore} : ${botScore}`);
  }
}

game();







