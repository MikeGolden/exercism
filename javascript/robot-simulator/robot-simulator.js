export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || "Invalid Input";
  }
}

export class Robot {
  // Constants for cardinal directions and instructions
  static NORTH = "north";
  static EAST = "east";
  static SOUTH = "south";
  static WEST = "west";
  static BEARINGS = [Robot.NORTH, Robot.EAST, Robot.SOUTH, Robot.WEST];
  static INSTRUCTIONS = {
    A: "advance",
    L: "turnLeft",
    R: "turnRight",
  };

  // Static method to convert chain of instructions to instruction names
  static instructions(chain) {
    return [...chain].map((instruction) => Robot.INSTRUCTIONS[instruction]);
  }

  // Private properties
  #bearing = Robot.NORTH;
  #coordinates;

  // Getter for bearing
  get bearing() {
    return this.#bearing;
  }

  // Getter for coordinates
  get coordinates() {
    return [...this.#coordinates];
  }

  // Set the robot's orientation (bearing)
  orient(bearing) {
    // Throw error for invalid bearing
    if (!Robot.BEARINGS.includes(bearing)) throw new InvalidInputError();
    this.#bearing = bearing;
  }

  // Set the robot's initial coordinates
  at(...coordinates) {
    this.#coordinates = coordinates;
  }

  // Turn the robot right based on current orientation
  turnRight() {
    this.orient(
      Robot.BEARINGS[
        (Robot.BEARINGS.indexOf(this.#bearing) + 1) % Robot.BEARINGS.length
      ],
    );
  }

  // Turn the robot left based on current orientation
  turnLeft() {
    this.orient(
      Robot.BEARINGS[
        (Robot.BEARINGS.indexOf(this.#bearing) + 3) % Robot.BEARINGS.length
      ],
    );
  }

  // Move the robot forward based on its orientation
  advance() {
    switch (this.bearing) {
      case Robot.NORTH:
        return this.#coordinates[1]++;
      case Robot.EAST:
        return this.#coordinates[0]++;
      case Robot.SOUTH:
        return this.#coordinates[1]--;
      case Robot.WEST:
        return this.#coordinates[0]--;
    }
  }

  // Place the robot at a specific position and orientation
  place({ x, y, direction }) {
    this.orient(direction);
    this.at(x, y);
  }

  // Evaluate a chain of instructions
  evaluate(chain) {
    Robot.instructions(chain).forEach((instruction) => this[instruction]());
  }
}
