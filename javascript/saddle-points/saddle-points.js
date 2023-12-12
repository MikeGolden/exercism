export const saddlePoints = (matrix) => {
  let rows = matrix;
  let columns = transpose(matrix);

  let rowsMaximums = rows.map((row) => Math.max(...row));
  let columnMinimums = columns.map((column) => Math.min(...column));

  return rows.flatMap((row, x) =>
    row.flatMap((point, y) =>
      point === rowsMaximums[x] && point === columnMinimums[y]
        ? { row: x + 1, column: y + 1 }
        : []
    )
  );
};

function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}