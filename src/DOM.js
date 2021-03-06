import { shipSetup } from './gameboard.js';

function updateUserShipDisplay (coords) {
      for (let i = 0; i < coords.length; i++) {
          coords[i].forEach(coord => {
              const square = document.getElementsByClassName(`square user ${coord}`);
              square[0].style.backgroundColor = '#483d8b';
          });
      }
};

function resetButton (gameboard) {
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.user');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    })
    gameboard.ships = [];
    const shipCoords = shipSetup(gameboard);
    updateUserShipDisplay(shipCoords);
})
};

function startGameButton (gameboard, computerPlayer, playerBoard) {
    const beginButton = document.getElementById('begin-button');
    beginButton.addEventListener('click', () => {
        document.getElementById('instructions').textContent = 'Your turn! Click on a square on the opponent\'s grid to begin.';
        const resetButton = document.getElementById('reset-button');
        resetButton.disabled = true;
        let compSquares = document.querySelectorAll('.comp')
        compSquares.forEach(square => {
            const coord = square.className.split(' ')[2];
            square.addEventListener('click', () => {
                attackLoop(coord, gameboard, computerPlayer, playerBoard)
            });
        });
        beginButton.disabled = true;
    });
};

function attackLoop (coord, computerBoard, computerPlayer, playerBoard) {
    let attackOutcome = computerBoard.receiveAttack(coord);
    let square = document.getElementsByClassName(`square comp ${coord}`);
    if (attackOutcome == 'x') {
        square[0].textContent ='❌';
        square[0].style.backgroundColor = '#000067';
        square[0].classList.add('noclick');
        checkGameOverMessage(playerBoard, computerBoard);
    } else {
        document.getElementById('instructions').textContent = 'Miss!';
        square[0].textContent ='●';
        square[0].style.backgroundColor = '#a6a6a6';
        square[0].classList.add('noclick');
        computerTurn(computerPlayer, playerBoard, computerBoard);
    }
};

function computerTurn (computerPlayer, userGameboard, computerBoard) {
    document.getElementById('instructions').textContent = 'Opponent\'s turn...';
    let coord = computerPlayer.attack();
    let attackOutcome = userGameboard.receiveAttack(coord);
    updateAttackDisplay(attackOutcome, coord, 'user');
    checkGameOverMessage(userGameboard, computerBoard);
    let nextAttack = false;
    if(attackOutcome === 'x') {
        nextAttack = true;
    }
    while (nextAttack === true) {
        coord = computerPlayer.attack();
        attackOutcome = userGameboard.receiveAttack(coord);
        updateAttackDisplay(attackOutcome, coord, 'user');
        checkGameOverMessage(userGameboard, computerBoard);
        if (attackOutcome !== 'x') {
            updateAttackDisplay(attackOutcome, coord, 'user');
            nextAttack = false;
            break;
        }
    }
}

function updateAttackDisplay(attackOutcome, coords, user) {
    let square = document.getElementsByClassName(`square ${user} ${coords}`);
    if (attackOutcome == 'x') {
        square[0].textContent = '❌';
        square[0].style.backgroundColor = '#000067';
        square[0].classList.add('noclick');
    } else {
        square[0].textContent = '●';
        square[0].style.backgroundColor = '#a6a6a6';
        square[0].classList.add('noclick');
    }
}

function checkGameOverMessage(playerBoard, computerBoard) {
    let playerResult = playerBoard.checkGameOver();
    let computerResult = computerBoard.checkGameOver();
    if (playerResult === true || computerResult === true) {
        let compSquares = document.querySelectorAll('.comp');
        compSquares.forEach(square => {
            square.classList.add('noclick');
            });
        if (playerResult === true) {
            document.getElementById('instructions').textContent = 'Game Over! You lose! Refresh the page to play again.';
        } else if (computerResult === true) {
            document.getElementById('instructions').textContent = 'Game Over! You win! Refresh the page to play again.';
    } 
    } else {
        document.getElementById('instructions').textContent = 'You get another turn.';
    }
}

export { updateUserShipDisplay, resetButton, startGameButton }

