//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current.value;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (current) {
      previous.next = current.next;
    }
  }

  count() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}
