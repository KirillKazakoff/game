import './character.css';
import board from '../board/board';
import { getRandomInt } from '../../lib/utils';

export default class Character {
    constructor() {
        this.getSpeed();
        this.updatePosition();
    }

    updatePosition() {
        let position = null;

        while (this.position === position || typeof position !== 'number') {
            position = getRandomInt(0, board.boardSize ** 2);
        }
        this.position = position;
    }

    getSpeed() {
        this.speed = getRandomInt(600, 1000);
    }
}