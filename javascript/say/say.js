// Object containing English names for numbers from 0 to 90
const NUM = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

// Function to spell out a number in English words
export const say = (n) => {
  let wordArr = [];
  let str = "";

  // Handling negative numbers
  if (n < 0) throw new Error("Number must be between 0 and 999,999,999,999.");

  // Breaking the number into chunks of thousands
  while (n > 0) {
    wordArr.push(triplet(n % 1000));
    n = Math.floor(n / 1000);
  }

  // Handling the edge case when the number is 0
  if (wordArr.length === 0) return NUM[0];

  // Generating the English representation of the number
  for (let i = wordArr.length - 1; i >= 0; i--) {
    console.log(i);
    switch (i) {
      case 3:
        if (wordArr[i] !== "") str += wordArr[i] + " billion";
        break;
      case 2:
        if (wordArr[i] !== "") str += wordArr[i] + " million";
        break;
      case 1:
        if (wordArr[i] !== "") str += wordArr[i] + " thousand";
        break;
      case 0:
        if (wordArr[i] !== "") str += wordArr[i];
        break;
      default:
        throw new Error("Number must be between 0 and 999,999,999,999.");
        break;
    }
  }

  return str.substring(1);
};

// Function to convert a three-digit number into English words
function triplet(t) {
  let str = "";

  // Handling hundreds place
  if (t >= 100) {
    str += " " + NUM[Math.floor(t / 100)] + " hundred";
    t %= 100;
  }

  // Handling tens and ones place
  if (t > 20 && t % 10 !== 0) {
    str += " " + NUM[Math.floor(t / 10) * 10] + "-";
    t %= 10;
  }

  if (t !== 0 && str === "") str += " " + NUM[t];
  else if (t !== 0) str += NUM[t];
  return str;
}
