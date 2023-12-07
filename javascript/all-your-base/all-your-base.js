export const convert = (digits, fromBase, toBase) => {
  if (fromBase < 2) throw new Error('Wrong input base');
  if (toBase < 2) throw new Error('Wrong output base');
  if (digits.length === 1 && digits[0]*digits[0] === digits[0]) return digits;
  if (digits.length === 0 || digits[0] === 0 || digits.some(d => d < 0 || d >= fromBase))
    throw new Error('Input has wrong format');

  let value = digits.reduce((acc, d) => acc*fromBase + d, 0);

  const result = [];
  while (value) {
    result.unshift(value % toBase);
    value = Math.floor(value / toBase);
  }
  return result;
};