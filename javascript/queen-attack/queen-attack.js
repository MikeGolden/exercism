export class QueenAttack {
  constructor({
    black: [blackRow = 7, blackColumn = 3] = [],
    white: [whiteRow = 0, whiteColumn = 3] = [],
  } = {}) {
    this.black = [blackRow, blackColumn];
    this.white = [whiteRow, whiteColumn];
  }

  toString() {
    const board = Array.from({ length: 8 }, () => Array(8).fill("_"));
    const [whiteRow, whiteColumn] = this.white;
    const [blackRow, blackColumn] = this.black;

    board[whiteRow][whiteColumn] = "W";
    board[blackRow][blackColumn] = "B";

    return board.map((row) => row.join(" ")).join("\n");
  }

  get canAttack() {
    const [whiteRow, whiteColumn] = this.white;
    const [blackRow, blackColumn] = this.black;

    const sameRow = whiteRow === blackRow;
    const sameColumn = whiteColumn === blackColumn;
    const sameDiagonal =
      Math.abs(whiteRow - blackRow) === Math.abs(whiteColumn - blackColumn);

    return sameRow || sameColumn || sameDiagonal;
  }
}
