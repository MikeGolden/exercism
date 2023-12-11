export class Crypto {
  constructor(plaintext) {
    // Convert plaintext to lowercase and remove non-alphabetic characters
    const lowertext = plaintext.toLowerCase().replace(/\W/g, '');
    
    // Calculate the size of the square code (length of the plaintext)
    const length = Math.ceil(Math.sqrt(lowertext.length));

    // Create the ciphertext by arranging characters into a square code
    this.ciphertext = 
      // Generate an array of rows
      Array.from({ length }, (_, i) => 
        // For each row, create an array of columns
        Array.from({ length }, (_, j) =>
          // Fill each column with characters from the plaintext (or space if no character)
          lowertext[length * j + i] || ' ').join(''))
      // Join rows with spaces to form the final ciphertext
      .join(' ');
  }
}
