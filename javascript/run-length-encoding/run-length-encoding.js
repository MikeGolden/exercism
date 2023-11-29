export const encode = (plain) => {
  return [...plain, "0"].reduce(
    ([code, prev_ch, count], ch) => {
      return ch === prev_ch
        ? [code, prev_ch, ++count]
        : [count > 1 ? code + `${count}${prev_ch}` : code + prev_ch, ch, 1];
    },
    ["", "", 0],
  )[0];
};

export const decode = (code) => {
  return [...code].reduce(
    ([code, digits], ch) => {
      if (/\d/.test(ch)) {
        return [code, digits + ch];
      } else {
        return [
          digits.length ? code + ch.repeat(Number(digits)) : code + ch,
          "",
        ];
      }
    },
    ["", ""],
  )[0];
};

