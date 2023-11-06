export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    const slices = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      slices.push(this.series.substring(i, i + sliceLength));
    }

    return slices;
  }
}
