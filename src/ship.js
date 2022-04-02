function ShipFactory(length, coords) {
    return {length,
            coords,
            hit: function(coordinate) {
              const hitCoord = this.coords.indexOf(coordinate);
              this.coords[hitCoord] = 'x';
              return this.coords;
            },
            isSunk: function() {
              if ((this.coords.filter(coord => coord === 'x').length) === this.length) {
                return true;
              } return false
            }
    }
}

export { ShipFactory }
