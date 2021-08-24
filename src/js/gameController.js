import board from "../components/board/board";
import Character from "../components/character/character";

export default function gameControl() {
    board.getContainer('.board-container');
    board.renderBoard(12);

    const character = new Character();
    setInterval(() => redrawChar(character), character.speed);
}

function redrawChar(character) {
    character.updatePosition();
    board.renderChar(character)
}