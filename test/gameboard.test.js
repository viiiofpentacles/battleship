import { Gameboard } from '../src/gameboard.js'

test('places ships at specific coordinates', () => {
    const gameboard = Gameboard()
    gameboard.placeShip(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
    expect(gameboard.ships[0].coords).toStrictEqual(['A1', 'A2', 'A3', 'A4', 'A5'])
})

test('receiveAttack function records hit attacks', () => {
    const gameboard = Gameboard()
    gameboard.placeShip(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
    gameboard.receiveAttack('A4');
    expect(gameboard.ships[0].coords).toStrictEqual(['A1', 'A2', 'A3', 'x', 'A5'])
})

test('receivedAttack records missed attacks', () => {
    const gameboard = Gameboard()
    gameboard.placeShip(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
    gameboard.receiveAttack('B1');
    expect(gameboard.missedAttacks).toStrictEqual(['B1'])
})

test('gameboard checks whether all ships have sunk', () => {
    const gameboard = Gameboard()
    gameboard.placeShip(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
    gameboard.receiveAttack('A1');
    gameboard.receiveAttack('A2');
    gameboard.receiveAttack('A3');
    gameboard.receiveAttack('A4');
    gameboard.receiveAttack('A5');
    expect(gameboard.checkGameOver()).toBe(true)
})