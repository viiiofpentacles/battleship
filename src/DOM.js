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

function startGameButton (player, gameboard, computerPlayer, playerBoard) {
    const beginButton = document.getElementById('begin-button');
    beginButton.addEventListener('click', () => {
        document.getElementById('instructions').textContent = 'Your turn! Click on a square on the opponent\'s grid to begin.';
        const resetButton = document.getElementById('reset-button');
        resetButton.disabled = true;
        let compSquares = document.querySelectorAll('.comp')
        compSquares.forEach(square => {
            const coord = square.className.split(' ')[2];
            square.addEventListener('click', () => {
                attackLoop(coord, player, gameboard, computerPlayer, playerBoard)
            });
        });
        beginButton.disabled = true;
    });
};

function attackLoop (coord, player, gameboard, computerPlayer, playerBoard) {
    player.attack(coord);
    let attackOutcome = gameboard.receiveAttack(coord);
    let square = document.getElementsByClassName(`square comp ${coord}`);
    if (attackOutcome == 'x') {
        square[0].textContent ='❌';
        square[0].style.backgroundColor = '#000067';
        square[0].classList.add('noclick');
        let checkGameOver = gameboard.checkGameOver();
        if (checkGameOver == true) {
            gameOver(player);
        } else {
            document.getElementById('instructions').textContent = 'Score! You get another turn.';
        }
    } else {
        document.getElementById('instructions').textContent = 'Miss!';
        square[0].textContent ='●';
        square[0].style.backgroundColor = '#a6a6a6';
        square[0].classList.add('noclick');
        computerTurn(computerPlayer, playerBoard);
    }
};

function computerTurn (player, gameboard) {
    let coords = player.attack();
    let attackOutcome = gameboard.receiveAttack(coords);
    updateAttackDisplay(gameboard);
    while (attackOutcome === 'x') {
        coords = player.attack();
        attackOutcome = gameboard.receiveAttack(coords);
        if (attackOutcome !== 'x') {
            break;
        }
    }
}

function updateAttackDisplay(gameboard) {
    //accesses gameboard's ships and miss to display results. bgcolor THEN textcontent
}

function gameOver(player) {
    document.getElementById('instructions').textContent = 'Game Over! You win! Refresh the page to play again.'
    //add fn to disable clicking
}

export { updateUserShipDisplay, resetButton, startGameButton }

