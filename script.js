const getComputerChoice = () => {
    return  Math.floor(Math.random() * 3);
}

const getPlayerChoice = () => {
    var playerChoice = prompt("Enter your Choice (i.e Rock, Paper or Scissors) :");

    playerChoice = playerChoice.toLowerCase();

    var numPlayerChoice = NaN;

    switch (playerChoice) {
        case "rock" :
            numPlayerChoice = 0;
            break;
        case "paper" :
            numPlayerChoice = 1;
            break;
        case "scissors" :
            numPlayerChoice = 2;
            break;
        default :
            console.log("Enter correct option");
            getPlayerChoice();
            break;
    }
    return numPlayerChoice;
}

const result = (playerSelection, computerSelection) => {
    if(playerSelection === 0 && computerSelection === 2) {
        console.log("You won");
    }

    else if(playerSelection === 1 && computerSelection === 0) {
        console.log("You won");
    }

    else if(playerSelection === 2 && computerSelection === 1) {
        console.log("You won");
    }

    else {
        console.log("You lose");
    }
}

const playRound = () => {
    var computerSelection = getComputerChoice();

    const playerSelection = getPlayerChoice();

    while(playerSelection == computerSelection) {
        computerSelection = getComputerChoice();
    }
    result(playerSelection, computerSelection);
    
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}