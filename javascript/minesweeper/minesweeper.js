export const annotate = (input) => {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    result[i] = "";

    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === " ") {
        let count = 0;

        for (let m = i - 1; m <= i + 1; m++) {
          for (let n = j - 1; n <= j + 1; n++) {
            if (
              m >= 0 &&
              n >= 0 &&
              m < input.length &&
              n < input[i].length &&
              input[m][n] === "*"
            ) {
              count++;
            }
          }
        }

        result[i] += count === 0 ? " " : count;
      } else {
        result[i] += input[i][j];
      }
    }
  }

  return result;
};

