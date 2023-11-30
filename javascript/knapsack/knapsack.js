export const knapsack = (maximumWeight, items) => {
  // Get the number of items
  const n = items.length;
  // Initialize a 2D array to store maximum values for different weights and items
  const dp = new Array(n + 1).fill(0).map(() => new Array(maximumWeight + 1).fill(0));

  // Loop through each item
  for (let i = 1; i <= n; i++) {
    // Extract weight and value of the current item
    const { weight, value } = items[i - 1];

    // Loop through each possible weight from 1 to maximumWeight
    for (let w = 1; w <= maximumWeight; w++) {
      // If the current item's weight can be included
      if (weight <= w) {
        // Choose the maximum value between including and excluding the current item
        dp[i][w] = Math.max(value + dp[i - 1][w - weight], dp[i - 1][w]);
      } else {
        // If the current item's weight is more than the current capacity, exclude it
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Return the maximum value achievable with the given maximum weight
  return dp[n][maximumWeight];
};
