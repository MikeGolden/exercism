export const encode = (value) => {
  let result = [];
  
  // Loop until value is processed completely
  while (value > 0) {
    // Get the lowest 7 bits of the value
    let byte = value & 0x7F;

    // If there are more bits to encode, set the continuation bit (MSB)
    if (value > 0x7F) byte |= 0x80;

    // Add the byte to the result array
    result.push(byte);

    // Shift value to the right by 7 bits
    value >>= 7;
  }

  // If no bytes were added, the value is 0, so add a single zero byte
  if (result.length === 0) result.push(0);

  // Return the array of bytes in reverse order
  return result.reverse();
};

export const decode = (bytes) => {
  let result = 0;
  let shift = 0;

  // Loop through each byte in the array
  for (let i = 0; i < bytes.length; i++) {
    // Extract the lowest 7 bits from the byte
    let byte = bytes[i] & 0x7F;

    // Accumulate the byte's value into the result
    result |= byte << shift;

    // Update the shift by 7 bits for the next iteration
    shift += 7;

    // Check if the continuation bit (MSB) is not set
    if ((bytes[i] & 0x80) === 0) {
      return result;
    }
  }

  throw new Error('Invalid variable length quantity');
};
