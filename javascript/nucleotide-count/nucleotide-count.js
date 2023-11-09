export function countNucleotides(strand) {
  // Create a counting object that maps each nucleotide to its count 
  const counts = {'A': 0, 'C': 0, 'G': 0, 'T': 0};

  // Traverse the input string 
  for (let i = 0; i < strand.length; i++) {
    // Get current character
    let char = strand.charAt(i);

    // If the character is a nucleotide, increment its count in the count
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    }
    // If the character is not a nucleotide, throw an error
    else {
      throw new Error('Invalid DNA sequence');
    }
  }

  return `${counts['A']} ${counts['C']} ${counts['G']} ${counts['T']}`;
}
