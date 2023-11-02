export const compute = (dna1, dna2) => {
  // Check if the two DNA strands are equal length
  if (dna1.length !== dna2.length) {
    throw new Error("DNA strands must be of equal length.");
  }

  // Initialize a counter for the Hamming Distance
  let distance = 0;

  // Traverse the two DNA strands simnultaneously
  for (let i = 0; i < dna1.length; i++) {
    // Compare each corresponding character in the two DNA strands
    if (dna1[i] !== dna2[i]) {
      // If the characters are not the same, increment the counter
      distance++;
    }
  }

  return distance;
};
