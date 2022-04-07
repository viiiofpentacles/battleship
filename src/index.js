import './style.css'
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import { shipSetup, updateUserShipDisplay, resetButton } from './DOM.js';

const userPlayer = Player();
const computerPlayer = Player();
const userBoard = Gameboard(); 
const computerBoard = Gameboard();

resetButton(userBoard);
const shipCoords = shipSetup(userBoard);
updateUserShipDisplay(shipCoords);
