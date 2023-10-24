// @ts-check

/**
 * Represents the size of a window.
 * @param {number} width - The width of the window.
 * @param {number} height - The height of the window.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

// Add a method to resize the window.
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * Represents the position of a window.
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

// Add a method to move the window to a new position.
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

/**
 * Represents a program window with size and position.
 */
export class ProgramWindow {
  constructor() {
    // Initialize the program window with default values.
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Resize the program window to a new size.
   * @param {Size} newSize - The new size.
   */
  resize(newSize) {
    let newWidth = newSize.width;

    // Ensure the new width is within bounds.
    if (newWidth < 1) newWidth = 1;
    else if (newWidth + this.position.x > this.screenSize.width) {
      newWidth = this.screenSize.width - this.position.x;
    }

    let newHeight = newSize.height;

    // Ensure the new height is within bounds.
    if (newHeight < 1) newHeight = 1;
    else if (newHeight + this.position.y > this.screenSize.height) {
      newHeight = this.screenSize.height - this.position.y;
    }

    // Apply the new size.
    this.size.resize(newWidth, newHeight);
  }

  /**
   * Move the program window to a new position.
   * @param {Position} newPosition - The new position.
   */
  move(newPosition) {
    let newX = newPosition.x;

    // Ensure the new X-coordinate is within bounds.
    if (newX < 0) newX = 0;
    else if (newX + this.size.width > this.screenSize.width) {
      newX = this.screenSize.width - this.size.width;
    }

    let newY = newPosition.y;

    // Ensure the new Y-coordinate is within bounds.
    if (newY < 0) newY = 0;
    else if (newY + this.size.height > this.screenSize.height) {
      newY = this.screenSize.height - this.size.height;
    }

    // Apply the new position.
    this.position.move(newX, newY);
  }
}

/**
 * Change the window size and position.
 * @param {ProgramWindow} programWindow - The program window to modify.
 * @returns {ProgramWindow} - The modified program window.
 */
export function changeWindow(programWindow) {
  // Change the window size and position.
  programWindow.size = new Size(400, 300);
  programWindow.position = new Position(100, 150);

  return programWindow;
}
