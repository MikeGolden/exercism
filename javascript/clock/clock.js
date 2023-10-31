// Clock class represents a simple clock with hours and minutes
export class Clock {
  // Constructor takes hours and minutes (defaulting to 0) to initialize the clock
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.normalize(); // Ensures the clock is in a valid state
  }

  // Converts the clock time to a string in the format "HH:MM"
  toString() {
    return `${this.pad(this.hours)}:${this.pad(this.minutes)}`;
  }

  // Adds the specified number of minutes to the clock time
  plus(minutes) {
    this.minutes += minutes;
    this.normalize(); // Normalize the clock time after addition
    return this;
  }

  // Subtracts the specified number of minutes from the clock time
  minus(minutes) {
    this.minutes -= minutes;
    this.normalize(); // Normalize the clock time after subtraction
    return this;
  }

  // Compares this clock to another clock to check if they have the same time
  equals(other) {
    return this.hours === other.hours && this.minutes === other.minutes;
  }

  // Normalizes the clock time to ensure it's in the correct format (24-hour clock)
  normalize() {
    const hoursFromMinutes = Math.floor(this.minutes / 60);
    this.hours += hoursFromMinutes;
    this.minutes -= hoursFromMinutes * 60;
    this.hours = this.hours % 24; // Ensure the hours stay within 0-23

    if (this.hours < 0) {
      this.hours += 24; // Adjust for negative hours
    }

    if (this.minutes < 0) {
      this.minutes += 60; // Adjust for negative minutes
      this.hours -= 1; // Subtract 1 from hours
    }
  }

  // Helper function to pad a number with leading zeros to ensure a two-digit format
  pad(number) {
    return number.toString().padStart(2, "0");
  }
}
