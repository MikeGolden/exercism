export const largestProduct = (input, span) => {
  if (span < 0 || !/^\d+$/.test(input) || span > input.length) {
    throw new Error("Invalid input or span");
  }

  if (span === 0) {
    return 1;
  }

  let maxProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    let product = 1;
    for (let j = i; j < i + span; j++) {
      product *= Number(input[j]);
    }
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};
