export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(nextElement) {
    this._next = nextElement;
  }
}

export class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(nextValue) {
    const newElement = new Element(nextValue, this.head);
    this.head = newElement;
    this.length++;
  }

  get length() {
    return this.length;
  }

  get head() {
    return this.head;
  }

  toArray() {
    let elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}
