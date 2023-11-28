export class Board {
  constructor(inputBoard) {
    this.board = inputBoard.map(row => row.split(""));
  }

  winner() {
    for (const [y, row] of this.board.entries())
      for (const [x, cell] of row.entries()) {
        if (cell === "O" && this.isAtEdges(this.expand(cell, x, y), ["top", "bottom"]))
          return "O";
        if (cell === "X" && this.isAtEdges(this.expand(cell, x, y), ["left", "right"]))
          return "X";
      }
    return "";
  }

  isAtEdges(cells, edges) {
    return edges.every(edge => {
      for (const [x, y] of cells)
        if (
          edge === "top" && y === 0 ||
          edge === "bottom" && y === this.board.length - 1 ||
          edge === "left" && x === 0 + y ||
          edge === "right" && x === this.board[0].length - 1 + y
        ) return true;
      return false;
    });
  }

  expand(symbol, x, y, cells = []) {
    if (!this.board[y] || !this.board[y][x] || 
        this.board[y][x] !== symbol || cells.includes(`${x},${y}`)
    ) return;
    cells.push(`${x},${y}`);
    const neighbours = [
      [x-1, y-1], [x+1, y-1], [x-1, y+1],
      [x+1, y+1], [x-2, y+0], [x+2, y+0],
    ];
    for (const [nx, ny] of neighbours)
      this.expand(symbol, nx, ny, cells);
    return cells.map(cell => cell.split(",").map(Number));
  }
}