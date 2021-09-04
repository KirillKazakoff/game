const boardCellTemplate = () => ({
    block: 'li',
    cls: 'board__cell',
    content: '',
});

const boardTemplate = (boardSize) => ({
    block: 'ul',
    cls: 'board',
    content: genCells(boardSize),
})

function genCells(boardSize) {
    const cells = [];
    for (let i = 0; i < boardSize ** 2; i++) {
        cells.push(boardCellTemplate());
    }
    return cells;
}

export default boardTemplate;