class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.size = size;
    this.start = 0;
    this.end = 0;
    this.full = false;
  }

  write(value) {
    if (this.full) {
      throw new BufferFullError();
    }

    this.buffer[this.end] = value;
    this.end = (this.end + 1) % this.size;

    if (this.end === this.start) {
      this.full = true;
    }
  }

  read() {
    if (this.isEmpty()) {
      throw new BufferEmptyError();
    }

    const value = this.buffer[this.start];
    this.buffer[this.start] = null;
    this.start = (this.start + 1) % this.size;
    this.full = false;
    return value;
  }

  forceWrite(value) {
    if (this.full) {
      this.buffer[this.start] = value;
      this.start = (this.start + 1) % this.size;
      this.end = (this.end + 1) % this.size;
    } else {
      this.write(value);
    }
  }

  clear() {
    this.buffer.fill(null);
    this.start = 0;
    this.end = 0;
    this.full = false;
  }

  isEmpty() {
    return !this.buffer.some((val) => val !== null);
  }

  isFull() {
    return this.full;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super("Buffer is full");
    this.name = "BufferFullError";
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super("Buffer is empty");
    this.name = "BufferEmptyError";
  }
}
