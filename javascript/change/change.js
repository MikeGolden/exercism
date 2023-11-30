export class Change {
  calculate(coinArray, target) {
    if (target === 0) {
      return []; // No change needed
    }

    if (target < 0) {
      throw new Error("Negative totals are not allowed.");
    }

    if (target < Math.min(...coinArray)) {
      throw new Error(
        "The total " + target + " cannot be represented in the given currency.",
      );
    }

    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coinArray) {
      for (let i = coin; i <= target; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }

    if (dp[target] === Infinity) {
      throw new Error(
        "The total " + target + " cannot be represented in the given currency.",
      );
    }

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

