//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value; // Store the value of the node
    this.next = null; // Initialize the next pointer to null
  }
}

export class LinkedList {
  constructor() {
    this.head = null; // Initialize the linked list with an empty head
  }

  // Push a new element to the end of the linked list
  push(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Traverse to the end of the list
      }
      current.next = newNode; // Set the new node as the next element of the current node
    }
  }

  // Remove and return the last element from the linked list
  pop() {
    if (!this.head) {
      return undefined; // If the list is empty, return undefined
    }
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null; // If there is only one element, remove it
      return value;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next; // Traverse to the end of the list while tracking the previous node
    }
    previous.next = null; // Set the next of the previous node to null
    return current.value; // Return the value of the removed node
  }

  // Remove and return the first element from the linked list
  shift() {
    if (!this.head) {
      return undefined; // If the list is empty, return undefined
    }
    const value = this.head.value;
    this.head = this.head.next; // Update the head to the next node
    return value;
  }

  // Add a new element to the beginning of the linked list
  unshift(value) {
    const newNode = new Node(value); // Create a new node with the given value
    newNode.next = this.head; // Set the new node's next to the current head
    this.head = newNode; // Update the head to the new node
  }

  // Delete the first occurrence of a value from the linked list
  delete(value) {
    if (!this.head) {
      return; // If the list is empty, do nothing
    }
    if (this.head.value === value) {
      this.head = this.head.next; // If the head has the value, remove the head
      return;
    }
    let current = this.head;
    let previous = null;
    while (current && current.value !== value) {
      previous = current;
      current = current.next; // Traverse through the list to find the value
    }
    if (current) {
      previous.next = current.next; // Remove the node with the value
    }
  }

  // Count and return the number of elements in the linked list
  count() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next; // Traverse through the list and count the nodes
    }
    return count;
  }
}
