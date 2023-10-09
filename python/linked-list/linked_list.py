class Node:
    def __init__(self, value, succeeding=None, previous=None):
        self.value = value
        self.succeeding = succeeding
        self.previous = previous
class LinkedList:
    def __init__(self):
        head_guard_node = Node(None)
        tail_guard_node = Node(None)
        head_guard_node.succeeding = tail_guard_node
        tail_guard_node.previous = head_guard_node
        self.head = head_guard_node
        self.tail = tail_guard_node
        self.length = 0
    # insert value at back
    def push(self, value):
        self.insert(self.tail.previous, self.tail, value)
    # remove value at back
    def pop(self):
        return self.remove(self.tail.previous)
    # insert value at front
    def unshift(self, value):
        self.insert(self.head, self.head.succeeding, value)
    # remove value at front
    def shift(self):
        return self.remove(self.head.succeeding)
    def __len__(self):
        return self.length
    def delete(self, value):
        if self.length == 0:
            raise ValueError('Value not found')
        curr_node = self.head
        while curr_node is not None:
            if curr_node.value == value:
                self.remove(curr_node)
                return
            curr_node = curr_node.succeeding
        raise ValueError('Value not found')
    def insert(self, previous, succeeding, value):
        new_node = Node(value, succeeding, previous)
        succeeding.previous = new_node
        previous.succeeding = new_node
        self.length += 1
    def remove(self, node):
        if self.length == 0:
            raise IndexError('List is empty')
        node.previous.succeeding = node.succeeding
        node.succeeding.previous = node.previous
        self.length -= 1
        return node.value
        

          


            


          