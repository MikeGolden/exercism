export class TwoBucket {
  constructor(bucketOneSize, bucketTwoSize) {
    this.bucketOneSize = bucketOneSize;
    this.bucketTwoSize = bucketTwoSize;
    this.bucketOne = 0;
    this.bucketTwo = 0;
  }

  solve(desiredAmount, startBucket) {
    if (
      desiredAmount < 0 ||
      desiredAmount > this.bucketOneSize + this.bucketTwoSize
    ) {
      return {
        moves: -1,
        goalBucket: null,
        otherBucket: null,
      };
    }

    if (startBucket !== "one" && startBucket !== "two") {
      return {
        moves: -1,
        goalBucket: null,
        otherBucket: null,
      };
    }

    let moves = 0;
    if (startBucket === "one") {
      this.bucketOne = this.bucketOneSize;
      moves++;
    } else {
      this.bucketTwo = this.bucketTwoSize;
      moves++;
    }

    while (
      this.bucketOne !== desiredAmount &&
      this.bucketTwo !== desiredAmount
    ) {
      if (this.bucketOne === this.bucketOneSize) {
        this.pourWater(this.bucketOne, this.bucketTwo);
        moves++;
      } else if (this.bucketTwo === this.bucketTwoSize) {
        this.pourWater(this.bucketTwo, this.bucketOne);
        moves++;
      } else {
        this.pourWater(this.bucketOne, this.bucketTwo);
        moves++;
      }
    }

    return {
      moves: moves,
      goalBucket: this.bucketOne === desiredAmount ? "one" : "two",
      otherBucket:
        this.bucketOne === desiredAmount ? this.bucketTwo : this.bucketOne,
    };
  }

  pourWater(sourceBucket, destinationBucket) {
    const amountToPour = Math.min(
      this[sourceBucket],
      this[destinationBucket] - this[destinationBucket],
    );
    this[sourceBucket] -= amountToPour;
    this[destinationBucket] += amountToPour;
  }
}
