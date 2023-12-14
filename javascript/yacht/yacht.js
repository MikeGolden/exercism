class Hand {
  constructor(hand) {
    this.hand = hand;
    this.hand.sort();
    this.counts = [0, 0, 0, 0, 0, 0, 0];
    for (const d of hand) {
      this.counts[d]++;
    }
    this.rev_counts = [[], [], [], [], [], []];
    for (let i = 1; i <= 6; ++i) {
      this.rev_counts[this.counts[i]].push(i);
    }
  }

  count(n) {
    return this.counts[n];
  }

  get sum() {
    return this.hand.reduce((s, d) => s + d, 0);
  }

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

  get straight() {
    return ["12345", "23456"].includes(this.hand.join(""))
      ? this.hand[0]
      : undefined;
  }
}

export const score = (dices, category) => {
  const hand = new Hand(dices);
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

