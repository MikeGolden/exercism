export const translate = (english) => {
  const words = english.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];

  const isVowel = (char) => vowels.includes(char.toLowerCase());
  const isConsonantCluster = (word) => {
    for (let i = 0; i < word.length; i++) {
      if (isVowel(word[i])) {
        return i > 0;
      }
    }
    return false;
  };

  const translateWord = (word) => {
    if (isVowel(word[0]) || word.startsWith("xr") || word.startsWith("yt")) {
      return word + "ay";
    } else if (isConsonantCluster(word) || word.startsWith("qu")) {
      let consonantCluster = "";
      let i = 0;
      while (
        i < word.length &&
        (isConsonantCluster(word.substring(i)) || word.startsWith("qu", i))
      ) {
        consonantCluster += word[i];
        i++;
      }
      return word.substring(i) + consonantCluster + "ay";
    } else {
      return word.substring(1) + word[0] + "ay";
    }
  };

  return words.map(translateWord).join(" ");
};
