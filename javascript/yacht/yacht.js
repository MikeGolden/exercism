// Hand class representing a set of dice
class Hand {
  constructor(hand) {
    // Sorting the hand to facilitate checks
    this.hand = hand;
    this.hand.sort();

    // Counting occurrences of each number in the hand
    this.counts = [0, 0, 0, 0, 0, 0, 0];
    for (const d of hand) {
      this.counts[d]++;
    }

    // Reversing the counts for each number to facilitate specific checks
    this.rev_counts = [[], [], [], [], [], []];
    for (let i = 1; i <= 6; ++i) {
      this.rev_counts[this.counts[i]].push(i);
    }
  }

  // Method to get the count of a specific number
  count(n) {
    return this.counts[n];
  }

  // Getter method to get the sum of all dice in the hand
  get sum() {
    return this.hand.reduce((s, d) => s + d, 0);
  }

  // Getter methods for specific categories
  get yacht() {
    return this.rev_counts[5][0];
  }

  get four_of_a_kind() {
    return this.rev_counts[4][0];
  }

  get pair() {
    return this.rev_counts[2][0];
  }

  get three() {
    return this.rev_counts[3][0];
  }

  // Getter method to check for a straight sequence
  get straight() {
    return ["12345", "23456"].includes(this.hand.join(""))
      ? this.hand[0]
      : undefined;
  }
}

// Function to calculate the score based on category and dice values
export const score = (dices, category) => {
  const hand = new Hand(dices); // Creating a Hand object

  // Switch case to determine the category and calculate the score accordingly
  switch (category) {
    case "yacht":
      return hand.yacht ? 50 : 0;
    case "choice":
      return hand.sum;
    case "ones":
      return hand.count(1);
    case "twos":
      return hand.count(2) * 2;
    case "threes":
      return hand.count(3) * 3;
    case "fours":
      return hand.count(4) * 4;
    case "fives":
      return hand.count(5) * 5;
    case "sixes":
      return hand.count(6) * 6;
    case "four of a kind":
      if (hand.yacht) {
        return hand.yacht * 4;
      }
      if (hand.four_of_a_kind) {
        return hand.four_of_a_kind * 4;
      }
      return 0;
    case "full house":
      if (hand.pair && hand.three) {
        return hand.sum;
      }
      return 0;
    case "little straight":
      return hand.straight === 1 ? 30 : 0;
    case "big straight":
      return hand.straight === 2 ? 30 : 0;
  }
};
