// Constant representing the 7th bit (continuation bit) in a VLQ byte
const BITS = 1 << 7;

// Function to encode an array of numbers into a variable length quantity (VLQ) byte array
export const encode = (n) => {
  return n.map(vlq).flat();
};

// Helper function to encode a single number into VLQ bytes
const vlq = (number) => {
  if (number === 0) return [0]; // If the number is 0, return a single byte [0]
  
  let code = [];
  while (number > 0) {
    code.push(number % BITS); // Get the least significant 7 bits of the number
    number = Math.floor(number / BITS); // Divide the number by 128 (discard the remainder)
  }
  
  // Map the code array to add continuation bits to each byte (except the last one) and reverse the array
  return code.map((c, i) => (i ? c + BITS : c)).reverse();
};

// Function to decode a VLQ byte array into an array of numbers
export const decode = (bytes) => {
  let groups = [],
    group = [];
  
  // Split the input byte array into groups based on continuation bit (7th bit)
  for (let b of bytes) {
    group.push(b);
    if (b < BITS) {
      groups.push(group); // If a byte doesn't have continuation bit, it's the end of a group
      group = [];
    }
  }
  
  // Check for incomplete sequence (if the last group is not complete)
  if (group.length > 0) throw new Error("Incomplete sequence");
  
  // Map each group of bytes to decode them back to numbers
  return groups.map(vlq_decode);
};

// Helper function to calculate the value of a byte in a VLQ sequence
const bi = (b, i) => (b - BITS) * BITS ** i;

// Helper function to decode a group of bytes into a number
const vlq_decode = (bytes) => {
  return bytes.reverse().reduce((tot, b, i) => (i ? tot + bi(b, i) : b), 0);
};
