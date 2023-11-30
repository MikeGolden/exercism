export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw new Error("Negative totals are not allowed.");
    }

    const sortedCoins = coinArray.sort((a, b) => a - b);
    const change = [];

    let remaining = target;
    for (const coin of sortedCoins) {
      if (coin <= remaining) {
        const count = Math.floor(remaining / coin);
        remaining -= count * coin;
        change.push(...Array(count).fill(coin));
      }
    }

    if (remaining !== 0) {
      throw new Error("Cannot make change.");
    }

    return change;
  }
}
