export const squareRoot = (radicand) => {
  if (radicand < 0) {
    return NaN; // Square root of negative numbers is undefined
  }

  if (radicand === 0 || radicand === 1) {
    return radicand;
  }

  let sqrt = 1;
  while (sqrt * sqrt !== radicand) {
    sqrt++;
  }
  return sqrt;
};
