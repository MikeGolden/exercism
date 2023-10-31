export class Robot {
  // Static property to store used robot names
  static _namePool = new Map();

  constructor() {
    this._name = this._newName(); // Initialize a new robot with a unique name
  }

  // Generate a random robot name
  _randomName() {
    const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; // List of capital letters
    const numbers = [..."0123456789"]; // List of digits

    return (
      letters[~~(Math.random() * 26)] + // Generate a random uppercase letter
      letters[~~(Math.random() * 26)] + // Generate another random uppercase letter
      numbers[~~(Math.random() * 10)] + // Generate a random digit
      numbers[~~(Math.random() * 10)] + // Generate another random digit
      numbers[~~(Math.random() * 10)] // Generate one more random digit
    );
  }

  // Create a new unique robot name
  _newName() {
    let name;
    do {
      name = this._randomName();
    } while (Robot._namePool.has(name)); // Ensure the name is unique
    Robot._namePool.set(name, true); // Mark the name as used in the pool
    return name;
  }

  // Reset the robot's name to a new unique name
  reset() {
    this._name = this._newName();
  }

  // Get the current robot's name
  get name() {
    return this._name;
  }
}

// Static method to release all robot names from the pool
Robot.releaseNames = () => {
  Robot._namePool = new Map();
};
