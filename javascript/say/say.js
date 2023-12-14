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

export const say = (n) => {
  let wordArr = [];
  let str = "";

  if (n < 0) throw new Error("Number must be between 0 and 999,999,999,999.");

  while (n > 0) {
    wordArr.push(triplet(n % 1000));
    n = Math.floor(n / 1000);
  }

  if (wordArr.length === 0) return NUM[0];

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

function triplet(t) {
  let str = "";

  if (t >= 100) {
    str += " " + NUM[Math.floor(t / 100)] + " hundred";
    t %= 100;
  }
  if (t > 20 && t % 10 !== 0) {
    str += " " + NUM[Math.floor(t / 10) * 10] + "-";
    t %= 10;
  }

  if (t !== 0 && str === "") str += " " + NUM[t];
  else if (t !== 0) str += NUM[t];
  return str;
}

