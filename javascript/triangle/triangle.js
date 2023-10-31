//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
    this.validateTriangle();
  }

  validateTriangle() {
    if (this.sides[0] <= 0 || this.sides[0] + this.sides[1] <= this.sides[2]) {
      throw new Error('Invalid triangle: The sum of the lengths of any two sides must be greater than the length of the third side.');
    }
  }

  get isEquilateral() {
    return this.sides[0] === this.sides[2];
  }

  get isIsosceles() {
    return this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2];
  }

  get isScalene() {
    return this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2];
  }
}

