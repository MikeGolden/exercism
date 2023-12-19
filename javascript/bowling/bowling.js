export class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    const isStrike = () => this.rolls[rollIndex] === 10;
    const strikeBonus = () =>
      this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    const isSpare = () =>
      this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    const spareBonus = () => this.rolls[rollIndex + 2];
    const sumOfPinsInFrame = () =>
      this.rolls[rollIndex] + this.rolls[rollIndex + 1];

    for (let frame = 0; frame < 10; frame++) {
      if (isStrike()) {
        totalScore += 10 + strikeBonus();
        rollIndex++;
      } else if (isSpare()) {
        totalScore += 10 + spareBonus();
        rollIndex += 2;
      } else {
        totalScore += sumOfPinsInFrame();
        rollIndex += 2;
      }
    }

    return totalScore;
  }
}
