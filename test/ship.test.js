import { ShipFactory } from '../src/ship';

test('returns ship length', () => {
    expect(ShipFactory(5, ['A1','A2','A3','A4','A5']).length).toBe(5);
      })

test('returns array showing coordinate hit', () => {
  expect(ShipFactory(5, ['A1','A2','A3','A4','A5']).hit('A5')).toStrictEqual(['A1','A2','A3','A4','x']);
})

test('checks if ship is sunk', () => {
  expect(ShipFactory(5, ['A1','A2','A3','A4','A5']).isSunk()).toBe(false);
})