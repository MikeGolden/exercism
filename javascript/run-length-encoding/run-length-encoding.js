export const encode = (input) => {
  let encoded = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      encoded += count > 1 ? `${count}${input[i]}` : `${input[i]}`;
      count = 1;
    }
  }

  return encoded;
};

export const decode = (input) => {
  let decoded = "";
  let count = "";

  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      decoded += input[i].repeat(count || 1);
      count = "";
    } else {
      count += input[i];
    }
  }

  return decoded;
};
