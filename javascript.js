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