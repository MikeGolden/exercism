export const commands = (input) => {
  // Define the actions corresponding to each digit
  const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
  
  // Convert the input number to a binary string and pad it with zeros on the left to ensure ti has 5 digits
  const binary = input.toString(2).padStart(5, '0');

  // Split the binary string into an array of digits, reverse the array, and map each digit to its corresponding action
  const sequence = binary.split('').reverse().map((digit, index) => {
    // If the digit is 1, map it to its corresponding action
    if (digit === '1') {
      return actions[index];
    }
  // Remove any undefined values from the array, which occur when the digit is 0
  }).filter(Boolean);

  // If the 5th digit from the right is 1, reverse the sequence
  if (binary[0] === '1') {
    return sequence.reverse();
  }

  // Return the sequence
  return sequence;
};
