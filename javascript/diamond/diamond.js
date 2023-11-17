export const rows = (text) => {
  // Calculate the distance from 'A' based on the input letter
  const limit = text.charCodeAt(0) - 65;

  // Create spaces to center the 'A' at the first row
  let spaces = ' '.repeat(limit);

  // Initialize the result array with the first row containing 'A'
  const result = [spaces + 'A' + spaces];

  // Loop to construct the upper half of the diamond
  for (let i = 1; i <= limit; i++) {
    // Calculate spaces to center the characters in each row
    spaces = ' '.repeat(limit - i);

    // Get the character for the current row
    const char = String.fromCharCode(i + 65);

    // Construct each row in the upper half of the diamond
    result.push(spaces + char + ' '.repeat(2 * i - 1) + char + spaces);
  }

  // Combine the upper half with the reversed upper half (excluding the last row)
  return result.concat(result.slice(0, -1).reverse());
}
