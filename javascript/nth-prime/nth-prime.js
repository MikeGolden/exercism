function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

export const prime = (n) => {
  if (n === 1) return 2;

  let count = 1;
  let number = 3;

  while (count < n) {
    if (isPrime(number)) {
      count++;
    }
    if (count === n) {
      return number;
    }
    number += 2;
  }
  return -1;
};
