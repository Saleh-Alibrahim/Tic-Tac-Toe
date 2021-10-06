const PLAYER_MOVE = 'X', COMPUTER_MOVE = 'O';

const WINNING_COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const boxList = document.querySelectorAll('.box');
let gameInPlay = true, winningCombination;



function playerTurn({ target: box }) {
    if (!gameInPlay) return;
    if (!box.classList.contains('empty')) return;

    drawScore(PLAYER_MOVE, box);

    if (checkWin(PLAYER_MOVE)) {
        gameInPlay = false;
        highlightWinnerBoxes(PLAYER_MOVE);
    }
    if (gameInPlay && checkDraw()) { gameInPlay = false; alert('Draw'); }
    if (gameInPlay) { computerTurn(); }
}
function computerTurn() {
    const availableMoves = document.querySelectorAll(".empty");

    const randomBox = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    drawScore(COMPUTER_MOVE, randomBox);
    if (checkWin(COMPUTER_MOVE)) {
        gameInPlay = false;
        highlightWinnerBoxes(COMPUTER_MOVE);
    }

}
function checkWin(currentMove) {
    return WINNING_COMBINATIONS.some(combination => {
        winningCombination = combination;
        return combination.every(index => {
            return boxList[index].classList.contains(currentMove);
        })
    })
}
function checkDraw() {
    const availableMoves = document.querySelectorAll(".empty");

    return availableMoves.length === 0;
}
function drawScore(currentMove, box) {
    box.innerHTML = currentMove;
    box.classList.add(currentMove);
    box.classList.remove('empty');
}
function highlightWinnerBoxes(currentMove) {
    const box1 = document.getElementById(`box_${winningCombination[0]}`);
    const box2 = document.getElementById(`box_${winningCombination[1]}`);
    const box3 = document.getElementById(`box_${winningCombination[2]}`);
    box1.classList.add('winning-box');
    box2.classList.add('winning-box');
    box3.classList.add('winning-box');
    alert(currentMove + ' Won !')
}
boxList.forEach(box => {
    box.addEventListener('click', playerTurn)
})
