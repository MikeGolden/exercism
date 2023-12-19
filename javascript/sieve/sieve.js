export const primes = (limit) => {
  // Array to hold the prime numbers
  const primesArray = [];

  // Create an array representing the sieve; initialize all values to true initially
  const sieve = Array(limit + 1).fill(true);

  // Loop through numbers starting from 2 up to the square root of the limit
  for (let num = 2; num <= Math.sqrt(limit); num++) {
    // If the number is marked as true (not crossed out)
    if (sieve[num]) {
      // Mark all multiples of the number as false (not prime)
      for (let multiple = num * num; multiple <= limit; multiple += num) {
        sieve[multiple] = false;
      }
    }
  }

  // Loop through the sieve array to collect prime numbers
  for (let i = 2; i <= limit; i++) {
    // If the value at the index is true (marked as prime)
    if (sieve[i]) {
      // Push the index (prime number) into the primesArray
      primesArray.push(i);
    }
  }

  // Return the array containing prime numbers up to the given limit
  return primesArray;
};
