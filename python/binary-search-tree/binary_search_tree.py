class TreeNode:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

    def __str__(self):
        return f'TreeNode(data={self.data}, left={self.left}, right={self.right})'


class BinarySearchTree:
    def __init__(self, tree_data):
        self.root = None
        # Build the binary search tree from the input list
        for data in tree_data:
            self.insert(data)

    def insert(self, data):
        # Helper function to insert a new node with the given data
        def insert_recursive(node, data):
            if node is None:
                return TreeNode(data)
            if data <= node.data:
                node.left = insert_recursive(node.left, data)
            else:
                node.right = insert_recursive(node.right, data)
            return node

        self.root = insert_recursive(self.root, data)

    def data(self):
        # Return the data stored in the root node
        if self.root:
            return self.root.data
        else:
            raise ValueError("Tree is empty")

    def sorted_data(self):
        # Perform an in-order traversal of the binary search tree to get sorted data
        def in_order_traversal(node):
            if node is None:
                return []
            left_data = in_order_traversal(node.left)
            right_data = in_order_traversal(node.right)
            return left_data + [node.data] + right_data

        return in_order_traversal(self.root)
