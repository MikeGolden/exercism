export class Palindromes {
  static isPalindrome(num) {
    const str = num.toString();
    return str === str.split("").reverse().join("");
  }

  static generate(min, max) {
    let smallest = Infinity;
    let largest = -Infinity;
    const products = {};

    for (let i = min; i <= max; i++) {
      for (let j = i; j <= max; j++) {
        const product = i * j;
        if (this.isPalindrome(product)) {
          if (product < smallest) {
            smallest = product;
            product[smallest] = [[i, j]];
          } else if (product === smallest) {
            products[smallest].push([i, j]);
          }

          if (product > largest) {
            largest = product;
            products[largest] = [[i, j]];
          } else if (product === largest) {
            products[largest].push([i, j]);
          }
        }
      }
    }

    return { smallest, largest, factorPairs: products };
  }
}
