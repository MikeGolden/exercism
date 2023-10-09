class TreeNode:
    def __init__(self, data, left=None, right=None):
        # Initialize a TreeNode with data and optional left/right children
        self.data = data
        self.left = left
        self.right = right

    def __str__(self):
        # Define a string representation for TreeNode objects
        fmt = 'TreeNode(data={}, left={}, right={})'
        return fmt.format(self.data, self.left, self.right)


class BinarySearchTree:
    def __init__(self, tree_data):
        # Initialize a BinarySearchTree with the given list of data
        self.root = None  # Initialize the root as None
        for data in tree_data:
            self.insert(data)  # Insert each data element into the tree

    def insert(self, data):
        # Insert a new data element into the binary search tree
        if self.root is None:
            # If the tree is empty, create a new TreeNode as the root
            self.root = TreeNode(data)
        elif data <= self.root.data:
            # If the data is less than or equal to the root's data, insert to the left
            if self.root.left is None:
                # If there's no left child, create a new TreeNode as the left child
                self.root.left = TreeNode(data)
            else:
                # If there's a left child, create a new BinarySearchTree for left subtree
                left_tree = BinarySearchTree([])
                left_tree.root = self.root.left
                left_tree.insert(data)
        else:
            # If the data is greater than the root's data, insert to the right
            if self.root.right is None:
                # If there's no right child, create a new TreeNode as the right child
                self.root.right = TreeNode(data)
            else:
                # If there's a right child, create a new BinarySearchTree for right subtree
                right_tree = BinarySearchTree([])
                right_tree.root = self.root.right
                right_tree.insert(data)

    def data(self):
        # Return the root node's data
        return self.root

    def sorted_data(self):
        # Return sorted data from the binary search tree
        if self.root is None:
            return []

        # Create BinarySearchTree instances for left and right subtrees
        left_tree = BinarySearchTree([])
        left_tree.root = self.root.left
        right_tree = BinarySearchTree([])
        right_tree.root = self.root.right

        # Recursively retrieve sorted data from left subtree, root, and right subtree
        return left_tree.sorted_data() + [self.root.data] + right_tree.sorted_data()
