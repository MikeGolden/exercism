export const sum = (level, magicalItems) => {
  let points = 0;
  const multiples = new Set();

  // Iterate through each magical item
  magicalItems.forEach(item => {
    const baseValue = item;

    // Find all multiples of the base value less than the level
    for (let i = baseValue; i < level; i += baseValue) {
      multiples.add(i); // Add unique multiples to a Set
    }
  });

  // Sum all unique multiples in the Set
  for (let num of multiples) {
    points += num;
  }

  return points;
};