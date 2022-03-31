function ShipFactory(length, coords) {
    return {length,
            coords,
            hit: function(coordinate) {
              const hitCoord = this.coords.indexOf(coordinate);
              return this.coords[hitCoord] = 'x';
            },
            isSunk: function() {
              if ((coords.filter((v => v === 'x').length) === this.length)) {
                return true;
              } false
            }
    }
}
