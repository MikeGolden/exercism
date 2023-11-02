const SHARP_SCALE = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const FLAT_SCALE = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
const USES_FLAT = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"];
const INTERVAL_MAPPINGS = {
  "m": 1,
  "M": 2,
  "A": 3
};

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
    this.scale = USES_FLAT.includes(tonic) ? FLAT_SCALE : SHARP_SCALE;
    tonic = tonic[0].toUpperCase() + (tonic.length == 1 ? "" : tonic[1]);
    this.indexOfTonic = this.scale.indexOf(tonic);
  }

  chromatic() {
    return Array(12).fill().map((note, index) => {
      const newNoteIndex = setWithinRange(this.indexOfTonic + index, this.scale.length);
      return this.scale[newNoteIndex];
    });
  }

  interval(intervals) {
    const result = [this.scale[this.indexOfTonic]];
    intervals.split("").forEach(interval => {
      const step = INTERVAL_MAPPINGS[interval];
      const lastNoteIndex = this.scale.indexOf(result[result.length - 1]);
      const newNoteIndex = setWithinRange(lastNoteIndex + step, this.scale.length);
      result.push(this.scale[newNoteIndex]);
    });
    return result;
  }
}

function setWithinRange(number, max) {
  return (number % max + max) % max;
}