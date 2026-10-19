
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");

const player1Box = document.getElementById("player1");
const player2Box = document.getElementById("player2");

const turnDisplay = document.getElementById("turn");
const resultDisplay = document.getElementById("result");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const winningScore = 50;

let scores = [0, 0];
let currentPlayer = 0;
let gameOver = false;

rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);

function rollDice() {
    if (gameOver) return;

    const number = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 0) {
        dice1.textContent = diceFaces[number - 1];
        scores[0] += number;
        score1Display.textContent = scores[0];
    } else {
        dice2.textContent = diceFaces[number - 1];
        scores[1] += number;
        score2Display.textContent = scores[1];
    }

    resultDisplay.textContent =
        `Player ${currentPlayer + 1} rolled ${number}!`;

    if (scores[currentPlayer] >= winningScore) {
        gameOver = true;

        turnDisplay.textContent =
            `🏆 Player ${currentPlayer + 1} Wins!`;

        resultDisplay.textContent =
            `Congratulations! You reached ${scores[currentPlayer]} points.`;

        rollBtn.disabled = true;
        return;
    }

    currentPlayer = currentPlayer === 0 ? 1 : 0;

    updateTurn();
}

function updateTurn() {
    player1Box.classList.toggle("active", currentPlayer === 0);
    player2Box.classList.toggle("active", currentPlayer === 1);

    turnDisplay.textContent =
        `Player ${currentPlayer + 1}'s turn!`;
}

function resetGame() {
    scores = [0, 0];
    currentPlayer = 0;
    gameOver = false;

    dice1.textContent = "⚄";
    dice2.textContent = "⚄";

    score1Display.textContent = "0";
    score2Display.textContent = "0";

    resultDisplay.textContent = "Roll the dice to start!";

    rollBtn.disabled = false;

    updateTurn();
}
