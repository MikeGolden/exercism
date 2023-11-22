export function triplets({ minFactor, maxFactor, sum }) {
  const tripletsArr = [];

  for (let a = minFactor; a < sum / 3; a++) {
    for (let b = a + 1; b < sum / 2; b++) {
      const c = sum - a - b;
      if (
        a * a + b * b === c * c &&
        (!maxFactor || (a <= maxFactor && b <= maxFactor && c <= maxFactor))
      ) {
        tripletsArr.push(new Triplet(a, b, c));
      }
    }
  }

  return tripletsArr;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
