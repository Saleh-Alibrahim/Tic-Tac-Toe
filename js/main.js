const PLAYER_MOVE = 'X';
const COMPUTER_MOVE = 'O';

const boxList = document.querySelectorAll('.box');

let winningBoxs = [];

let gameOn = true;

const WINNING_MOVES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function playerTurn(event) {
  const box = event.target;

  if (!gameOn) {
    return;
  }

  if (!box.classList.contains('empty')) {
    return;
  }

  drawScore(PLAYER_MOVE, box);

  if (checkWin(PLAYER_MOVE)) {
    highlightWinningBoxs(PLAYER_MOVE);
  }

  if (gameOn) {
    computerTurn();
  }
}

function computerTurn() {
  const avilableMoves = document.querySelectorAll('.empty');

  const randomBox =
    avilableMoves[Math.floor(Math.random() * avilableMoves.length)];

  drawScore(COMPUTER_MOVE, randomBox);

  if (checkWin(COMPUTER_MOVE)) {
    highlightWinningBoxs(COMPUTER_MOVE);
  }
}

function drawScore(currentMove, box) {
  box.innerHTML = currentMove;
  box.classList.add(currentMove);
  box.classList.remove('empty');
}

function highlightWinningBoxs(currentMove) {
  winningBoxs.forEach((index) => {
    boxList[index].classList.add('winning-box');
  });

  gameOn = false;

  setTimeout(() => {
    alert(currentMove + ' Won !');
  }, 0);
}

function checkWin(currentMove) {
  return WINNING_MOVES.some((moves) => {
    winningBoxs = moves;
    return moves.every((index) => {
      return boxList[index].classList.contains(currentMove);
    });
  });
}

boxList.forEach((box) => {
  box.addEventListener('click', playerTurn);
});
