class WordSearch {
  // This class represents a word search puzzle.
  constructor(grid) {
    // The grid is a 2D array of characters that represents the puzzle.
    this.grid = grid;
    // The possible directions in which to search for words.
    this.possibleDirections = [
      { horizontal: 0, vertical: 1 },
      { horizontal: 0, vertical: -1 },
      { horizontal: 1, vertical: 0 },
      { horizontal: -1, vertical: 0 },
      { horizontal: 1, vertical: 1 },
      { horizontal: -1, vertical: 1 },
      { horizontal: 1, vertical: -1 },
      { horizontal: -1, vertical: -1 }
    ];
  }

  // This method finds all of the words in the given list that are present in the puzzle.
  find(wordsToSearch) {
    // The wordsLeft array contains the words that have not yet been found.
    const wordsLeft = [...wordsToSearch];
    // The foundWords object stores the coordinates of the found words.
    const foundWords = {};
    // Iterate over each row and column in the grid.
    for(let row = 0; row < this.grid.length; row++) {
      for(let column = 0; column < this.grid[row].length; column++) {
        // Iterate over each word in the wordsLeft array.
        wordsLeft.forEach(word => {
          // Iterate over each possible direction.
          for(const direction of this.possibleDirections) {
            // Get the coordinates of the word in the given direction.
            const wordCoordenates = this.getWordCoordenates(word, direction, { row, column });
            // If the word is found, add it to the foundWords object.
            if(wordCoordenates) {
              foundWords[word] = wordCoordenates; 
            }
          }
        });
      }
    }
    // Return the foundWords object.
    return foundWords;
  }
  
  // This method gets the coordinates of a word in the given direction.
  getWordCoordenates(word, direction, initialCoordenate) {
    // Iterate over each character in the word.
    for(let i = 0; i < word.length; i++) {
      // Get the row and column of the current character.
      const row = initialCoordenate.row + direction.vertical * i;
      const column = initialCoordenate.column + direction.horizontal * i;
      // If the character does not match the corresponding character in the word, return undefined.
      if(this.grid[row]?.[column] !== word[i]) {
        return;
      }
    }
    // Return the coordinates of the word.
    return { 
      start: [initialCoordenate.row + 1, initialCoordenate.column + 1],
      end: [
        initialCoordenate.row + 1 + (word.length - 1) * direction.vertical,
        initialCoordenate.column + 1 + (word.length - 1) * direction.horizontal
      ]
    };
  }
}

export default WordSearch;
