export const rotate = (text, key) => {
  // Convert the text to uppercase
  const upperText = text.toLowerCase();

  // Replace each letter in the text with a letter that is shifted by the key in the alphabet
  const result = upperText.replace(/[A-Z]/g, (c) =>
    String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65),
  );

  // Return the result
  return result;
};
