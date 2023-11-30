export const encode = (value) => {
  let result = [];

  while (value > 0) {
    let byte = value & 0x7f;

    if (value > 0x7f) byte |= 0x80;
    result.push(byte);
    value >>= 7;
  }

  if (result.length === 0) result.push(0);
  return result.reverse();
};

export const decode = (bytes) => {
  let result = 0;
  let shift = 0;

  for (let i = 0; i < bytes.length; i++) {
    let byte = bytes[i] & 0x7f;

    result |= byte << shift;
    shift += 7;

    if ((bytes[i] & 0x80) === 0) {
      return result;
    }
  }

  throw new Error("Invalid variable length quantity");
};
