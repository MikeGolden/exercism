export class Zipper {
  constructor(tree, focus = null, parent = null) {
    this.tree = tree;
    this.focus = focus || tree;
    this.parent = parent;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.tree;
  }

  value() {
    return this.focus.value;
  }

  left() {
    if (!this.focus.left) return null;

    return new Zipper(this.tree, this.focus.left, this.focus);
  }

  right() {
    if (!this.focus.right) return null;

    return new Zipper(this.tree, this.focus.right, this.focus);
  }

  up() {
    if (!this.parent) return null;

    return new Zipper(this.tree, this.parent, this.parent.parent);
  }

  setValue(newValue) {
    const newTree = { ...this.tree };
    this.focus.value = newValue;
    return new Zipper(newTree, this.focus, this.parent);
  }

  setLeft(leftNode) {
    const newTree = { ...this.tree };
    this.focus.left = leftNode;
    return new Zipper(newTree, this.focus, this.parent);
  }

  setRight(rightNode) {
    const newTree = { ...this.tree };
    this.focus.right = rightNode;
    return new Zipper(newTree, this.focus, this.parent);
  }
}
