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
    return "Not valid! Choose only Rock, Paper or Scissors!";
}
}

   
  
  function game() {
    let pointPlay = 0;
    let pointComp = 0;  
    for (let i = 0; i < 5; i++) {
      const playerSelection2 = prompt("Please enter your choice: Rock, Paper or Scissors:");
      console.log(playerSelection2);
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection2, computerSelection));
      let won = playRound(playerSelection2, computerSelection);

      switch (won) {
        case "Tie":
          console.log("Tie!");
          break;
        case "Not":
          console.log("Not valid! Choose only Rock, Paper or Scissors!");
          break;
        case "player":
          console.log("You won! " + playerSelection + " beats " + computerSelection")
          pointPlay += 1;
          break;
        case "comp":
          console.log("You lose! " + computerSelection + " beats " + playerSelection");
          pointComp += 1;
          break;
      }
      
          

      console.log(point);

    }
  }

  let winner = game();
