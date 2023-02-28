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
        return "Tie";
      }
      if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
          return "player";
      }
      else {
        return "comp";
      }
    }
else {
    return "Not";
}
}

 
  function game() {
    let pointPlay = 0;
    let pointComp = 0;  
    for (let i = 0; i < 5; i++) {
      const playerSelection2 = prompt("Please enter your choice: Rock, Paper or Scissors:").toLowerCase();
      const playerSelection = playerSelection2.charAt(0).toUpperCase() + playerSelection2.slice(1);
      const computerSelection = getComputerChoice();
      let won = playRound(playerSelection, computerSelection);
      console.log("Player selection: " + playerSelection + ", Computer selection: " + computerSelection);

      switch (won) {
        case "Tie":
          console.log("Tie! New turn!");
          i--;
          break;          
        case "Not":
          console.log("Not valid! Choose only Rock, Paper or Scissors! New turn!");
          i--;
          break;
        case "player":
          console.log("You won! " + playerSelection + " beats " + computerSelection);
          pointPlay += 1;
          break;
        case "comp":
          console.log("You lose! " + computerSelection + " beats " + playerSelection);
          pointComp += 1;
          break;
      }
      console.log("Round: " + (i+1) + ". Player points: " + pointPlay + " Computer points: " + pointComp);
    }
    if (pointPlay > pointComp) {
      return ("The winner is You! Player: " + pointPlay + ". Computer: " + pointComp);
    }
    else {
      return ("The winner is the Computer: " + pointComp + ". Player: " + pointPlay);
    }
  }

  let winner = console.log(game());