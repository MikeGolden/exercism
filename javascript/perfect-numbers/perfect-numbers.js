export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const aliquotSum = getAliquotSum(number);

  if (aliquotSum === number) {
    return 'perfect';
  } else if (aliquotSum < number) {
    return 'deficient';
  } else {
    return 'abundant';
  }
};

function getAliquotSum(number) {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}
