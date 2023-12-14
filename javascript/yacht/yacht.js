export const score = (dice, category) => {
  const sortedDice = dice.sort((a, b) => a - b);

  const countOccurences = (num) => dice.filter((d) => d === num).length;
  const sumAllDice = () => dice.reduce((acc, val) => acc + val, 0);

  const isFullHouse = () => {
    const uniqueDice = new Set(dice);
    if (uniqueDice.size !== 2) return false;
    const counts = Array.from(uniqueDice).map((num) => countOccurences(num));
    return counts.includes(2) && counts.includes(3);
  };

  switch (category) {
    case "Ones":
      return countOccurences(1);
    case "Twos":
      return countOccurences(2) * 2;
    case "Threes":
      return countOccurences(3) * 3;
    case "Fours":
      return countOccurences(4) * 4;
    case "Fives":
      return countOccurences(5) * 5;
    case "Sixes":
      return countOccurences(6) * 6;
    case "Full House":
      return isFullHouse() ? sumAllDice() : 0;
    case "Four of a Kind":
      for (let i = 1; i <= 6; i++) {
        if (countOccurences(i) >= 4) return sumAllDice();
      }
      return 0;
    case "Little Straight":
      return sortedDice.join("") === "12345" ? 30 : 0;
    case "Big Straight":
      return sortedDice.join("") === "23456" ? 30 : 0;
    case "Choice":
      return sumAllDice();
    case "Yacht":
      return countOccurences(dice[0]) === 5 ? 50 : 0;
    default:
      return 0;
  }
};
