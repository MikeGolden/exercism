// Function to check if a number is a palindrome
const isPalindrome = n => String(n) === String(n).split('').reverse().join('');

// Constant representing an empty result
const EMPTY_RESULT = { value: null, factors: [] };

// Palindromes class with static method generate
export class Palindromes {
  static generate(options) {
    return new Palindromes(options);
  }

  // Constructor to initialize min and max factors
  constructor({ minFactor, maxFactor }) {
    // Set min factor to 1 if not provided
    this.min = minFactor ?? 1;
    this.max = maxFactor;
  }

  // Method to check if min factor is greater than max factor
  checkLimits() {
    if (this.min > this.max)
      throw new Error('min must be <= max');
  }

  // Method to find the smallest palindrome and its factors within the range
  get smallest() {
    this.checkLimits();
    const limit = this.max ** 2;
    for (let p = this.min ** 2; p <= limit; p++) {
      const result = this.isPalindromeProduct(p);
      if (result) return result;
    }
    return EMPTY_RESULT;
  }

  // Method to find the largest palindrome and its factors within the range
  get largest() {
    this.checkLimits();
    const limit = this.min ** 2;
    for (let p = this.max ** 2; p >= limit; p--) {
      const result = this.isPalindromeProduct(p);
      if (result) return result
    }
    return EMPTY_RESULT;
  }

  // Method to check if a number is a palindrome product
  isPalindromeProduct(n) {
    if (isPalindrome(n)) {
      const fs = this.factors(n);
      if (fs.length > 0)
        return { value: n, factors: fs };
    }
    return;
  }

  // Method to find factors of a number within the specified range
  factors(n) {
    const pairs = [];
    const limit = Math.min(this.max, Math.sqrt(n));
    for (let i = this.min; i <= limit; i++) {
      if (n % i === 0) {
        const j = n / i;
        if (this.min <= j && j <= this.max)
          pairs.push([i, j]);
      }
    }
    return pairs;
  }
}
