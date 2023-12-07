export const convert = (numberStr, fromBase, toBase) => {
  if (isNaN(numberStr) || numberStr === "") {
    throw new Error("Invalid input");
  }

  if (fromBase === toBase) {
    return numberStr;
  }

  const number = parseInt(numberStr, fromBase);
  const digits = [];

  while (number > 0) {
    digits.push(number % toBase);
    number = Math.floor(number / toBase);
  }

  return digits
    .reverse()
    .map((digit) => String.fromCharCode(digit + "0"))
    .join("");
};
