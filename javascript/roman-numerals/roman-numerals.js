export const toRoman = (num) => {
  // Create an array of Roman numerals in descending order
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syb = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // Traverse the array
  let roman_num = "";
  for (let i = 0; i < val.length; i++) {
    // For each numeral, while the number is greater than or equal the value of the numeral
    while (num >= val[i]) {
      // Substract the value of the numeral from the number
      num -= val[i];
      // Append the numeral to the result
      roman_num += syb[i];
    }
  }

  return roman_num;
};
