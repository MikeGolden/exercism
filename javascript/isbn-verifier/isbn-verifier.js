export const isValid = (isbn) => {
  // Remove dashes and convert to array of characters
  const isbnArray = isbn.replace(/-/g, "").split("");

  // Check if the length is valid
  if (isbnArray.length !== 10) {
    return false;
  }

  // Check if the last character if 'X' and replace it with 10
  if (isbnArray[9] === "X") {
    isbnArray[9] = "10";
  }

  // Convert characters to numbers
  const numbers = isbnArray.map((char) => parseInt(char, 10));

  // Check if all characters are valid numbers
  if (numbers.includes(NaN)) {
    return false;
  }

  // Calculate the sum using the ISBN-10 formula
  const sum = numbers.reduce((acc, num, index) => acc + num * (10 - index), 0);

  // Check if the sum is divisible by 11
  return sum % 11 === 0;
};
