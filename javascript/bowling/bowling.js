export class Bowling {
  constructor() {
    // Array to hold the number of pins knocked down in each roll
    this.rolls = [];
  }

  // Method to record the number of pins knocked down in each roll
  roll(pins) {
    this.rolls.push(pins);
  }

  // Method to calculate the total score of the game
  score() {
    let totalScore = 0; // Initializing total score to zero
    let rollIndex = 0; // Initializing roll index for tracking rolls

    // Helper functions to check frame types and calculate bonuses
    const isStrike = () => this.rolls[rollIndex] === 10;
    const strikeBonus = () => this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    const isSpare = () => this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    const spareBonus = () => this.rolls[rollIndex + 2];
    const sumOfPinsInFrame = () => this.rolls[rollIndex] + this.rolls[rollIndex + 1];

    // Loop through the frames to calculate the total score
    for (let frame = 0; frame < 10; frame++) {
      if (isStrike()) {
        // If it's a strike, add 10 plus the next two rolls' scores to the total score
        totalScore += 10 + strikeBonus();
        rollIndex++; // Move to the next frame
      } else if (isSpare()) {
        // If it's a spare, add 10 plus the next roll's score to the total score
        totalScore += 10 + spareBonus();
        rollIndex += 2; // Move to the next frame
      } else {
        // If it's an open frame, add the sum of the two rolls to the total score
        totalScore += sumOfPinsInFrame();
        rollIndex += 2; // Move to the next frame
      }
    }

    return totalScore; // Return the final total score of the game
  }
}
