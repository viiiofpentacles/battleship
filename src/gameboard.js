import { ShipFactory } from './ship.js'

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

export { Gameboard }