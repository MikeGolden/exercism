class Zipper:
    def __init__(self, value, parent):
        self._value = value  # Value of the current node
        self._parent = parent  # Parent node
        self._root = None  # Root node (initially None)
        self._left = None  # Left child node (initially None)
        self._right = None  # Right child node (initially None)

    @staticmethod
    def from_tree(tree, parent=None, root=None):
        # Static method to create a Zipper from a tree dictionary
        if tree is None:
            return None

        node = Zipper(tree["value"], parent)
        if root is None:
            root = node
        node._root = root
        # Recursively create left and right children zippers
        node._left = Zipper.from_tree(tree["left"], node, root)
        node._right = Zipper.from_tree(tree["right"], node, root)

        return node

    def value(self):
        # Get the value of the current node
        return self._value

    def set_value(self, value):
        # Set the value of the current node
        self._value = value
        return self

    def left(self):
        # Get the left child zipper
        return self._left

    def set_left(self, tree):
        # Set the left child zipper from a tree
        self._left = Zipper.from_tree(tree, self, self._root)
        return self

    def right(self):
        # Get the right child zipper
        return self._right

    def set_right(self, tree):
        # Set the right child zipper from a tree
        self._right = Zipper.from_tree(tree, self, self._root)
        return self

    def up(self):
        # Get the parent zipper
        return self._parent

    def to_tree(self):
        # Convert the zipper back to a tree dictionary
        return self._root.to_subtree()

    def to_subtree(self):
        # Convert the current subtree to a tree dictionary
        return {
            "value": self._value,
            "left": self._left.to_subtree() if self._left else None,
            "right": self._right.to_subtree() if self._right else None
        }
