let pointPlayer = 0;
let pointComputer = 0;
let playerSelection = "";
let computerSelection = "";
const divResult = document.querySelector('#result');
let resultText = "";

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
    if (pointPlayer === 0 && pointComputer === 0) {
      divResult.innerHTML = "";
    }
    computerSelection = getComputerChoice();
    playerSelection = butt.value;
    winner = playRound(playerSelection, computerSelection);
    if (winner == "player") {
      pointPlayer++;
      resultText = document.createElement('p');
      resultText.innerHTML = "Player: " + playerSelection + " beats Computer: " + computerSelection + ". Player won! Player points: " + pointPlayer + ", Computer points: " + pointComputer;
      divResult.appendChild(resultText);
    }
    if (winner == "computer") {
      pointComputer++;
      resultText = document.createElement('p');
      resultText.innerHTML = "Computer: " + computerSelection + " beats Player: " + playerSelection + ". Computer won! Player points: " + pointPlayer + ", Computer points: " + pointComputer;
      divResult.appendChild(resultText);
    }
    
    if (winner == "tie") {
      resultText = document.createElement('p');
      resultText.innerHTML = "Player and Computer: " + playerSelection + ". Tie! Player points: " + pointPlayer + ", Computer points: " + pointComputer;
      divResult.appendChild(resultText);
    }

    if (pointPlayer === 5) {
      resultText = document.createElement('p');
      resultText.innerHTML = "The winner is the Player! Player points: " + pointPlayer + ", Computer points: " + pointComputer;
      resultText.style.color = "red";
      divResult.appendChild(resultText);
      pointComputer = 0;
      pointPlayer = 0;
    }
    if (pointComputer === 5) {
      resultText = document.createElement('p');
      resultText.innerHTML = "The winner is the Computer! Player points: " + pointPlayer + ", Computer points: " + pointComputer;
      resultText.style.color = "red";
      divResult.appendChild(resultText);
      pointComputer = 0;
      pointPlayer = 0;
    }
  })
});