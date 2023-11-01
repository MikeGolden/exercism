// This function calculates the modular multiplicative inverse of 'a' with respect to 'b'.
const modMulInverse = (a, b) => {
  // Check if 'a' and 'b' are coprime (gcd is 1). If not, throw an error.
  if (!coprime(a, b)) throw new Error("a and m must be coprime.");

  let output = 1;

  // Calculate the modular multiplicative inverse.
  while ((a * output) % 26 != 1) {
    output += 1;
  }

  return output;
};

// Check if 'a' and 'b' are coprime (their greatest common divisor is 1).
const coprime = (a, b) => gcd(a, b) == 1;

// Calculate the greatest common divisor (gcd) of two numbers 'a' and 'b'.
const gcd = (a, b) => {
  if (a == 0 || b == 0) return 0;
  if (a == b) return a;
  if (a > b) return gcd(a - b, b);

  return gcd(a, b - a);
};

// This function encodes a phrase using the Affine cipher with parameters 'a' and 'b'.
export const encode = (phrase, { a, b }) => {
  // Check if 'a' and 26 are coprime. If not, throw an error.
  if (!coprime(a, 26)) throw new Error("a and m must be coprime.");
  const output = [];
  phrase = phrase.toLowerCase();

  for (let index = 0; index < phrase.length; index++) {
    let x = phrase.charCodeAt(index);
    // Filter out non-alphanumeric characters.
    if (x < 48 || x > 122 || (x > 57 && x < 97)) continue;
    if ((output.length + 1) % 6 === 0) output.push(32);
    if (x < 97) {
      output.push(x);
      continue;
    }

    x -= 97;
    output.push(((a * x + b) % 26) + 97);
  }

  return String.fromCharCode(...output);
};

// This function decodes a phrase encoded using the Affine cipher with parameters 'a' and 'b'.
export const decode = (phrase, { a, b }) => {
  const mmi = modMulInverse(a, 26);
  const output = [];

  for (let index = 0; index < phrase.length; index++) {
    let y = phrase.charCodeAt(index);
    if (y === 32) continue;
    if (y < 97) {
      output.push(y);
      continue;
    }
    y -= 97;
    let sum = mmi * (y - b);
    while (sum < 0) {
      sum += 26;
    }
    output.push((sum % 26) + 97);
  }

  return String.fromCharCode(...output);
};
