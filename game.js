//initialize global variables
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let roundCount = 0;

function computerPlay(){ //generates a random play for the computer
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice == 1){
        document.getElementById("computerChose").innerHTML = "Computer Chose: rock";
        return 'rock';
    }
    if (randomChoice == 2 ){
        document.getElementById("computerChose").innerHTML = "Computer Chose: paper";
        return 'paper';
    }
    if (randomChoice == 3){
        document.getElementById("computerChose").innerHTML = "Computer Chose: scissors";
        return 'scissors';
    }
}

function playRound(){
    computerSelection = computerPlay();
    document.getElementById("playerChose").innerHTML = "Player Chose: " + playerSelection;
    determineWinner();
    checkForWinner();
}

function determineWinner(){
    if ((playerSelection == 'rock' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'scissors')){
            document.getElementById("results").innerHTML = "Round Results: It's a Tie!";
        }
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection== "paper" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "rock")){
                document.getElementById("results").innerHTML = "Round Results: You lose!";
                computerWins++;
                document.getElementById("computerWins").innerHTML = "Computer Wins: " + computerWins;
                roundCount++;
                }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper") && (computerSelection == "rock") ||
            (playerSelection == "scissors") && (computerSelection == "paper")){
                document.getElementById("results").innerHTML = "Round Results: You Win!";
                playerWins++;
                document.getElementById("playerWins").innerHTML = "Player Wins: " + playerWins;
                roundCount++;
            }
}

function resetGame(){
    playerWins = 0;
    computerWins = 0;
    roundCount = 0;
    document.getElementById("playerWins").innerHTML = "Player Wins: " + playerWins;
    document.getElementById("computerWins").innerHTML = "Computer Wins: " + computerWins;
    document.getElementById("results").innerHTML = "Round Results: ";
    document.getElementById("playerChose").innerHTML = "Player Chose: ";
    document.getElementById("computerChose").innerHTML = "Computer Chose: ";
    document.getElementById("gameResults").innerHTML = "";
}

function checkForWinner(){
    if(roundCount == 5){
        if (computerWins < playerWins){
            alert("You won the game!");
            resetGame();
        }
        else {
            alert("Sorry, you lose the game.");
            resetGame();
        }
    }
}

const buttons = document.querySelectorAll(".playerChoice");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        playRound();
    });
});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    resetGame();
})