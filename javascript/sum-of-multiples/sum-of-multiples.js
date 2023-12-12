export const sum = (level, magicalItems) => {
  let points = 0;
  const multiples = new Set();

  magicalItems.forEach((item) => {
    const baseValue = item;

    for (let i = baseValue; i < level; i += baseValue) {
      multiples.add(i);
    }
  });

  for (let num of multiples) {
    points += num;
  }

  return points;
};
