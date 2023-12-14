// The function 'score' calculates the score of the dice for a given category in the Yacht game
export const score = (dice, category) => {
  // Sort the dice in ascending order for some category checks
  const sortedDice = dice.sort((a, b) => a - b);

  // Function to count the occurrences of a number in the rolled dice
  const countOccurrences = (num) => dice.filter((d) => d === num).length;

  // Function to sum all the rolled dice
  const sumAllDice = () => dice.reduce((acc, val) => acc + val, 0);

  // Function to check if the rolled dice satisfy the Full House category
  const isFullHouse = () => {
    const uniqueDice = new Set(dice);
    if (uniqueDice.size !== 2) return false;
    const counts = Array.from(uniqueDice).map((num) => countOccurrences(num));
    return counts.includes(2) && counts.includes(3);
  };

  // Switch case to determine the category and calculate the score accordingly
  switch (category) {
    case 'Ones':
      return countOccurrences(1);
    case 'Twos':
      return countOccurrences(2) * 2;
    case 'Threes':
      return countOccurrences(3) * 3;
    case 'Fours':
      return countOccurrences(4) * 4;
    case 'Fives':
      return countOccurrences(5) * 5;
    case 'Sixes':
      return countOccurrences(6) * 6;
    case 'Full House':
      return isFullHouse() ? sumAllDice() : 0;
    case 'Four of a Kind':
      for (let i = 1; i <= 6; i++) {
        if (countOccurrences(i) >= 4) return sumAllDice();
      }
      return 0;
    case 'Little Straight':
      return sortedDice.join('') === '12345' ? 30 : 0;
    case 'Big Straight':
      return sortedDice.join('') === '23456' ? 30 : 0;
    case 'Choice':
      return sumAllDice();
    case 'Yacht':
      return countOccurrences(dice[0]) === 5 ? 50 : 0;
    default:
      return 0;
  }
};
