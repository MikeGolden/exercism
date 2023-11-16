export const recite = () => {
  const gifts = [
    "a partridge in a pear tree",
    "two turtle doves",
    "three French hens",
    "four calling birds",
    "five golden rings",
    "six geese a-laying",
    "seven swans a-swimming",
    "eight maids a-milking",
    "nine ladies dancing",
    "ten lords a-leaping",
    "eleven pipers piping",
    "twelve drummers drumming",
  ];

  const days = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
  ];

  let lyrics = "";
  for (let i = 0; i < 12; i++) {
    lyrics += `On the ${days[i]} day of Christmas, my true love gave to me\n`;
    for (let j = i; j >= 0; j--) {
      if (j === 0 && i !== 0) {
        lyrics += `And ${gifts[j]}\n`;
      } else {
        lyrics += `${gifts[j]}\n`;
      }
    }
    if (i !== 11) {
      lyrics += "\n";
    }
  }

  return lyrics;
};
