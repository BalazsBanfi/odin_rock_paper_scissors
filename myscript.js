let pointPlayer = 0;
let pointComputer = 0;
let playerSelection = "";
let computerSelection = "";
const divResult = document.querySelector('#result');

// The computer choose random
function getComputerChoice() {
  let choice = "";
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
  }
  return choice;
}


// One round player vs computer
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
      return "player";
  }
  else {
    return "computer";
  }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((butt) => {
  butt.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = butt.value;
    winner = playRound(playerSelection, computerSelection);
    if (winner == "player") {
      pointPlayer++;
      divResult.textContent = 'Player won';
    }
    if (winner == "computer") {
      pointComputer++;
      divResult.textContent = 'Computer won';
    }
    
    if (winner == "tie") {
      divResult.textContent = 'Tie';
    }

    if (pointPlayer === 10) {
      divResult.textContent = 'The winner is the Player!';
      pointComputer = 0;
      pointPlayer = 0;
    }
    if (pointComputer === 10) {
      divResult.textContent = 'The winner is the Player!';
      pointComputer = 0;
      pointPlayer = 0;
    }
  })
});