//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Define a class named 'Matrix'
export class Matrix {
  // Constructor for the Matrix class
  constructor(matrix) {
    // Initialize the 'matrix' property with the provided matrix data
    this.matrix = matrix;
  }

  // Define a 'rows' getter method to retrieve the matrix as rows
  get rows() {
    // Split the matrix string into an array of rows using newline character '\n',
    // then split each row into an array of numbers using space " " as a separator,
    // and map each value to a Number type to ensure they are numeric.
    return this.matrix.split('\n').map((row) => row.split(" ").map(Number));
  }

  // Define a 'columns' getter method to retrieve the matrix as columns
  get columns() {
    // Transpose the rows to columns by mapping each column index (i) to an array
    // that contains the values from that column across all rows.
    return this.rows[0].map((_, i) => this.rows.map((row) => row[i]));
  }
}
