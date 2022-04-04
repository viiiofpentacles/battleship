import { Player } from '../src/player.js'

describe('not.stringMatching', () => {
    const coords = /A1/;
  
    it('matches if the returned value of player.attack() does not match the expected regex', () => {
        const player = Player();
        player.chosenCoords[0] = 'A1';
        expect(player.attack()).toEqual(expect.not.stringMatching(coords));
    });
  });