let PLAY_ROUND = 5;
let playerScore = 0;
let computerScore = 0;
let result;
let i;
let log = {};
const fullGameLog = [];

const computerPlay = () => {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerInput = choices[Math.floor(Math.random() * 3)];
  return computerInput;
}

const playRound = (playerSelection, computerSelection) => {
  const win = { ROCK: "SCISSORS", PAPER: "ROCK", SCISSORS: "PAPER" };
  if (win[playerSelection] === computerSelection) {
    result = (`You Won! ${playerSelection} Beats ${computerSelection}!`);
    log = {
      id: i,
      result: result,
      computerChoice: computerSelection,
      computerScore: computerScore,
      playerChoice: playerSelection,
      playerScore: playerScore++
    };
    fullGameLog.push(log);
  } else if (win[computerSelection] === playerSelection) {
    result = (`You Lost! ${computerSelection} Beats ${playerSelection}!`);
    log = {
      id: i,
      result: result,
      computerChoice: computerSelection,
      computerScore: computerScore++,
      playerChoice: playerSelection,
      playerScore: playerScore
    };
    fullGameLog.push(log);
  } else {
    result = ("You have a Draw!");
    log = {
      id: i,
      result: result,
      computerChoice: computerSelection,
      computerScore: computerScore,
      playerChoice: playerSelection,
      playerScore: playerScore
    };
    fullGameLog.push(log);
  }
  return result;
}

const game = () => {
  console.log(`GAME STARTED!`);
  for (i = 1; i <= PLAY_ROUND; i++) {
    let playerSelection = window.prompt("Enter your choice: (Rock, Paper, Scissors).");
    if (playerSelection !== null) {
      playerSelection = playerSelection.trim().toUpperCase();
    } else if (playerSelection === null) {
      playerSelection = 'cancel';
    }

    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      console.log(`Round ${i}: ${result}`);
    } else {
      PLAY_ROUND++;
      if (playerSelection === "") {
        playerSelection = 'nothing';
      }
      window.alert(`You selected ${playerSelection}! Please enter a correct choice! (Rock, Paper, Scissors).`);
    }
  }
  console.log("GAME OVER!");
  playerScore > computerScore ? console.log(`YOU WON! Computer Score: ${computerScore} Your Score: ${playerScore}`)
    : playerScore < computerScore ? console.log(`YOU LOST! Computer Score: ${computerScore} Your Score: ${playerScore}`)
      : console.log(`You have a Draw! Computer Score: ${computerScore} Your Score: ${playerScore}`);
  console.log('FULL GAME LOG:\n', fullGameLog);
}

game();
