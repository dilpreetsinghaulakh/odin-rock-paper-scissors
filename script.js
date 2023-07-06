// We use Math.random() to generate random number between 0 and 2 inclusive.
// Then to get non decimal number we use Math.floor().
const getComputerChoice = () => {
    return  Math.floor(Math.random() * 3);
}

// To get player's choice we prompt() and then convert it to lower case so that any capitalization works.
// Then we create a new variable to store player's choice as number. 
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

// To determine result we use game logic and console.log() it.
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

// This function first get computer's selection,
// then it takes player's selection.
// If player's selection and computer's selection are same then,
// we use a while() loop to get new computer's choice until it is different.
// After this we pass both selections as arguments of result() function.
const playRound = () => {
    var computerSelection = getComputerChoice();

    const playerSelection = getPlayerChoice();

    while(playerSelection == computerSelection) {
        computerSelection = getComputerChoice();
    }
    result(playerSelection, computerSelection);
    
}

// This function just play game five times
const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}