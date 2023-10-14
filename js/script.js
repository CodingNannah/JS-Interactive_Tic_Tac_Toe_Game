// create X & Circle classes
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

// create class for all winning combinations as arrays in an array
const WINNING_COMBINATIONS = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]
];

// select all html cell elements & the board
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const restartButton = document.getElementById("restartButton");
let circleTurn;

// Call startGame at the Beginning
startGame();

restartButton.addEventListener("click", startGame);


function startGame() {
    // first turn is X's
    circleTurn = false;
    // loop through them
    cellElements.forEach(cell => {
    // cleaning house for restart
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener ("click", handleClick, {once: true});
        // add event listener
        cell.addEventListener("click", handleClick, {once: true});
        // NOTE {once: true} handles the click per box one time; prevents overwriting
})
    setBoardHoverClass();
    // wipe the board to start again
    winningMessageElement.classList.remove("show");
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    // placeMark
    placeMark(cell, currentClass);
    // checkWin
    if (checkWin(currentClass)) {
        // console.log("Winner");
        // display win message:
        endGame(false);
    // checkDraw
    } else if (isDraw()) {
        endGame(true);
    } else {
        // swapTurns
        swapTurns();
        // get Hover state - after swap turns, so correct turn is shown on hover
        setBoardHoverClass();
    }    
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Draw!"
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Win!`
    }
    winningMessageElement.classList.add("show");
}

function isDraw() {
    // cellElements does not have an every method, get around it with destructuring into an array
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass){
    // loop over all winning combinations
    return WINNING_COMBINATIONS.some(combination => {
        // make sure they all have the same class
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}