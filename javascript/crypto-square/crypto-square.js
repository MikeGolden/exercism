export class Crypto {
  constructor(plaintext) {
    const lowertext = plaintext.toLowerCase().replace(/\W/g, '')
    const length = Math.ceil(Math.sqrt(lowertext.length))
    this.ciphertext = 
      Array.from({ length }, (_, i) => 
        Array.from({ length }, (_, j) =>
          lowertext[length * j + i] || ' ').join(''))
      .join(' ')
  }
}