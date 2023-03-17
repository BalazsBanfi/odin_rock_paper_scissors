let pointPlayer = 0;
let pointComputer = 0;
let playerSelection = "";
let computerSelection = "";
let won = "";

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
        }
        if (winner == "computer") {
            pointComputer++;
        }

        console.log("Player: ", pointPlayer, " Computer: ", pointComputer);            

        if (pointPlayer === 10) {
            console.log("The winner is the Player, player points: ", pointPlayer, ", computer points: ", pointComputer);
            pointComputer = 0;
            pointPlayer = 0;
        }
        if (pointComputer === 10) {
            console.log("The winner is the Computer, computer points: ", pointComputer, ", player points: ", pointPlayer);
            pointComputer = 0;
            pointPlayer = 0;
        }
    })
});