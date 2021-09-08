const boardCellTemplate = () => ({
    block: 'li',
    cls: 'board__cell',
    content: '',
});

function genCells(boardSize) {
    const cells = [];
    for (let i = 0; i < boardSize ** 2; i += 1) {
        cells.push(boardCellTemplate());
    }
    return cells;
}

const boardTemplate = (boardSize) => ({
    block: 'ul',
    cls: 'board',
    content: genCells(boardSize),
});

export default boardTemplate;
