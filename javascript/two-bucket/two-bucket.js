export class TwoBucket {
  constructor(bucketOneSize, bucketTwoSize) {
    this.bucketOneSize = bucketOneSize;
    this.bucketTwoSize = bucketTwoSize;
    this.bucketOne = 0;
    this.bucketTwo = 0;
  }

  solve(desiredAmount, startBucket) {
    // Check if the desired amount is valid.
    if (desiredAmount < 0 || desiredAmount > this.bucketOneSize + this.bucketTwoSize) {
      return {
        moves: -1,
        goalBucket: null,
        otherBucket: null
      };
    }

    // Check if the starting bucket is valid.
    if (startBucket !== 'one' && startBucket !== 'two') {
      return {
        moves: -1,
        goalBucket: null,
        otherBucket: null
      };
    }

    // Initialize the moves variable.
    let moves = 0;

    // Start filling the starting bucket.
    if (startBucket === 'one') {
      this.bucketOne = this.bucketOneSize;
      moves++;
    } else {
      this.bucketTwo = this.bucketTwoSize;
      moves++;
    }

    // While the desired amount has not been reached, continue pouring water between the buckets.
    while (this.bucketOne !== desiredAmount && this.bucketTwo !== desiredAmount) {

      // If the starting bucket is full, pour water into the other bucket.
      if (this.bucketOne === this.bucketOneSize) {
        this.pourWater(this.bucketOne, this.bucketTwo);
        moves++;
      }

      // If the other bucket is full, pour water into the starting bucket.
      else if (this.bucketTwo === this.bucketTwoSize) {
        this.pourWater(this.bucketTwo, this.bucketOne);
        moves++;
      }

      // If neither bucket is full, pour water from the starting bucket into the other bucket.
      else {
        this.pourWater(this.bucketOne, this.bucketTwo);
        moves++;
      }
    }

    // Return the solution object.
    return {
      moves: moves,
      goalBucket: this.bucketOne === desiredAmount ? 'one' : 'two',
      otherBucket: this.bucketOne === desiredAmount ? this.bucketTwo : this.bucketOne
    };
  }

  pourWater(sourceBucket, destinationBucket) {
    // Get the amount of water that can be poured from the source bucket to the destination bucket.
    const amountToPour = Math.min(this[sourceBucket], this[destinationBucket] - this[destinationBucket]);

    // Pour the water from the source bucket to the destination bucket.
    this[sourceBucket] -= amountToPour;
    this[destinationBucket] += amountToPour;
  }
}
