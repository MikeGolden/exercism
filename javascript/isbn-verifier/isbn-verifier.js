export const isValid = (isbn) => {
  const isbnArray = isbn.replace(/-/g, "").split("");

  if (isbnArray.length !== 10) {
    return false;
  }

  if (isbnArray[9] === "X") {
    isbnArray[9] = "10";
  }

  const numbers = isbnArray.map((char) => parseInt(char, 10));
  if (numbers.includes(NaN)) {
    return false;
  }

  const sum = numbers.reduce((acc, num, index) => acc + num * (10 - index), 0);
  return sum % 11 === 0;
};
