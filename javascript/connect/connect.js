export class Board {
  constructor(board) {
    this.board = board;
  }

  winner() {
    const rows = this.board.length;
    const cols = this.board[0].length;

    // Player 0 tries to connect top and bottom
    for (let col = 0; col < cols; col++) {
      if (this.board[0][col] === "0" && this.dfs(0, col, "0", new Set())) {
        return "Player 0";
      }
    }

    // Player X tries to connect left and right
    for (let row = 0; row < rows; row++) {
      if (this.board[row][0] === "X" && this.dfs(row, 0, "X", new Set())) {
        return "Player X";
      }
    }

    return "";
  }

  dfs(row, col, player, visited) {
    const directions = [
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
    ];

    if (player === "0" && row === this.board.length - 1) {
      return true;
    }

    if (player === "X" && col === this.board[0].length - 1) {
      return true;
    }

    visited.add(`${row},${col}`);

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < this.board.length &&
        newCol >= 0 &&
        newCol < this.board[0].length &&
        this.board[newRow][newCol] === player &&
        !visited.has(`${newRow},${newCol}`) &&
        this.dfs(newRow, newCol, player, visited)
      ) {
        return true;
      }
    }

    return false;
  }
}
