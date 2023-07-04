const getComputerChoice = () => {
    return  Math.floor(Math.random() * 3);
}

const getPlayerChoice = () => {
    var playerChoice = prompt("Enter your Choice (i.e Rock, Paper or Scissors) :");

    playerChoice = playerChoice.toLowerCase();

    var numPlayerChoice = -1;

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
            break;
    }
    return numPlayerChoice;
}

const playRound = () => {
    var computerSelection = getComputerChoice();

    const playerSelection = getPlayerChoice();

    if (playerSelection === computerSelection) {
        console.log("Draw");
    }

    else if(playerSelection === 0 && computerSelection === 2) {
        console.log("You won")
    }

    else if(playerSelection === 1 && computerSelection === 0) {
        console.log("You won")
    }

    else if(playerSelection === 2 && computerSelection === 1) {
        console.log("You won")
    }

    else {
        console.log("You lose")
    }
}

const test = () => {
    playRound();
}