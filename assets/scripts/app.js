let PLAY_ROUND = 5;
const fullGameLog = [];
let log = {};
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerInput = choices[Math.floor(Math.random() * 3)];
  return computerInput;
}

const playRound = (playerSelection, computerSelection) => {
  const win = { ROCK: "SCISSORS", PAPER: "ROCK", SCISSORS: "PAPER" };
  let result;
  if (win[playerSelection] === computerSelection) {
    result = (`You Won! ${playerSelection} Beats ${computerSelection}!`);
    log = {
      id: Math.random().toString(), result: result,
      computerChoice: computerSelection, computerScore: computerScore,
      playerChoice: playerSelection, playerScore: playerScore++
    };
    fullGameLog.push(log);
  } else if (win[computerSelection] === playerSelection) {
    result = (`You Lost! ${computerSelection} Beats ${playerSelection}!`);
    log = {
      id: Math.random().toString(), result: result,
      computerChoice: computerSelection, computerScore: computerScore++,
      playerChoice: playerSelection, playerScore: playerScore
    };
    fullGameLog.push(log);
  } else {
    result = ("You have a Draw!");
    log = {
      id: Math.random().toString(), result: result,
      computerChoice: computerSelection, computerScore: computerScore,
      playerChoice: playerSelection, playerScore: playerScore
    };
    fullGameLog.push(log);
  }
}

const game = () => {
  for (let i = 0; i < PLAY_ROUND; i++) {
    let playerSelection = window.prompt("Enter your choice:").trim().toUpperCase();
    if (playerSelection !== "ROCK" || playerSelection !== "PAPER" || playerSelection !== "SCISSORS")
      playerSelection = computerPlay();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  console.log("GAME OVER!");
  playerScore > computerScore ? console.log(`YOU WON! Computer Score: ${computerScore} Your Score: ${playerScore}`)
    : playerScore < computerScore ? console.log(`YOU LOST! Computer Score: ${computerScore} Your Score: ${playerScore}`)
      : console.log(`You have a Draw! Computer Score: ${computerScore} Your Score: ${playerScore}`);
  console.log("FULL GAME LOG:");
  console.log(fullGameLog);
}

game();
