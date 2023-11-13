export class CustomSet {
  constructor(elements = []) {
    this.set = [...new Set(elements)];
  }

  empty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  add(element) {
    if (!this.contains(element)) {
      this.set.push(element);
    }
    return this;
  }

  subset(otherSet) {
    return this.set.every((element) => otherSet.contains(element));
  }

  disjoint(otherSet) {
    return this.set.every((element) => !otherSet.contains(element));
  }

  eql(otherSet) {
    return this.subset(otherSet) && otherSet.subset(this);
  }

  union(otherSet) {
    return new CustomSet([...this.set, ...otherSet.set]);
  }

  intersection(otherSet) {
    return new CustomSet(
      this.set.filter((element) => otherSet.contains(element)),
    );
  }

  difference(otherSet) {
    return new CustomSet(
      this.set.filter((element) => !otherSet.contains(element)),
    );
  }
}
