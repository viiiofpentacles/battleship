import { generateAllShipCoords } from './shipplacement.js';

function shipSetup (gameboard) {
    let shipCoords = generateAllShipCoords();
    let shipSizes = [5, 4 ,3, 3, 2];
    for (let i = 0; i < 5; i++) {
        gameboard.placeShip(shipSizes[i], shipCoords[i]);
    }
    return shipCoords;
};

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
    console.log(gameboard.ships)
})
};

function startGameButton () {
};

function updateAttackDisplay(gameboard) {
}

function attackLoop () {
};

export { shipSetup, updateUserShipDisplay, resetButton }

