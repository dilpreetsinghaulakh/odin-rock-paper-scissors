const getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

const btnRock = document.querySelector("#🪨");
const btnPaper = document.querySelector("#📄");
const btnScissors = document.querySelector("#✂️");

const emoji = document.querySelector("#emoji");
var emojiToPrint = "";

const printResults = document.querySelector("#result");

btnRock.addEventListener("click", () => {
  emojiToPrint += "🪨";
  playRound(0);
});

btnPaper.addEventListener("click", () => {
  emojiToPrint += "📄";
  playRound(1);
});

btnScissors.addEventListener("click", () => {
  emojiToPrint += "✂️";
  playRound(2);
});

var timesPlayed = 1;
var timesLost = 0; //It would take more lines of code to count times won. 🤫
const result = (playerSelection, computerSelection) => {
  while (emoji.childElementCount) {
    emoji.removeChild(emoji.firstChild);
  }
  var toPrint = "";

  switch (computerSelection) {
    case 0:
      emojiToPrint += " 🪨";
      break;
    case 1:
      emojiToPrint += " 📄";
      break;
    case 2:
      emojiToPrint += " ✂️";
      break;
    default:
      emojiToPrint = " ";
      break;
  }

  if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 1)
  ) {
    toPrint = "You won!";
  } else {
    toPrint = "You lost!";
    timesLost++;
  }
  const p = document.createElement("p");
  p.textContent = toPrint;
  printResults.appendChild(p);

  const h1 = document.createElement("h1");
  h1.textContent = emojiToPrint;
  emoji.append(h1);

  if (timesPlayed == 0) {
    timesLost = 0;
    emojiToPrint = "";
    emoji.removeChild(emoji.firstChild);
  }
  emojiToPrint = "";

  if (timesPlayed == 5) {
    const finalResult = document.createElement("h3");
    if (timesLost < 3) {
      finalResult.textContent = "You won form computer!";
    } else {
      finalResult.textContent = "You lost to computer!";
    }
    timesPlayed = 0;
    timesLost = 0;

    printResults.appendChild(finalResult);
  } else {
    timesPlayed++;
  }

  while (printResults.childElementCount > 6) {
    while (printResults.hasChildNodes()) {
      printResults.removeChild(printResults.firstChild);
    }
  }
};

const playRound = (playerChoice) => {
  var computerSelection = getComputerChoice();

  const playerSelection = playerChoice;

  while (playerSelection == computerSelection) {
    computerSelection = getComputerChoice();
  }
  result(playerSelection, computerSelection);

  // console.log("timesPlayed"+timesPlayed)
};

