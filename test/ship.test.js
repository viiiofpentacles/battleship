import { ShipFactory } from '../src/ship';

test('returns array with coordinate marked as hit', () => {
    expect(ShipFactory(5, ['A1','A2','A3','A4','A5']).toMatchObject({
        length: 5,
        coords: ['A1','A2','A3','A4','A5'],
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
})
