// Declare the `convert` function that takes an array of digits, the source base, and the target base as parameters
export const convert = (digits, fromBase, toBase) => {

  // Validate the source base
  if (fromBase < 2) {
    // Throw an error if the source base is less than 2
    throw new Error('Wrong input base');
  }

  // Validate the target base
  if (toBase < 2) {
    // Throw an error if the target base is less than 2
    throw new Error('Wrong output base');
  }

  // Handle the special case where the number is 1
  if (digits.length === 1 && digits[0] * digits[0] === digits[0]) {
    // If the number is 1, return the array
    return digits;
  }

  // Check for invalid input
  if (digits.length === 0 || digits[0] === 0 || digits.some(d => d < 0 || d >= fromBase)) {
    // Throw an error if the input array is empty, starts with 0, or contains invalid digits
    throw new Error('Input has wrong format');
  }

  // Convert the number from the source base to the target base
  let value = digits.reduce((acc, d) => acc * fromBase + d, 0);

  // Create an array to store the resulting digits in the target base
  const result = [];

  // Iterate until the value is non-zero
  while (value) {
    // Add the remainder of the division by the target base to the result array
    result.unshift(value % toBase);

    // Truncate the value to the quotient of the division by the target base
    value = Math.floor(value / toBase);
  }

  // Return the array of converted digits in the target base
  return result;
};