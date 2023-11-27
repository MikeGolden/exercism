export class List {
  constructor(elements) {
    this.elements = elements || [];
  }

  compare(otherList) {
    const A = this.elements;
    const B = otherList.elements;

    if (JSON.stringify(A) === JSON.stringify(B)) {
      return "EQUAL";
    }

    if (A.length > B.length && this.containsSublist(A, B)) {
      return "SUPERLIST";
    }

    if (A.length < B.length && otherList.containsSublist(B, A)) {
      return "SUBLIST";
    }

    return "UNEQUAL";
  }

  containsSublist(largerList, smallerList) {
    for (let i = 0; i <= largerList.length - smallerList.length; i++) {
      if (
        largerList.slice(i, i + smallerList.length).join() ===
        smallerList.join()
      ) {
        return true;
      }
    }
    return false;
  }
}
