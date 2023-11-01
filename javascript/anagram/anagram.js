// The `findAnagrams` function takes a `word` and a `list` of words and returns an array of anagrams of the `word` from the `list`.

export const findAnagrams = (word, list) => {
  // Convert the input `word` to lowercase, split it into an array of characters, sort the characters, and then join them back into a string.
  const wordSorted = word.toLowerCase().split("").sort().join("");
  const anagrams = [];

  // Iterate through the `list` of words.
  for (let i = 0; i < list.length; i++) {
    // For each word in the list, convert it to lowercase, split it into an array of characters, sort the characters, and then join them back into a string.
    const sortedWord = list[i].toLowerCase().split("").sort().join("");

    // Compare the sorted word with the sorted input `word` to check if they are anagrams.
    // Also, ensure that the compared words are not the same by checking their lowercase versions.
    if (
      wordSorted === sortedWord &&
      word.toLowerCase() !== list[i].toLowerCase()
    ) {
      // If they are anagrams and not the same word, add the word to the `anagrams` array.
      anagrams.push(list[i]);
    }
  }
  // Return the array of anagrams.
  return anagrams;
};
