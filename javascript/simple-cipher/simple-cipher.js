const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_LENGTH = ALPHABET.length;

export class Cipher {
  constructor(key = null) {
    this._key = key || this.generateKey(); // Initialize the key or generate a random one
  }

  // Encode plainText using the key
  encode(plainText) {
    return Array.from(plainText).map((value, index) => {
      const n =
        this.letterIndex(value) +
        this.letterIndex(this._key[index % this._key.length]); // Calculate the new index
      return ALPHABET.charAt(n % ALPHABET_LENGTH); // Get the new character
    }).join(""); // Join the encoded characters into a string
  }

  // Decode cipherText using the key
  decode(cipherText) {
    return Array.from(cipherText).map((value, index) => {
      const n = 
        this.letterIndex(value) -
        this.letterIndex(this.key[index % this._key.length]); // Calculate the new index
      return ALPHABET.charAt((n + ALPHABET_LENGTH) % ALPHABET_LENGTH); // Get the new character
    }).join(""); // Join the decoded characters into a string
  }

  get key() {
    return this._key; // Get the key
  }

  // Generate a random key of a specified length
  generateKey(length = 10) {
    return [...Array(length)].map((_) => this.randomLetter()).join("");
  }

  // Generate a random lowercase letter
  randomLetter() {
    return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET_LENGTH));
  }

  // Get the index of a letter in the alphabet
  letterIndex(letter) {
    return ALPHABET.indexOf(letter);
  }
}
