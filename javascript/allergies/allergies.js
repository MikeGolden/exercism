//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergies = {
      1: "eggs",
      2: "peanuts",
      4: "shellfish",
      8: "strawberries",
      16: "tomatoes",
      32: "chocolate",
      64: "pollen",
      128: "cats",
    };
  }

  list() {
    const allergies = [];

    for (let i = 1; i <= 128; i *= 2) {
      if (this.score & i) {
        allergies.push(this.allergies[i]);
      }
    }
    return allergies;
  }

  allergicTo(allergy) {
    return this.list().includes(allergy);
  }
}
