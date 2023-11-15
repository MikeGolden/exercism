export const encode = (text, rails) => {
  if (rails <= 1) {
    return text;
  }

  const fence = Array.from({ length: rails }, () =>
    Array(text.length).fill("."),
  );
  let row = 0;
  let direction = 1;

  for (let i = 0; i < text.length; i++) {
    fence[row][i] = text[i];
    row += direction;

    if (row === 0 || row === rails - 1) {
      direction *= -1;
    }
  }

  return fence.map((row) => row.join("")).join("");
};

export const decode = (text, rails) => {
  if (rails <= 1) {
    return text;
  }

  const fence = Array.from({ length: rails }, () =>
    Array(text.length).fill("."),
  );
  let row = 0;
  let direction = 1;

  for (let i = 0; i < text.length; i++) {
    fence[row][i] = "X";
    row += direction;

    if (row === 0 || row === rails - 1) {
      direction *= -1;
    }
  }

  let index = 0;
  for (let i = 0; i < rails; i++) {
    for (let j = 0; j < text.length; j++) {
      if (fence[i][j] === "X") {
        fence[i][j] = text[index++];
      }
    }
  }

  row = 0;
  direction = 1;
  let result = "";

  for (let i = 0; i < text.length; i++) {
    result += fence[row][i];
    row += direction;
    if (row === 0 || row === rails - 1) {
      direction *= -1;
    }
  }

  return result;
};
