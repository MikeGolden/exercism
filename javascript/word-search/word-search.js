class WordSearch {
  constructor() {}

  find(puzzle, words) {
    // Create an array to store the locations of the words.
    const locations = [];

    // Iterate over the puzzle.
    for (let row = 0; row < puzzle.length; row++) {
      for (let col = 0; col < puzzle[0].length; col++) {
        // Check if the current letter is the first letter of a word.
        for (const word of words) {
          if (puzzle[row][col] === word[0]) {
            // Store the starting position of the word.
            let startRow = row;
            let startCol = col;

            // Store the ending position of the word.
            let endRow = row;
            let endCol = col;

            // Iterate over the remaining letters of the word.
            for (let i = 1; i < word.length; i++) {
              // Check if the next letter is in the same row and column as the current letter.
              if (startRow > 0 && puzzle[startRow - 1][startCol] === word[i]) {
                // Move the starting position up one row.
                startRow--;
              } else if (
                startCol > 0 &&
                puzzle[startRow][startCol - 1] === word[i]
              ) {
                // Move the starting position left one column.
                startCol--;
              } else if (
                endRow < puzzle.length - 1 &&
                puzzle[endRow + 1][endCol] === word[i]
              ) {
                // Move the ending position down one row.
                endRow++;
              } else if (
                endCol < puzzle[0].length - 1 &&
                puzzle[endRow][endCol + 1] === word[i]
              ) {
                // Move the ending position right one column.
                endCol++;
              } else {
                // If the next letter is not in the same row and column as the current letter, then the word is not found.
                break;
              }
            }

            // If the word is found, store the location of the first and last letter.
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

    // Return the array of locations.
    return locations;
  }
}

export default WordSearch;
