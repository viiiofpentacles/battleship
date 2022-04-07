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
    console.log(shipCoords);
    updateUserShipDisplay(shipCoords);
})
};

function startGameButton () {
};

function updateAttackDisplay(gameboard) {
}

function attackLoop () {
};

export { updateUserShipDisplay, resetButton }

