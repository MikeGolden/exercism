function indexOfRails(index, railsCount) {
  const cycle = railsCount * 2 - 2;
  const cycleLeft = index % cycle;
  if (cycleLeft >= railsCount) {
    return cycle - cycleLeft;
  }
  return cycleLeft;
}

export const encode = (input, rails) => {
  let fence = new Array(rails)
    .fill("")
    .map(() => new Array(input.length).fill("."));

  input.split("").forEach((char, index) => {
    const indexOfCycle = indexOfRails(index, rails);
    fence[indexOfCycle][index] = char;
  });

  return fence
    .flat()
    .filter((el) => el !== ".")
    .join("");
};

export const decode = (input, rails) => {
  let inputArr = input.split("");
  const cycle = rails * 2 - 2;

  let fence = new Array(rails)
    .fill("")
    .map(() => new Array(input.length).fill("."));

  inputArr.forEach((char, index) => {
    const indexOfCycle = indexOfRails(index, rails);
    fence[indexOfCycle][index] = "?";
  });

  for (let i = 0; i < fence.length; i++) {
    for (let j = 0; j < fence[i].length; j++) {
      if (fence[i][j] === "?") {
        fence[i][j] = inputArr[0];
        inputArr.shift();
      }
    }
  }

  let result = new Array(inputArr.length);
  for (let i = 0; i < fence.length; i++) {
    for (let j = 0; j < fence[i].length; j++) {
      if (fence[i][j] !== ".") {
        result[j] = fence[i][j];
      }
    }
  }

  return result.join("");
};
