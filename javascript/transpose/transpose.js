export const transpose = (textstring) => {
  // Split the text into lines
  const lines = textstring.split("\n");

  // Find the length of the longest line
  const maxLength = lines.reduce((max, line) => Math.max(max, line.length), 0);

  // Pad all lines with spaces to make them the same length
  lines.forEach((line, i) => (lines[i] = line.padEnd(maxLength, " ")));

  // Transpose the text by swapping characters in each column
  let transposedText = "";
  for (let i = 0; i < maxLength; i++) {
    for (let line of lines) {
      transposedText += line[i];
    }
    transposedText += "\n";
  }

  // Format the transposed text as a string and return it
  return transposedText.trim();
};
