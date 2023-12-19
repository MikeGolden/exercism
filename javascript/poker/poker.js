export const bestHands = (hands) => {
  const ranks = {
    "Royal Flush": 10,
    "Straight Flush": 9,
    "Four of a Kind": 8,
    "Full House": 7,
    Flush: 6,
    Straight: 5,
    "Three of a Kind": 4,
    "Two Pairs": 3,
    "One Pair": 2,
    "High Card": 1,
  };

  const evaluateHand = (hand) => {
    const cards = hand.split(" ");
    const values = cards.map((card) => card[0]);
    const suits = cards.map((card) => card[1]);

    const isFlush = suits.every((suit) => suit === suits[0]);
    const sortedValues = values.sort((a, b) => a - b);

    const straightValues = "A23456789TJQKA";
    const isStraight = straightValues.includes(sortedValues.join(""));

    const counts = {};
    values.forEach((value) => {
      counts[value] = counts[value] ? counts[value] + 1 : 1;
    });

    const numCounts = Object.values(counts);
    const maxCount = Math.max(...numCounts);

    if (isFlush && isStraight && sortedValues[0] === "A") {
      return { rank: ranks["Royal Flush"], cards };
    }
    if (isFlush && isStraight) {
      return { rank: ranks["Straight Flush"], cards };
    }
    if (maxCount === 4) {
      return { rank: ranks["Four of a Kind"], cards };
    }
    if (numCounts.includes(3) && numCounts.includes(2)) {
      return { rank: ranks["Full House"], cards };
    }
    if (isFlush) {
      return { rank: ranks["Flush"], cards };
    }
    if (isStraight) {
      return { rank: ranks["Straight"], cards };
    }
    if (maxCount === 3) {
      return { rank: ranks["Three of a Kind"], cards };
    }
    if (numCounts.filter((count) => count === 2).length === 2) {
      return { rank: ranks["Two Pairs"], cards };
    }
    if (numCounts.includes(2)) {
      return { rank: ranks["One Pair"], cards };
    }
    return { rank: ranks["High Card"], cards };
  };

  const evaluatedHands = hands.map((hand) => evaluateHand(hand));
  const highestRank = Math.max(...evaluatedHands.map((h) => h.rank));
  const bestHands = evaluatedHands.filter((h) => h.rank === highestRank);

  return bestHands.map((h) => h.cards.join(" "));
};
