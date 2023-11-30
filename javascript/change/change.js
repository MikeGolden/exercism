export class Change {
  calculate(coinArray, target) {
    // If target is 0, no change is needed
    if (target === 0) {
      return [];
    }

    // Negative totals are not allowed
    if (target < 0) {
      throw new Error("Negative totals are not allowed.");
    }

    // Ensure the target can be represented with the given coins
    if (target < Math.min(...coinArray)) {
      throw new Error(
        "The total " + target + " cannot be represented in the given currency.",
      );
    }

    // Initialize an array to store minimum coins needed for each target value
    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0; // Zero coins needed for target value of 0

    // Compute minimum coins needed for each target value up to 'target'
    for (const coin of coinArray) {
      for (let i = coin; i <= target; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }

    // If no valid solution exists for the target, throw an error
    if (dp[target] === Infinity) {
      throw new Error(
        "The total " + target + " cannot be represented in the given currency.",
      );
    }

    // Find the coins used for the minimum number of coins
    const coinsUsed = [];
    let remaining = target;

    while (remaining > 0) {
      for (const coin of coinArray) {
        if (remaining >= coin && dp[remaining - coin] + 1 === dp[remaining]) {
          coinsUsed.push(coin);
          remaining -= coin;
          break;
        }
      }
    }

    return coinsUsed;
  }
}
