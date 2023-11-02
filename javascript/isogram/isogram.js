export const isIsogram = (word) => {
  // Convert the input word to lowercase
  word = word.toLowerCase();

  // Remove any spaces of hyphens from the word
  word = word.replace(/[\s-]/g, '');

  // Check if the word contains any repeating characters
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      return false;
    }
  }

  return true;
};
