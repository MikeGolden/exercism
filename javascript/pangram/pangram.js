//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  // Create a set to keep track of encountered letters
  const letterSet = new Set();

  // Convert the sentence to lowercase for case insensitivity
  const lowerCaseSentence = sentence.toLowerCase();

  // Iterate through each character in the sentence
  for (let char in lowerCaseSentence) {
    // Check if the character is a letter (a to z)
    if (/[a-z]/.test(char)) {
      letterSet.add(char); // Add the letter to the set 
    }
  }

  // Check if all 26 letters have been encountered
  return letterSet.size === 26;
};
