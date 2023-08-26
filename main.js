let option1 = document.querySelector('#fist')
let option2 = document.querySelector('#scissors')
let option3 = document.querySelector('#hand')
let update = document.querySelector('#score-update')
let plScore = document.querySelector('#player-score')
let compScore = document.querySelector('#computer-score')
let winner = document.querySelector('#winner')
let isgameOver = false;

function getComputersChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"]
    return options[Math.floor(Math.random() * options.length)]
}

function game(playerChoice) {

    let computerChoice = getComputersChoice()

    if (playerChoice === computerChoice) {
        update.textContent = `It's a draw. You chose ${playerChoice}, computer chose ${computerChoice}`
    } else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        plScore.textContent = parseInt(plScore.textContent) + 1
        update.textContent = `You won this round! You chose ${playerChoice}, computer chose ${computerChoice}`

    } else {
        compScore.textContent = parseInt(compScore.textContent) + 1
        update.textContent = `Computer won this round. You chose ${playerChoice}, computer chose ${computerChoice}`

    }

    if (parseInt(plScore.textContent) == 5) {
        winner.textContent = "Congratulations, you won!"
        setTimeout(newGame, 100);

    } else if (parseInt(compScore.textContent) == 5) {

        winner.textContent = "Computer won!"
        setTimeout(newGame, 100);
    }
}

function getPlayerChoice(event) {

    let playerChoice;
    if (event.target === option1) {
        playerChoice = 'ROCK';
    } else if (event.target === option2) {
        playerChoice = 'SCISSORS';
    } else if (event.target === option3) {
        playerChoice = 'PAPER';
    } else {
        console.log('Invalid pick');
        return;
    }
    game(playerChoice);
}

function newGame() {

    let confirmation = confirm('New game?')

    if (confirmation == true) {
        plScore.textContent = '0'
        compScore.textContent = '0'
        winner.textContent = ' '
        update.textContent = ' '
    } else {
        window.close()
    }
}
option1.addEventListener('click', getPlayerChoice)
option2.addEventListener('click', getPlayerChoice)
option3.addEventListener('click', getPlayerChoice)




