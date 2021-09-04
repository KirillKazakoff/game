import board from "../components/board/board";
import Character from "../components/character/character";
import state from '../state';

export default class Controller {
    constructor() {
        board.getContainer('.board-container');
        board.renderBoard(5);
        board.board.addEventListener('mousedown', (e) => this.onCellClick(e));

        const character = new Character();
        this.timer = setInterval(() => this.redrawChar(character), character.speed);
    }

    onCellClick(e) {
        console.log(e.target.className);
        if (e.target.classList.contains('character')) {
            state.score += 1;
        } else {
            state.loses += 1;
        }
    
        console.log(state.loses, state.score);
        if (state.loses === 5) {
            clearInterval(this.timer);
        }    
    }

    redrawChar(character) {
        character.updatePosition();
        board.renderChar(character)
    }
}
