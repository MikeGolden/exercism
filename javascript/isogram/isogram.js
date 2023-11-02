export const isIsogram = (word) => {
  // Convert the input word to lowercase
  word = word.toLowerCase();

  // Remove any spaces of hyphens from the word
  word = word.split(/[\s-]/g).join('');

  // Use the filter method to remove any repeating characters from the word
  const filteredWord = word.split('').filter((char, index, self) => self.indexOf(char) === index);
  
  return filteredWord.length === word.length;
};
