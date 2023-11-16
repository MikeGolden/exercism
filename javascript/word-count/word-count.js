export const countWords = (subtitle) => {
  const cleanedSubtitle = subtitle.replace(/[^\w\s']g/, " ").toLowerCase();

  const words = cleanedSubtitle.split(/\s+/);

  const wordCount = new Map();

  words.forEach((word) => {
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  });

  return wordCount;
};
