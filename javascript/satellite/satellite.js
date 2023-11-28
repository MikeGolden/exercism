class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const treeFromTraversals = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return {}; // Empty tree
  }

  const buildTree = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd || inStart > inEnd) {
      return null; // No more nodes to process
    }

    const rootValue = preorder[preStart]; // Get the root value from pre-order traversal
    const root = new TreeNode(rootValue); // Create a node with the root value

    let inIndex = inorder.indexOf(rootValue);

    // Calculate the number of nodes in the left subtree
    const leftSubtreeNodes = inIndex - inStart;

    // Recursively build left and right subtrees
    root.left = buildTree(
      preStart + 1,
      preStart + leftSubtreeNodes,
      inStart,
      inIndex - 1,
    );
    root.right = buildTree(
      preStart + leftSubtreeNodes + 1,
      preEnd,
      inIndex + 1,
      inEnd,
    );

    return root; // Return the constructed tree
  };

  // call the recursive build function
  return buildTree(0, preorder.length - 1, 0, inorder.length - 1);
};
