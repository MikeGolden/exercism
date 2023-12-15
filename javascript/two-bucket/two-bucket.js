export class TwoBucket {
  constructor(sizeOf1, sizeOf2, goal, starter) {
    this.#validate(sizeOf1, sizeOf2, goal);
    this.sizeOf1 = sizeOf1;
    this.sizeOf2 = sizeOf2;
    this.goal = goal;
    this.start = starter;
  }

  #validate(one, two, goal) {
    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    if (goal % gcd(one, two)) throw new Error();
    if (goal > one && goal > two) throw new Error();
  }

  solve() {
    let moves = 0;
    let one = new Bucket("one", this.sizeOf1, 0);
    let two = new Bucket("two", this.sizeOf2, 0);
    if (this.start === "two") {
      [one, two] = [two, one];
    }

    while (true) {
      switch (true) {
        case one.content === this.goal || two.content === this.goal:
          if (two.content === this.goal) {
            [one, two] = [two, one];
          }
          return {
            moves,
            goalBucket: one.name,
            otherBucket: two.content,
          };
        case one.content === 0:
          one.content = one.size;
          break;
        case two.size === this.goal:
          two.content = two.size;
          break;
        case two.content === two.size:
          two.content = 0;
          break;
        default:
          const pour = Math.min(one.content, two.size - two.content);
          one.content -= pour;
          two.content += pour;
          break;
      }
      moves++;
    }
  }
}

class Bucket {
  constructor(name, size, content) {
    this.name = name;
    this.size = size;
    this.content = content;
  }
}

