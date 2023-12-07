const RHYME_DATA = [
  // This array stores the rhyme data, including the character and the action associated with each line
  {
    character: "house that Jack built.",
    action: null // Null indicates the starting line
  },
  {
    character: "malt",
    action: "lay in" // Action describes the relationship between the current and previous line
  },
  {
    character: "rat",
    action: "ate"
  },
  {
    character: "cat",
    action: "killed"
  },
  {
    character: "dog",
    action: "worried"
  },
  {
    character: "cow with the crumpled horn",
    action: "tossed"
  },
  {
    character: "maiden all forlorn",
    action: "milked"
  },
  {
    character: "man all tattered and torn",
    action: "kissed"
  },
  {
    character: "priest all shaven and shorn",
    action: "married"
  },
  {
    character: "rooster that crowed in the morn",
    action: "woke"
  },
  {
    character: "farmer sowing his corn",
    action: "kept"
  },
  {
    character: "horse and the hound and the horn",
    action: "belonged to"
  }
];

export class House {
  // This class encapsulates the functionality for generating the rhyme verses

  static verse(num) {
    // This method generates a single verse of the rhyme, given the verse number
    if (num < 1) return []; // Return an empty array if the verse number is less than 1

    // Construct the first line of the verse
    const firstLine = `This is the ${RHYME_DATA[num - 1].character}`;

    // Construct the remaining lines using the _remainingLines method
    const remainingLines = this._remainingLines(num - 1);

    // Combine the first line and the remaining lines to form the verse
    const verseLines = [firstLine, ...remainingLines];

    return verseLines;
  }

  static _remainingLines(num) {
    // This recursive method generates the remaining lines of the verse, given the verse number
    if (num < 1) return []; // Return an empty array if the verse number is less than 1

    // Construct the first remaining line
    const firstRemainingLine = `that ${RHYME_DATA[num].action} the ${RHYME_DATA[num - 1].character}`;

    // Construct the remaining lines using the _remainingLines method
    const remainingLines = this._remainingLines(num - 1);

    // Combine the first remaining line and the remaining lines to form the remaining verse lines
    const verseLines = [firstRemainingLine, ...remainingLines];

    return verseLines;
  }

  static verses(start, end) {
    // This method generates a sequence of verses, given the start and end verse numbers
    let result = [];

    for (let i = start; i <= end; i++) {
      // Generate each verse and append it to the result array
      result.push(...this.verse(i), "");
    }

    // Remove the last empty string added to the result array
    result.pop();

    return result; // Return the sequence of verses
  }
}
