export const commands = (input) => {
  const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
  const binary = input.toString(2).padStart(5, '0');
  const sequence = binary.split('').reverse().map((digit, index) => {
    if (digit === '1') {
      return actions[index];
    }
  }).filter(Boolean);

  if (binary[0] === '1') {
    return sequence.reverse();
  }

  return sequence;
};
