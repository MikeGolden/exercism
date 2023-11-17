export const rows = (letter) => {
  if (letter === "A") {
    return "A\n";
  }

  const distance = letter.charCodeAt(0) - "A".charCodeAt(0);
  const width = distance * 2 + 1;
  let result = "";

  for (let i = 0; i < width; i++) {
    const currentChar = String.fromCharCode(
      "A".charCodeAt(0) + Math.abs(distance - i),
    );
    const spaces = " ".repeat(Math.abs(distance - i));
    result += spaces + currentChar + spaces + "\n";
  }

  return result;
};
