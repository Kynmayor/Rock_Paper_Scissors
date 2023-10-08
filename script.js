let computerChoice = '';
let result = '';
let Tie = 0;
let Win = 0;
let Lose = 0;

function Choices() {
    const randomNumber = Math.random();

    if (randomNumber>=0 && randomNumber<1/3) {
        computerChoice = 'rock';
    } else if (randomNumber>=1/3 && randomNumber<2/3) {
        computerChoice = 'paper';
    } else if (randomNumber>=2/3 && randomNumber<=1) {
        computerChoice = 'scissors';
    }
}

function rockResults() {


    if (computerChoice === 'rock') {
        result = 'Tie';
    } else if (computerChoice == 'paper') {
        result = 'You Lose';
    } else if (computerChoice == 'scissors') {
        result = 'You Win';
    }

    document.getElementById("verdict").innerHTML = `You choose ROCK, computer choose ${computerChoice.toUpperCase()}. ${result}.`

}

function paperResults() {

    if (computerChoice === 'paper') {
        result = 'Tie';
    } else if (computerChoice === 'rock') {
        result = 'You Win';
    } else if (computerChoice === 'scissors') {
        result = 'You Lose';
    }

    document.getElementById("verdict").innerHTML = `You choose PAPER, computer choose ${computerChoice.toUpperCase()}. ${result}.`

}

function scissorsResults() {


    if (computerChoice === 'scissors') {
        result = 'Tie';
    } else if (computerChoice === 'paper') {
        result = 'You Win';
    } else if (computerChoice === 'rock') {
        result = 'You Lose';
    }

    document.getElementById("verdict").innerHTML = `You choose SCISSORS, computer choose ${computerChoice.toUpperCase()}. ${result}.`
}

function cumulativeResults() {
    if (result === "Tie") {
        Tie+= 1;
        document.getElementById("tie").innerHTML = Tie;
    } else if (result === "You Win") {
        Win+= 1;
        document.getElementById("win").innerHTML =Win;

    } else if (result === "You Lose") {
        Lose+= 1;
        document.getElementById("lose").innerHTML = Lose;

    }
}

function resetButton() {
    Tie = 0;
    Win = 0;
    Lose = 0;
    document.getElementById("tie").innerHTML = Tie;
    document.getElementById("win").innerHTML = Win;
    document.getElementById("lose").innerHTML = Lose;
    document.getElementById("verdict").innerHTML = "";
}