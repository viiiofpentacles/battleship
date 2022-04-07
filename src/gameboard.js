import { ShipFactory } from './ship.js';
import { generateAllShipCoords } from './shipplacement.js';;

function Gameboard() {
  return {
      ships: [],
      missedAttacks: [],
      placeShip: function(shipLength, coordinates) {
          this.ships.push(ShipFactory(shipLength, coordinates));
          return this.ships;
      },
      receiveAttack: function(coordinates) {
        for (let i in this.ships) {
          if (this.ships[i].coords.indexOf(coordinates)!== -1) {
            let hitCoords = this.ships[i].coords.indexOf(coordinates)
            return this.ships[i].coords[hitCoords] = 'x';
          } else {
            this.missedAttacks.push(coordinates);
          }
        }
      },
      checkGameOver: function() {
        for (let i in this.ships) {
          if(this.ships[i].coords.every(coord => coord === 'x') === true) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
}

function shipSetup (gameboard) {
  let shipCoords = generateAllShipCoords();
  let shipSizes = [5, 4 ,3, 3, 2];
  for (let i = 0; i < 5; i++) {
      gameboard.placeShip(shipSizes[i], shipCoords[i]);
  }
  return shipCoords;
};

export { Gameboard, shipSetup }