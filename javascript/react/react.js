class Cell {
  // Private properties prefixed with #
  #fn = () => null; // A function to derive the value
  #value = this.#fn(); // Initial value of the cell, derived from #fn
  #dependency; // Dependency cell for this cell
  #dependents = []; // Array to store dependent cells (callbacks)

  // Getter for the value of the cell
  get value() {
    return this.setValue(this.#fn); // Retrieves and sets the value based on the function
  }

  // Method to set the value of the cell
  setValue(value) {
    // Checks if the value is a function, if not, converts to a function that returns the value
    const newFn = typeof value === "function" ? value : () => value;
    const newValue = newFn();
    const valueChanges = this.#value !== newValue; // Checks if the value changed

    this.#value = newValue; // Updates the value
    this.#fn = newFn; // Updates the function to derive the value

    // If the value changes, updates the dependent cells' values recursively
    if (valueChanges) this.#dependents.forEach((cell) => cell.value);

    return this.#value; // Returns the current value
  }

  // Getter for the dependency cell
  get dependency() {
    return this.#dependency;
  }

  // Method to set the dependency cell for this cell
  setDependency(cell) {
    this.#dependency = cell;
    return this;
  }

  // Method to add a callback (dependent) to this cell
  addCallback(cb) {
    this.#dependents.push(cb.setDependency(this)); // Adds the callback cell and sets the dependency
  }

  // Method to remove a callback (dependent) from this cell
  removeCallback(cb) {
    const cbIndex =
      this.#dependents.findIndex((dependent) => dependent === cb) + 1 ||
      this.#dependents.length + 1;
    this.#dependents = this.#dependents
      .slice(0, cbIndex - 1)
      .concat(this.#dependents.slice(cbIndex));
  }
}

// InputCell extends Cell
export class InputCell extends Cell {
  constructor(value) {
    super(); // Calls the constructor of the base class (Cell)
    this.setValue(value); // Sets the value for the input cell
  }
}

// ComputeCell extends Cell
export class ComputeCell extends Cell {
  constructor(inputCells, fn) {
    super(); // Calls the constructor of the base class (Cell)

    // Adds each input cell as a dependency and sets the value using the provided function
    inputCells.forEach((cell) => cell.addCallback(this));
    this.setValue(() => fn(inputCells)); // Computes the value based on input cells using the function
  }
}

// CallbackCell extends Cell
export class CallbackCell extends Cell {
  #values = []; // Array to store values

  constructor(fn) {
    super(); // Calls the constructor of the base class (Cell)

    // Sets the value based on the dependency cell and pushes values to the #values array
    this.setValue(
      () => this.dependency && this.#values.push(fn(this.dependency))
    );
  }

  // Getter for the #values array
  get values() {
    return this.#values;
  }
}
