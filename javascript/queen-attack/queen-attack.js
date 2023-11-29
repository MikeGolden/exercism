export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    if (
      Math.min(whiteRow, whiteColumn, blackRow, blackColumn) < 0 ||
      Math.max(whiteRow, whiteColumn, blackRow, blackColumn) > 7
    )
      throw new Error("Queen must be placed on the board");
    if (blackRow === whiteRow && blackColumn === whiteColumn)
      throw new Error("Queens cannot share the same space");
    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];
  }

  toString() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      board[i] = Array.from("_ _ _ _ _ _ _ _");
    }
    board[this.white[0]][this.white[1] * 2] = "W";
    board[this.black[0]][this.black[1] * 2] = "B";
    for (let i = 0; i < 8; i++) {
      board[i] = board[i].join("");
    }
    return board.join("\n");
    //throw new Error('Remove this statement and implement this function');
  }

  get canAttack() {
    //throw new Error('Remove this statement and implement this function');
    if (this.black[0] === this.white[0] || this.black[1] == this.white[1])
      return true;
    if (this.isDiagonal()) return true;
    return false;
  }

  isDiagonal() {
    let [x, y] = this.white;
    let [a, b] = this.black;
    if (Math.abs(x - a) === Math.abs(y - b)) return true;
    return false;
  }
}

