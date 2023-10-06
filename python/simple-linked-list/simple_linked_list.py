# Define a Node class to represent individual elements in the linked list
class Node:
    def __init__(self, value):
        self._value = value  # Initialize the value of the node
        self._next = None   # Initialize the reference to the next node

    def value(self):
        return self._value  # Get the value of the node

    def next(self):
        return self._next   # Get the reference to the next node

# Define a LinkedList class to create and manipulate linked lists
class LinkedList:
    def __init__(self, values=[]):
        self._head = None  # Initialize the head of the linked list (start with an empty list)
        self._len = 0     # Initialize the length of the linked list

        # Initialize the linked list with values provided (if any)
        for value in values:
            self.push(value)

    def __iter__(self):
        items = []
        curr = self._head

        # Iterate through the linked list and collect values into a list
        while curr:
            items.append(curr.value())
            curr = curr.next()

        return iter(items)  # Return an iterator for the collected values

    def __len__(self):
        return self._len  # Return the length of the linked list

    def head(self):
        if not self._head:
            raise EmptyListException("The list is empty.")  # Raise an exception if the list is empty

        return self._head  # Return the head of the linked list

    def push(self, value):
        node = Node(value)  # Create a new node with the provided value
        node._next = self._head  # Set the next reference of the new node to the current head
        self._head = node       # Update the head to the new node
        self._len += 1          # Increment the length of the linked list

    def pop(self):
        if not self._head:
            raise EmptyListException("The list is empty.")  # Raise an exception if the list is empty

        value = self._head.value()  # Get the value of the current head
        self._head = self._head.next()  # Update the head to the next node
        self._len -= 1  # Decrement the length of the linked list

        return value  # Return the value of the popped node

    def reversed(self):
        return LinkedList(self)  # Create a new linked list with the elements reversed

# Define an exception class for empty lists
class EmptyListException(Exception):
    pass
