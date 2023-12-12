export const saddlePoints = (matrix) => {
  // Copy the matrix for rows and transpose the matrix for columns
  let rows = matrix;
  let columns = transpose(matrix);

  // Find the maximum values in each row and minimum values in each column
  let rowsMaximums = rows.map((row) => Math.max(...row));
  let columnMinimums = columns.map((column) => Math.min(...column));

  // Find the saddle points, where a cell is both a row maximum and a column minimum
  return rows.flatMap((row, x) =>
    row.flatMap((point, y) =>
      point === rowsMaximums[x] && point === columnMinimums[y]
        ? { row: x + 1, column: y + 1 } // Store coordinates of saddle points
        : []
    )
  );
};

// Function to transpose a matrix (switch rows and columns)
function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}
