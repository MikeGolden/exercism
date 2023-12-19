export class Bowling {
  frames = [];

  roll(points) {
    if (points < 0) throw new Error("Negative roll is invalid");
    if (points > 10) throw new Error("Pin count exceeds pins on the lane");
    if (this.frames > 10) throw new Error("Pin count exceeds pins on the lane");
    if (this.isGameFinished())
      throw new Error("Cannot roll after game is over");

    const lastFrame = this.getLastFrame();

    if (this.isNewFrame()) {
      this.frames.push([points]);
    } else if (this.frames.length < 10) {
      if (lastFrame[0] + points > 10)
        throw new Error("Pin count exceeds pins on the lane");
      lastFrame.push(points);
    } else if (
      lastFrame[0] === 10 &&
      lastFrame[1] !== 10 &&
      lastFrame[1] + points > 10
    ) {
      throw new Error("Pin count exceeds pins on the lane");
    } else {
      lastFrame.push(points);
    }
  }

  score() {
    if (!this.isGameFinished())
      throw new Error("Score cannot be taken until the end of the game");

    return this.frames
      .map((frame, i, arr) => {
        console.log(frame);
        const isLastFrame = i === 9;
        if (isLastFrame || this.isOpenFrame(frame))
          return frame.reduce(sumReducer, 0);
        else if (this.isFrameSpare(frame)) return 10 + arr[i + 1][0];
        else
          return arr[i + 1].length > 1
            ? 10 + arr[i + 1][0] + arr[i + 1][1]
            : 10 + arr[i + 1][0] + arr[i + 2][0];
      })
      .reduce(sumReducer, 0);
  }

  isFirstFrame() {
    return this.frames.length === 0;
  }

  isNewFrame() {
    const lastFrame = this.getLastFrame();
    return (
      !this.isLastFrame(lastFrame) &&
      (this.isFirstFrame() || this.isFrameFinished(lastFrame))
    );
  }

  getLastFrame() {
    return this.frames[this.frames.length - 1];
  }

  getLastFrameScore(frame) {
    return this.getLastFrame().reduce(sumReducer, 0);
  }

  isFrameFinished(frame) {
    return (
      this.isFrameStrike(frame) ||
      this.isFrameSpare(frame) ||
      this.isOpenFrame(frame)
    );
  }

  isFrameStrike(frame) {
    return frame[0] === 10;
  }

  isFrameSpare(frame) {
    return frame[0] + frame[1] === 10;
  }

  isOpenFrame(frame) {
    return frame.length === 2 && frame.reduce(sumReducer, 0) < 10;
  }

  isLastFrame(frame) {
    return this.frames.length > 9;
  }

  isGameFinished() {
    return (
      this.frames.length === 10 &&
      (this.frames[9].length === 3 ||
        (this.frames[9].length === 2 &&
          this.frames[9][0] + this.frames[9][0] < 10))
    );
  }
}

const sumReducer = (acc, score) => acc + score;

