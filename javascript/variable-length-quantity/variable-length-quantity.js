const BITS = 1 << 7;

export const encode = (n) => {
  return n.map(vlq).flat();
};

const vlq = (number) => {
  if (number === 0) return [0];
  let code = [];
  while (number > 0) {
    code.push(number % BITS);
    number = Math.floor(number / BITS);
  }
  return code.map((c, i) => (i ? c + BITS : c)).reverse();
};

export const decode = (bytes) => {
  let groups = [],
    group = [];
  for (let b of bytes) {
    group.push(b);
    if (b < BITS) {
      groups.push(group);
      group = [];
    }
  }
  if (group.length > 0) throw new Error("Incomplete sequence");
  return groups.map(vlq_decode);
};

const bi = (b, i) => (b - BITS) * BITS ** i;

const vlq_decode = (bytes) => {
  return bytes.reverse().reduce((tot, b, i) => (i ? tot + bi(b, i) : b), 0);
};

