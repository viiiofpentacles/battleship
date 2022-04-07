import './style.css'
import { Gameboard, shipSetup } from './gameboard.js';
import { Player } from './player.js';
import { updateUserShipDisplay, resetButton } from './DOM.js';

const userPlayer = Player();
const computerPlayer = Player();
const userBoard = Gameboard(); 
const computerBoard = Gameboard();

const shipCoords = shipSetup(userBoard);
updateUserShipDisplay(shipCoords);
resetButton(userBoard);