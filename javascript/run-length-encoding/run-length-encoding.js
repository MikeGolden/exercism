export const encode = (plain) => {
  // Add a "0" at the end to mark the end of the string
  return [...plain, "0"].reduce(
    ([code, prev_ch, count], ch) => {
      return ch === prev_ch
        ? [code, prev_ch, ++count] // If the character matches the previous one, increment count
        : [
            count > 1 ? code + `${count}${prev_ch}` : code + prev_ch, // Append count + character if count > 1, otherwise append character
            ch,
            1, // Reset count for the next character
          ];
    },
    ["", "", 0] // Initial state: code, previous character, and count
  )[0]; // Return the encoded string from the reduce operation
};

export const decode = (code) => {
  return [...code].reduce(
    ([code, digits], ch) => {
      if (/\d/.test(ch)) {
        return [code, digits + ch]; // Collect consecutive digits to form the count
      } else {
        return [
          digits.length ? code + ch.repeat(Number(digits)) : code + ch, // Repeat the character based on the collected count
          "", // Reset digits for the next character
        ];
      }
    },
    ["", ""] // Initial state: code and digits
  )[0]; // Return the decoded string from the reduce operation
};
