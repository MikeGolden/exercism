export const find = (sortedArray, target) => {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = sortedArray[mid];

    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  throw new Error("Value not in array");
};
