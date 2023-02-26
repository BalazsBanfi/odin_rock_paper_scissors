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


function playRound(playerSelection, computerSelection) {
    // your code here!
    if ((playerSelection === "Rock") || (playerSelection === "Paper") || (playerSelection === "Scissors")) {
        
    

    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return "You won! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }
else {
    return "Not valid! Choose only Rock, Paper or Scissors!";
}
}

   
  const playerSelection2 = prompt("Please enter your choice: Rock, Paper or Scissors:");
  console.log(playerSelection2);
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection2, computerSelection));
  
  