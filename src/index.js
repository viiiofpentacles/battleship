import './style.css'
import { Gameboard, shipSetup } from './gameboard.js';
import { Player } from './player.js';
import { updateUserShipDisplay, resetButton, startGameButton } from './DOM.js';

const userPlayer = Player();
const computerPlayer = Player();
const userBoard = Gameboard(); 
const computerBoard = Gameboard();

const userShipCoords = shipSetup(userBoard);
updateUserShipDisplay(userShipCoords);
shipSetup(computerBoard);
console.log(computerBoard.ships);
resetButton(userBoard);
startGameButton(userPlayer,computerBoard, computerPlayer, userBoard);