export class GoCounting {
  constructor(board) {
    this.board = board;
    this.visited = Array(board.length)
      .fill(0)
      .map(() => Array(board[0].length).fill(false));
    this.territories = { BLACK: [], WHITE: [], NONE: [] };
  }

  isValid(x, y) {
    return (
      x >= 0 && x < this.board.length && y >= 0 && y < this.board[0].length
    );
  }

  floodFill(x, y, player, territory) {
    if (!this.isValid(x, y) || this.visited[x][y]) return;

    if (this.board[x][y] === " ") {
      this.territories[player].push([x, y]);
      territory.push([x, y]);
    } else if (this.board[x][y] !== player) {
      return;
    }

    this.visited[x][y] = true;

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];
      this.floodFill(newX, newY, player, territory);
    }
  }

  getTerritory(x, y) {
    if (this.visited[x][y]) return { owner: "NONE", territory: [] };

    const player = this.board[x][y];
    const territory = [];
    this.floodFill(x, y, player, territory);

    return { owner: player, territory };
  }

  getTerritories() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (!this.visited[i][j] && this.board[i][j] === " ") {
          const territory = [];
          this.floodFill(i, j, "BLACK", territory);
          this.floodFill(i, j, "WHITE", territory);
        }
      }
    }
    return {
      territoryBlack: this.territories.BLACK,
      territoryWhite: this.territories.WHITE,
      territoryNone: this.territories.NONE,
    };
  }
}
