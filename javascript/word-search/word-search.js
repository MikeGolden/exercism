class WordSearch {
  constructor() {}

  find(puzzle, words) {
    const locations = [];

    for (let row = 0; row < puzzle.length; row++) {
      for (let col = 0; col < puzzle[0].length; col++) {
        for (const word of words) {
          if (puzzle[row][col] === word[0]) {
            let startRow = row;
            let startCol = col;
            let endRow = row;
            let endCol = col;

            for (let i = 1; i < word.length; i++) {
              if (startRow > 0 && puzzle[startRow - 1][startCol] === word[i]) {
                startRow--;
              } else if (
                startCol > 0 &&
                puzzle[startRow][startCol - 1] === word[i]
              ) {
                startCol--;
              } else if (
                endRow < puzzle.length - 1 &&
                puzzle[endRow + 1][endCol] === word[i]
              ) {
                endRow++;
              } else if (
                endCol < puzzle[0].length - 1 &&
                puzzle[endRow][endCol + 1] === word[i]
              ) {
                endCol++;
              } else {
                break;
              }
            }

            if (startRow <= endRow && startCol <= endCol) {
              locations.push({
                word,
                start: { row: startRow, col: startCol },
                end: { row: endRow, col: endCol },
              });
            }
          }
        }
      }
    }

    return locations;
  }
}

export default WordSearch;
