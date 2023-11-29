export class Zipper {
  constructor(tree, root) {
    [this.tree, this.root] = Zipper._clone(tree, root);
  }

  // Clone the tree and bind the new root to the original tree
  static _clone(tree, root) {
    const new_root = Zipper._cloneTree(root);
    const new_tree = Zipper._bindTree(tree, root, new_root);
    return [new_tree, new_root];
  }

  // Create a deep clone of the tree node
  static _cloneTree(tree) {
    if (!tree) return null;
    return {
      value: tree.value,
      left: Zipper._cloneTree(tree.left),
      right: Zipper._cloneTree(tree.right),
    };
  }

  // Bind the cloned root node to the original tree
  static _bindTree(tree, root, new_root) {
    if (root === null) return null;
    if (tree === root) return new_root;

    let binded = Zipper._bindTree(tree, root.left, new_root.left);
    if (binded) return binded;
    binded = Zipper._bindTree(tree, root.right, new_root.right);
    if (binded) return binded;
    return null;
  }

  // Generate a zipper from a tree
  static fromTree(tree) {
    return new Zipper(tree, tree);
  }

  // Convert zipper back to a tree
  toTree() {
    return this.root;
  }

  // Get the value of the current node in the zipper
  value() {
    return this.tree.value;
  }

  // Get the left child zipper
  left() {
    return this.tree.left ? new Zipper(this.tree.left, this.root) : null;
  }

  // Get the right child zipper
  right() {
    return this.tree.right ? new Zipper(this.tree.right, this.root) : null;
  }

  // Recursively search up to find the parent zipper
  up_search(current, target) {
    if (!current) return null;
    if (current.left === target || current.right === target) return current;
    let found = this.up_search(current.left, target);
    if (found) return found;
    found = this.up_search(current.right, target);
    if (found) return found;
    return null;
  }

  // Move the focus to the parent node
  up() {
    const parent = this.up_search(this.root, this.tree);
    return parent ? new Zipper(parent, this.root) : null;
  }

  // Set the value of the current node in the zipper
  setValue(value) {
    let new_zipper = new Zipper(this.tree, this.root);
    new_zipper.tree.value = value;
    return new_zipper;
  }

  // Set the left child node in the zipper
  setLeft(tree) {
    let new_zipper = new Zipper(this.tree, this.root);
    new_zipper.tree.left = tree;
    return new_zipper;
  }

  // Set the right child node in the zipper
  setRight(tree) {
    let new_zipper = new Zipper(this.tree, this.root);
    new_zipper.tree.right = tree;
    return new_zipper;
  }
}
