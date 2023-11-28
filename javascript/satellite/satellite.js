export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0) {
    return {}; // Empty tree
  }

  if (preorder.length !== inorder.length) {
    throw new Error("traversals must have the same length");
  }

  const set = new Set(preorder);
  if (set.size !== preorder.length) {
    throw new Error("traversals must contain unique items");
  }

  const rootValue = preorder[0];
  const rootIndex = inorder.indexOf(rootValue);

  if (rootIndex === -1) {
    throw new Error("traversals must have the same elements");
  }

  const leftPreorder = preorder.slice(1, rootIndex + 1);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightPreorder = preorder.slice(rootIndex + 1);
  const rightInorder = inorder.slice(rootIndex + 1);

  return {
    value: rootValue,
    left: treeFromTraversals(leftPreorder, leftInorder),
    right: treeFromTraversals(rightPreorder, rightInorder),
  };
};

