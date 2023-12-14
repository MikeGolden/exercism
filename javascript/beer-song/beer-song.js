export const recite = (initialBottlesCount, takeDownCount) => {
  let lyrics = [];

  while (initialBottlesCount >= takeDownCount) {
    lyrics.push(
      `${initialBottlesCount} bottles of beer on the wall, ${initialBottlesCount} bottles of beer.`,
    );
    initialBottlesCount -= takeDownCount;

    const remaining = initialBottlesCount === 1 ? "bottle" : "bottles";
    const nextCount =
      initialBottlesCount > takeDownCount ? takeDownCount : initialBottlesCount;

    if (initialBottlesCount > 0) {
      lyrics.push(
        `Take ${nextCount} down and pass it around, ${initialBottlesCount} ${remaining} of beer on the wall.`,
      );
    } else {
      lyrics.push(
        "Take one down and pass it around, no more bottles of beer on the wall.",
      );
    }
  }

  if (initialBottlesCount === 0) {
    lyrics.push(
      "No more bottles of beer on the wall, no more bottles of beer.",
    );
    lyrics.push(
      "Go to the store and buy some more, 99 bottles of beer on the wall.",
    );
  }

  return lyrics;
};
