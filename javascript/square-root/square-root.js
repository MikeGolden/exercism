export const squareRoot = (radicand) => {
  if (radicand < 0) {
    return NaN; // Square root of negative numbers is undefined
  }

  if (radicand === 0 || radicand === 1) {
    return radicand;
  }

  let guess = radicand / 2; // Initial guess (can be any initial value)
  const precision = 0.000001; // Precision for approximation

  while (Math.abs(guess * guess - radicand) > precision) {
    guess = (guess + radicand / guess) / 2;
  }

  return guess;
};
