export class Crypto {
  constructor(text) {
    this.normalizedText = this.normalize(text);
    this.size = this.calculateSize(this.normalizedText.length);
  }

  normalize(text) {
    return text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  }

  calculateSize(length) {
    const size = Math.sqrt(length);
    const rows = Math.floor(size);
    const columns = Math.ceil(size);

    if (rows * columns >= length) {
      return { rows, columns };
    } else {
      return { rows: columns, columns };
    }
  }

  get ciphertext() {
    const { rows, columns } = this.size;
    let encoded = "";

    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows; row++) {
        const index = col + row * columns;
        if (index < this.normalizedText.length) {
          encoded += this.normalizedText[index];
        } else {
          encoded += " ";
        }
      }
      if (col !== columns - 1) {
        encoded += " ";
      }
    }
    return encoded;
  }
}
