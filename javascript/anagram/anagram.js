//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, list) => {
  const wordSorted = word.toLowerCase().split("").sort().join("");
  const anagrams = [];
  
  for (let i = 0; i < list.length; i++) {
    const sortedWord = list[i].toLowerCase().split("").sort().join("");
    if (
      wordSorted === sortedWord &&
      word.toLowerCase() !== list.toLowerCase()
    ) {
      anagrams.push(list[i]);
    }
  }
  return anagrams;
};
