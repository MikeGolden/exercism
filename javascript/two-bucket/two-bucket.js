export class TwoBucket {
  /**
   * Constructor for the TwoBucket class.
   *
   * @param {number} sizeOf1 The size of the first bucket.
   * @param {number} sizeOf2 The size of the second bucket.
   * @param {number} goal The desired amount of water to reach.
   * @param {string} starter The bucket to start filling first.
   */
  constructor(sizeOf1, sizeOf2, goal, starter) {
    // Validate the input parameters.
    this.#validate(sizeOf1, sizeOf2, goal);

    // Store the input parameters.
    this.sizeOf1 = sizeOf1;
    this.sizeOf2 = sizeOf2;
    this.goal = goal;
    this.start = starter;
  }

  /**
   * Validates the input parameters.
   *
   * @param {number} one The size of the first bucket.
   * @param {number} two The size of the second bucket.
   * @param {number} goal The desired amount of water to reach.
   */
  #validate(one, two, goal) {
    // Check if the goal is divisible by the greatest common divisor of the two bucket sizes.
    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    if (goal % gcd(one, two)) throw new Error();

    // Check if the goal is greater than either of the bucket sizes.
    if (goal > one && goal > two) throw new Error();
  }

  /**
   * Solves the Two Bucket problem.
   *
   * @returns {object} An object containing the number of moves, the goal bucket, and the amount of water in the other bucket.
   */
  solve() {
    // Initialize the number of moves.
    let moves = 0;

    // Initialize the two buckets.
    let one = new Bucket("one", this.sizeOf1, 0);
    let two = new Bucket("two", this.sizeOf2, 0);

    // If the starting bucket is the second bucket, swap the buckets.
    if (this.start === "two") {
      [one, two] = [two, one];
    }

    // While the goal has not been reached, continue pouring water between the buckets.
    while (true) {
      // Check if the goal has been reached.
      switch (true) {
        case one.content === this.goal || two.content === this.goal:
          // If the goal has been reached, return the solution.
          if (two.content === this.goal) {
            [one, two] = [two, one];
          }
          return {
            moves,
            goalBucket: one.name,
            otherBucket: two.content,
          };
        case one.content === 0:
          // If the first bucket is empty, fill it.
          one.content = one.size;
          break;
        case two.size === this.goal:
          // If the second bucket is full, fill it.
          two.content = two.size;
          break;
        case two.content === two.size:
          // If the second bucket is full, empty it.
          two.content = 0;
          break;
        default:
          // Otherwise, pour water from the first bucket to the second bucket.
          const pour = Math.min(one.content, two.size - two.content);
          one.content -= pour;
          two.content += pour;
          break;
      }

      // Increment the number of moves.
      moves++;
    }
  }
}

class Bucket {
  /**
   * Constructor for the Bucket class.
   *
   * @param {string} name The name of the bucket.
   * @param {number} size The size of the bucket.
   * @param {number} content The amount of water in the bucket.
   */
  constructor(name, size, content) {
    // Store the input parameters.
    this.name = name;
    this.size = size;
    this.content = content;
  }
}
