let player1Moves = [], player2Moves = [], playerNumber, gameInPlay = true, turns = 0;

let player1Turn = true, player2Turn = false;
function playerTurn(boxID) {
    if (!gameInPlay) return;
    if (player1Moves.includes(boxID) || player2Moves.includes(boxID)) { return; }

    if (player1Turn) {
        player1Moves.push(boxID);
        drawScore('Player1', boxID);
    } else {
        player2Moves.push(boxID);
        drawScore('Player2', boxID);
    }

    player1Turn = !player1Turn;
    player2Turn = !player2Turn;
    checkWinner();
    turns++;
    if (turns === 9 && gameInPlay) { gameInPlay = false; alert('Draw'); }
}
function checkWinner() {
    let boxes = [];
    let winnerMessage = '';

    for (let index = 0; index < 9; index++) {
        boxes.push(document.getElementById(`box_${index}`).innerHTML);
    }
    if (boxes[0] === boxes[1] && boxes[0] === boxes[2] && boxes[0] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[0] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(0, 1, 2);
    }
    if (boxes[3] === boxes[4] && boxes[3] === boxes[5] && boxes[3] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[3] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(3, 4, 5);
    }
    if (boxes[6] === boxes[7] && boxes[6] === boxes[8] && boxes[6] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[6] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(6, 7, 8);
    }
    if (boxes[0] === boxes[3] && boxes[0] === boxes[6] && boxes[0] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[0] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(0, 3, 6);
    }
    if (boxes[1] === boxes[4] && boxes[1] === boxes[7] && boxes[1] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[1] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(1, 4, 7);
    }
    if (boxes[2] === boxes[5] && boxes[2] === boxes[8] && boxes[2] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[2] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(2, 5, 8);
    }
    if (boxes[0] === boxes[4] && boxes[0] === boxes[8] && boxes[0] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[0] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(0, 4, 8);
    }
    if (boxes[2] === boxes[4] && boxes[2] === boxes[6] && boxes[2] != '-') {
        gameInPlay = false;
        winnerMessage = boxes[2] === 'X' ? 'Player 1' : 'Player 2';
        highlightWinnerBoxes(2, 4, 6);
    }

    if (winnerMessage) alert(winnerMessage + ' WON !');
}
function drawScore(playerType, boxId) {
    const box = document.getElementById(`box_${boxId}`);
    if (playerType === 'Player1') {
        box.innerHTML = 'X';
        box.style.color = '#1d19fa';
    } else {
        box.innerHTML = 'O';
        box.style.color = '#ce0909';
    }
    box.classList.remove('hoverable');
    box.style.fontSize = "5rem";
}
function highlightWinnerBoxes(id1, id2, id3) {
    const box1 = document.getElementById(`box_${id1}`);
    const box2 = document.getElementById(`box_${id2}`);
    const box3 = document.getElementById(`box_${id3}`);
    box1.style.backgroundColor = "#c0cd04";
    box2.style.backgroundColor = "#c0cd04";
    box3.style.backgroundColor = "#c0cd04";
}






