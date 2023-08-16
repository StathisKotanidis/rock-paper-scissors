
function getPlayerChoice() {

    let playerWeapon = prompt("Select your weapon!").toUpperCase();

    while (playerWeapon != 'ROCK' && playerWeapon != 'PAPER' && playerWeapon != 'SCISSORS') {

        playerWeapon = prompt("Select a valid weapon").toUpperCase();
    }
    return playerWeapon;
}

function getComputersChoice() {

    let options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * options.length)];
}

//let playerChoice = getPlayerChoice();
//let computerChoice = getComputersChoice();

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        playerPick = getPlayerChoice();
        console.log(playerPick);
        computerPick = getComputersChoice();
        console.log(computerPick);
        console.log("---------------------------------------------------")

        if (playerPick == "ROCK" && computerPick == "ROCK" || playerPick == "PAPER" && computerPick == "PAPER" || playerPick == "SCISSORS" && computerPick == "SCISSORS") {
            console.log("Its a draw");
        } else if (playerPick == "ROCK" && computerPick == "SCISSORS" || playerPick == "PAPER" && computerPick == "ROCK" || playerPick == "SCISSORS" && computerPick == "PAPER") {
            playerScore += 1;
            console.log("You won this round!");
        } else {
            computerScore += 1;
            console.log("Computer won this round :(");
        }

        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + computerScore);
        console.log("\n");

    }

    if (playerScore > computerScore) {
        console.log("Player Won!");
    } else if (computerScore > playerScore) {
        console.log("Computer won :(");
    } else {
        console.log("Its a draw..");
    }

}

console.log(game());



