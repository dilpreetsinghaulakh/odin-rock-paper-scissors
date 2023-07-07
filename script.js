// We use Math.random() to generate random number between 0 and 2 inclusive.
// Then to get non decimal number we use Math.floor().
const getComputerChoice = () => {
    return  Math.floor(Math.random() * 3);
}

const rock = document.querySelector('#🪨');
const paper = document.querySelector('#📄');
const scissors = document.querySelector('#✂️');

const printResults = document.querySelector('#result');

rock.addEventListener('click', () => {playRound(0)});

paper.addEventListener('click', () => {playRound(1)});

scissors.addEventListener('click', () => {playRound(2)});

var timesPlayed = 1;
var timesLost = 0; //It would take more lines of code to count times won. 🤫
const result = (playerSelection, computerSelection) => {
    var toPrint = "";
    
    if(playerSelection === 0 && computerSelection === 2) {
        // console.log("You won");
        toPrint = "You won!";
    }

    else if(playerSelection === 1 && computerSelection === 0) {
        // console.log("You won");
        toPrint = "You won!";
    }

    else if(playerSelection === 2 && computerSelection === 1) {
        // console.log("You won");
        toPrint = "You won!";
    }

    else {
        // console.log("You lose");
        toPrint = "You lost!";
        timesLost++;
    }
    const p = document.createElement('p');
    p.textContent = toPrint;
    printResults.appendChild(p);

    if (timesPlayed > 4) {
        const finalResult = document.createElement('h3');
        if (timesLost < 3) {
            finalResult.textContent = "You won form computer!";
        }
        else{
            finalResult.textContent = "You lost to computer!";
        }
        timesPlayed = 0;
        timesLost = 0;
        printResults.appendChild(finalResult);
    }
    else{
        timesPlayed++;
    }

    while (printResults.childElementCount > 6 ){
        while (printResults.hasChildNodes()) {
            printResults.removeChild(printResults.firstChild);
        }
    }
}



const playRound = (playerChoice) => {

    var computerSelection = getComputerChoice();

    const playerSelection = playerChoice;

    while(playerSelection == computerSelection) {
        computerSelection = getComputerChoice();
    }
    result(playerSelection, computerSelection);
    
    // console.log("timesPlayed"+timesPlayed)
}
