class Node:
    def __init__(self, value):
        self.value = value
        self.next_node = None


class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, value):
        new_node = Node(value)
        new_node.next_node = self.head
        self.head = new_node

    def pop(self):
        if not self.head:
            raise IndexError("List is empty")
        popped_value = self.head.value
        self.head = self.head.next_node
        return popped_value

    def shift(self):
        if not self.head:
            raise IndexError("List is empty")
        current = self.head
        if not current.next_node:
            self.head = None
        else:
            while current.next_node.next_node:
                current = current.next_node
            shifted_value = current.next_node.value
            current.next_node = None
            return shifted_value

    def unshift(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next_node:
                current = current.next_node
            current.next_node = new_node

    def __len__(self):
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next_node
        return length

    def __iter__(self):
        current = self.head
        while current:
            yield current.value
            current = current.next_node

    def delete(self, value):
        current = self.head
        prev = None
        found = False

        while current:
            if current.value == value:
                found = True
                if prev:
                    prev.next_node = current.next_node
                else:
                    self.head = current.next_node
                break
            prev = current
            current = current.next_node

        if not found:
            raise ValueError("Value not found")
