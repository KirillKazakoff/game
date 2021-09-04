import './board.css';
import engine from '../../../lib/engine/engine';
import boardTemplate from './board.template';
import characterTemplate from '../character/character.template';

import Cursor from './cursor/cursor';

export default {
    getContainer(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }

        this.container = container;
        this.boardSize = null;
        this.cells = [];
    },

    renderBoard(boardSize) {
        const html = engine(boardTemplate(boardSize));
        this.container.innerHTML = html;
        this.board = this.container.querySelector('.board');
        this.boardSize = boardSize;
        this.getCells();

        this.cursor = new Cursor(this.container);
    },

    renderChar(character) {
        this.clearBoard();
        const cell = this.getCell(character.position);
        const html = engine(characterTemplate());

        cell.innerHTML = html;
    },

    getCells() {
        this.cells = this.container.querySelectorAll('.board__cell');
        this.cells.forEach(cell => {
            const percentage = `${100 / this.boardSize - 1}%`;
            cell.style['width'] = percentage;
            cell.style['padding-bottom'] = percentage;
        });
        return this.cells;
    },

    getCell(position) {
        return [...this.cells].find((cell, index) => index === position);
    },

    clearBoard() {
        this.cells.forEach((cell) => cell.innerHTML = '');
    }

}