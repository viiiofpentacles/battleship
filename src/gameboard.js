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
        let checkArray = [];
        for (let i = 0; i < this.ships.length; i++) {
          let coordIndex = this.ships[i].coords.indexOf(coordinates);
          checkArray.push(coordIndex);
        }
        let hitCoord = checkArray.findIndex(index => index !== (-1));
            if(hitCoord == -1){
              this.missedAttacks.push(coordinates);
              return 'miss';
            } else {
            this.ships[hitCoord].coords[checkArray[hitCoord]] = 'x';
            return 'x';
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
  let shipCoords = []
  shipCoords = generateAllShipCoords();
  let shipSizes = [5, 4 ,3, 3, 2];
  for (let i = 0; i < 5; i++) {
      gameboard.placeShip(shipSizes[i], shipCoords[i]);
  }
  return shipCoords;
};

export { Gameboard, shipSetup }