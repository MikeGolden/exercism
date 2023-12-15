class WordSearch {
  constructor(grid) {
    this.grid = grid;
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

  find(wordsToSearch) {
    const wordsLeft = [...wordsToSearch];
    const foundWords = {};
    for(let row = 0; row < this.grid.length; row++) {
      for(let column = 0; column < this.grid[row].length; column++) {
        wordsLeft.forEach(word => {
          for(const direction of this.possibleDirections) {
            const wordCoordenates = this.getWordCoordenates(word, direction, { row, column });
            if(wordCoordenates) {
              foundWords[word] = wordCoordenates; 
            }
          }
        });
      }
    }
    return foundWords;
  }
  
  getWordCoordenates(word, direction, initialCoordenate) {
    for(let i = 0; i < word.length; i++) {
      const row = initialCoordenate.row + direction.vertical * i;
      const column = initialCoordenate.column + direction.horizontal * i;
      if(this.grid[row]?.[column] !== word[i]) {
        return;
      }
    }
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