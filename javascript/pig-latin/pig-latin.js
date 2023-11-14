const vowels = ['a', 'e', 'i', 'o', 'u', 'yt', 'xr'];
const combos = ['ch', 'qu', 'th', 'thr', 'sch', 'rh']

export const translate = (sentence) => {
  return sentence.split(' ').map(translateWord).join(' ')
};

const shiftHead = (word, n) => {
  return word.slice(n) + word.substring(0, n)
}

function translateWord(word) {
  let headSize = 1;
  
  vowels.forEach(vowel => { 
    if (word.startsWith(vowel)) headSize = 0;
  })
  
  combos.forEach(combo => {
    if (word.startsWith(combo)) 
      headSize = combo.length;
  })
  
  if (headSize === 1 && word.match(/^\wqu/) != null) headSize = 3;
  return shiftHead(word, headSize) + "ay";
}