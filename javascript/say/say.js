const basicNumbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tensNumbers = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

export const say = (n) => {
  if (n < 0 || n > 99) {
    throw new Error("Number out of range (0-99)");
  }

  if (n < 20) {
    return basicNumbers[n];
  }

  const tens = Math.floor(n / 10);
  const units = n % 10;

  if (units === 0) {
    return tensNumbers[tens - 2];
  }

  return `${tensNumbers[tens - 2]}-${basicNumbers[units]}`;
};
