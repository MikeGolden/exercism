// Define an array of vowels and vowel combinations
const vowels = ['a', 'e', 'i', 'o', 'u', 'yt', 'xr'];
// Define an array of consonant combinations
const combos = ['ch', 'qu', 'th', 'thr', 'sch', 'rh'];

// Main translation function
export const translate = (sentence) => {
  // Split the sentence into words, translate each word, and then join them back into a sentence
  return sentence.split(' ').map(translateWord).join(' ');
};

// Function to shift the head of a word
const shiftHead = (word, n) => {
  return word.slice(n) + word.substring(0, n);
}

// Function to translate an individual word to Pig Latin
function translateWord(word) {
  // Initialize the size of the word's head to 1
  let headSize = 1;
  
  // Check if the word starts with any vowel, set headSize accordingly
  vowels.forEach(vowel => { 
    if (word.startsWith(vowel)) headSize = 0;
  });
  
  // Check if the word starts with any consonant combination, set headSize accordingly
  combos.forEach(combo => {
    if (word.startsWith(combo)) 
      headSize = combo.length;
  });

  // Special case: if the word starts with 'qu' followed by a vowel, set headSize to 3
  if (headSize === 1 && word.match(/^\wqu/) != null) headSize = 3;

  // Return the translated word with 'ay' appended
  return shiftHead(word, headSize) + "ay";
}
