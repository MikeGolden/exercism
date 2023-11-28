export class InputCell {
  constructor(value) {
    this.value = value;
    this.callbacks = new Set();
  }

  setValue(value) {
    if (this.value !== value) {
      this.value = value;
      this.callbacks.forEach((cb) => cb());
    }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.fn = fn;
    this.inputCells = inputCells;
    this.value = this.computeValue();
    this.callbacks = new Set();

    this.inputCells.forEach((cell) => {
      cell.addCallback(() => this.recompute());
    });
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }

  computeValue() {
    return this.fn(...this.inputCells.map((cell) => cell.value));
  }

  recompute() {
    const newValue = this.computeValue();
    if (this.value !== newValue) {
      this.value = newValue;
      this.callbacks.forEach((cb) => cb());
    }
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
  }
}
