export const saddlePoints = (matrix) => {
  const saddlePoint = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const currentHeight = matrix[row][col];
      let isSaddlePoint = true;

      for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[row][i] > currentHeight) {
          isSaddlePoint = false;
          break;
        }
      }

      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][col] < currentHeight) {
          isSaddlePoint = false;
          break;
        }
      }

      if (isSaddlePoint) {
        saddlePoint.push([row, col]);
      }
    }
  }

  return saddlePoint;
};
