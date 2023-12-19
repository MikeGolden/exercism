export const primes = (limit) => {
  const primesArray = [];
  const sieve = Array(limit + 1).fill(true);

  for (let num = 2; num <= Math.sqrt(limit); num++) {
    if (sieve[num]) {
      for (let multiple = num * num; multiple <= limit; multiple += num) {
        sieve[multiple] = false;
      }
    }
  }

  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primesArray.push(i);
    }
  }

  return primesArray;
};
