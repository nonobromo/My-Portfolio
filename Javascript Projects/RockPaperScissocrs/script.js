const choices = ['rock', 'paper', 'scsissors'];

const player = document.getElementById("player");
const computer = document.getElementById("computer");
const gameResult = document.getElementById("result");

function playGame(playerChoice) {

    const computerChose = Math.floor(Math.random() * choices.length);

    let indexComptuer = choices[computerChose];

    console.log(playerChoice);
    console.log(choices[computerChose]);

    let result = "";

    if (playerChoice === indexComptuer) {
        result = "its a tie!";
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (indexComptuer === 'scsissors') ? "You win" : "You lose";
                break;
            case 'paper':
                result = (indexComptuer === "rock") ? "You win" : "You Lose";
                break;
            case 'scsissors':
                result = (indexComptuer = "paper") ? "You Win" : "You Lose";
        }
    }
    gameResult.innerHTML = result;
    player.innerHTML = `Player: ${playerChoice}`;
    computer.innerHTML = `Computer: ${indexComptuer}`;
};

