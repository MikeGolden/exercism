export const convert = (input) => {
  const binaryFont = {
    " _ | ||_|": "0",
    "     |  |": "1",
    " _  _||_ ": "2",
    " _  _| _|": "3",
    "   |_|  |": "4",
    " _ |_  _|": "5",
    " _ |_ |_|": "6",
    " _   |  |": "7",
    " _ |_||_|": "8",
    " _ |_| _|": "9",
  };

  const lines = input.split("\n");
  if (lines.length % 4 !== 0 || lines[0].length % 3 !== 0) {
    throw new Error("Incorrect input size");
  }

  const convertBlock = (block) => {
    if (binaryFont.hasOwnProperty(block)) {
      return binaryFont[block];
    }
    return "?";
  };

  const convertToDigits = (blocks) => {
    const blocksArray = blocks.match(/.{3}/g);
    const digits = [];
    for (let i = 0; i < blocksArray.length; i += 3) {
      const digitBlock = blocksArray.slice(i, i + 3).join("\n");
      const digit = convertBlock(digitBlock);
      digits.push(digit);
    }
    return digits.join("");
  };

  const blockRows = lines.reduce((acc, line, index) => {
    const blockIndex = Math.floor(index / 4);
    if (!acc[blockIndex]) {
      acc[blockIndex] = "";
    }
    acc[blockIndex] += line;
    return acc;
  }, []);

  return blockRows.map(convertToDigits).join(",");
};
