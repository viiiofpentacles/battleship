import { generateShipCoordsHorizontal, generateShipCoordsVertical, generateAllShipCoords } from '../src/shipplacement.js'

test('generates correct no. of horizontal ship coords based on given length', () => {
    expect(generateShipCoordsHorizontal(5)).toHaveLength(5);
})

test('generates correct no. of vertical ship coords based on given length', () => {
    expect(generateShipCoordsVertical(3)).toHaveLength(3);
})

test('generates an array of 5 separate coordinates', () => {
    expect(generateAllShipCoords()).toHaveLength(5);
})