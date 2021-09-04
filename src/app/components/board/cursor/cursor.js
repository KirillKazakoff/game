import './cursor.css';
import cursorT from './cursor.tmp';
import engine from '../../../../lib/engine/engine';

export default class Cursor {
    constructor(container) {
        const html = engine(cursorT());

        container.insertAdjacentHTML('beforeend', html);
        this.cursor = container.querySelector('.cursor');
        container.addEventListener('mousemove', (e) => this.mouseMove(e));
    }

    mouseMove(e) {
        let x = e.clientX;
        let y = e.clientY;
        this.cursor.style.left = x + "px";
        this.cursor.style.top = y + "px";
    }
}
