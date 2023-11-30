// Constant value for Kilo
const KILO = 1000;

// Class to decode resistor color trio
export class ResistorColorTrio {
  // Array of resistor color codes
  static COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  // Function to decode the color values to a numerical resistor value
  static decodeValue = colors => +colors.reduce((value, color, i) => {
    // Get the code for the color
    const code = ResistorColorTrio.COLORS.indexOf(color);
    // Throw error if the color is invalid
    if (code === -1) throw new Error('invalid color');
    // Calculate the numerical value based on color codes
    return value + (i === 2 ? '0'.repeat(code) : code);
  }, '');

  // Private property for the numerical value of the resistor
  #value;

  // Constructor to initialize the ResistorColorTrio with colors
  constructor(colors) {
    // Decode the colors and assign the calculated value to #value
    this.#value = ResistorColorTrio.decodeValue(colors);
  }

  // Getter method to retrieve the label of the resistor
  get label() {
    // Calculate the resistor value and display the label
    return `Resistor value: ${this.#value % KILO + ~~(this.#value / KILO)} ${this.#value > KILO ? 'kilo' : ''}ohms`;
  }
}
