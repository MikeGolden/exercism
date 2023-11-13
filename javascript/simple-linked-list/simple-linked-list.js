export class Element {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get value() {
    return this.value;
  }

  get next() {
    return this.next;
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
