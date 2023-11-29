export class Zipper {
  constructor(tree, root) {
    [this.tree, this.root] = Zipper._clone(tree, root);
  }

  static _clone(tree, root) {
    const new_root = Zipper._cloneTree(root);
    const new_tree = Zipper._bindTree(tree, root, new_root);
    return [new_tree, new_root];
  }

  static _cloneTree(tree) {
    if (!tree) return null;
    return {
      value: tree.value,
      left: Zipper._cloneTree(tree.left),
      right: Zipper._cloneTree(tree.right),
    };
  }

  static _bindTree(tree, root, new_root) {
    if (root === null) return null;
    if (tree === root) return new_root;

    let binded = Zipper._bindTree(tree, root.left, new_root.left);
    if (binded) return binded;
    binded = Zipper._bindTree(tree, root.right, new_root.right);
    if (binded) return binded;
    return null;
  }

  static fromTree(tree) {
    return new Zipper(tree, tree);
  }

  toTree() {
    return this.root;
  }

  value() {
    return this.tree.value;
  }

  left() {
    return this.tree.left ? new Zipper(this.tree.left, this.root) : null;
  }

  right() {
    return this.tree.right ? new Zipper(this.tree.right, this.root) : null;
  }

  up_search(current, target) {
    if (!current) return null;
    if (current.left === target || current.right === target) return current;
    let found = this.up_search(current.left, target);
    if (found) return found;
    found = this.up_search(current.right, target);
    if (found) return found;
    return null;
  }

  up() {
    const parent = this.up_search(this.root, this.tree);
    return parent ? new Zipper(parent, this.root) : null;
  }

  setValue(value) {
    let new_zipper = new Zipper(this.tree, this.root);
    new_zipper.tree.value = value;
    return new_zipper;
  }

  setLeft(tree) {
    let new_zipper = new Zipper(this.tree, this.root);
    new_zipper.tree.left = tree;
    return new_zipper;
  }

  setRight(tree) {
    let new_zipper = new Zipper(this.tree, this.root);
    new_zipper.tree.right = tree;
    return new_zipper;
  }
}

