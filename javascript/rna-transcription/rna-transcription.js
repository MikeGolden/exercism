//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RNA = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U',
}

export const toRna = (dna) => 
  dna
    .split("")
    .map((nucleotide) => RNA[nucleotide])
    .join("");
