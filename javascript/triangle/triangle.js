//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isTriangle(){
    return this.sides
      .sort((a,b) => a-b)
      .every((side) => side > 0) && (this.sides[2] <= this.sides[0] + this.sides[1]);
  }

  get matchingSides(){
    return this.sides
      .sort((a,b) => a-b)
      .filter((side) => this.sides.filter(n => n === side).length >= 2)
      .length
  }

  get isEquilateral() {
    return this.isTriangle && this.matchingSides === 3;
    }

  get isIsosceles() {
    return this.isTriangle && this.matchingSides === 2 || this.isTriangle && this.matchingSides === 3;
  }

  get isScalene() {
    return this.isTriangle && this.matchingSides === 0;
  }
}