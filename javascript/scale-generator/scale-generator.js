export class Scale {
  constructor(tonic) {
    // Convert the tonic to uppercase 
    this.tonic = tonic.toUpperCase();

    // Generate the chromatic scale 
    this.chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  }

  chromatic() {
    // Return the chromatic scale
    return this.chromaticScale;
  }

  interval(intervals) {
    // Determine the index of the tonic in the chromatic scale
    let index = this.chromaticScale.indexOf(this.tonic);

    // Generate the scale
    const scale = intervals.split('').map(interval => {
      switch (interval) {
        case 'M':
          index += 2;
          break;
        case 'm':
          index += 1;
          break;
      }
      // Return the note at the new index
      return this.chromaticScale[index % 12];
    });

    return scale;
  }
}
