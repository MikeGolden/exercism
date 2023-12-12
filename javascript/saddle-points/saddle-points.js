export const saddlePoints = (matrix) => {
  const saddlePoints = [];

  // Iterate through each cell of the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const currentHeight = matrix[row][col];
      let isSaddlePoint = true;

      // Check if current cell is the largest in its row
      for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[row][i] > currentHeight) {
          isSaddlePoint = false;
          break;
        }
      }

      // Check if current cell is the smallest in its column
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][col] < currentHeight) {
          isSaddlePoint = false;
          break;
        }
      }

      // If current cell meets criteria, add as a potential saddle point
      if (isSaddlePoint) {
        saddlePoints.push([row, col]);
      }
    }
  }

  return saddlePoints;
};
