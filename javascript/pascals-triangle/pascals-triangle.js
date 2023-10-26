//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  const triangle = []; // Initialize an empty array to represent Pascal's Triangle

  for (let i = 0; i < numRows; i++) {
    triangle[i] = []; // Initialize a sub-array for each row in the triangle

    for (let j = 0; j < i + 1; j++) {
      // Iterate through each element in the current row
      if (j === 0 || j === i) {
        // If it's the first or last element of the row, set it to 1
        triangle[i][j] = 1;
      } else {
        // Otherwise, calculate the value based on the values from the previous row
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }

  return triangle; // Return the complete Pascal's Triangle
};