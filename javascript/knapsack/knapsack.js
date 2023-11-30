export const knapsack = (maximumWeight, items) => {
  const n = items.length;
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(maximumWeight + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    for (let w = 1; w <= maximumWeight; w++) {
      if (weight <= w) {
        dp[i][w] = Math.max(value + dp[i - 1][w - weight], dp[i - 1][w]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][maximumWeight];
};
