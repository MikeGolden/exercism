# Define a Node class for creating nodes in the linked list.
class Node:
    def __init__(self, value):
        self.value = value           # Store the value of the node.
        self.next_node = None        # Initialize the reference to the next node as None.


# Define a LinkedList class to create and manipulate a singly linked list.
class LinkedList:
    def __init__(self):
        self.head = None             # Initialize an empty linked list with the head set to None.

    # Add a new node with the given value to the front (head) of the linked list.
    def push(self, value):
        new_node = Node(value)        # Create a new node with the given value.
        new_node.next_node = self.head  # Set the new node's next_node to the current head.
        self.head = new_node          # Update the head to the new node.

    # Remove and return the value of the node at the front (head) of the linked list.
    def pop(self):
        if not self.head:
            raise IndexError("List is empty")  # Raise an error if the list is empty.
        popped_value = self.head.value         # Get the value of the head node.
        self.head = self.head.next_node       # Update the head to the next node.
        return popped_value                   # Return the value of the removed node.

    # Remove and return the value of the node at the end of the linked list.
    def shift(self):
        if not self.head:
            raise IndexError("List is empty")  # Raise an error if the list is empty.
        current = self.head

        if not current.next_node:
            self.head = None                   # If there's only one node, set the head to None.
        else:
            while current.next_node.next_node:
                current = current.next_node    # Iterate to the second-to-last node.
            shifted_value = current.next_node.value  # Get the value of the last node.
            current.next_node = None           # Remove the reference to the last node.
            return shifted_value               # Return the value of the removed node.

    # Add a new node with the given value to the end of the linked list.
    def unshift(self, value):
        new_node = Node(value)                # Create a new node with the given value.
        if not self.head:
            self.head = new_node              # If the list is empty, set the head to the new node.
        else:
            current = self.head
            while current.next_node:
                current = current.next_node    # Iterate to the last node.
            current.next_node = new_node      # Append the new node to the last node.

    # Return the length (number of nodes) of the linked list.
    def __len__(self):
        length = 0
        current = self.head
        while current:
            length += 1                        # Count nodes while iterating through the list.
            current = current.next_node
        return length

    # Create an iterator for the linked list to allow iteration over its values.
    def __iter__(self):
        current = self.head
        while current:
            yield current.value               # Yield the value of each node during iteration.
            current = current.next_node

    # Delete the first occurrence of a node with the given value from the linked list.
    def delete(self, value):
        current = self.head
        prev = None
        found = False

        while current:
            if current.value == value:
                found = True
                if prev:
                    prev.next_node = current.next_node  # Remove the node from the list.
                else:
                    self.head = current.next_node
                break
            prev = current
            current = current.next_node

        if not found:
            raise ValueError("Value not found")  # Raise an error if the value is not found in the list.
