//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export function countNucleotides(strand) {
    if (/[^ACGT]/.test(strand)) throw new Error('Invalid nucleotide in strand');
    return `${(strand.match(/A/g) || []).length} ${(strand.match(/C/g) || []).length} ${(strand.match(/G/g) || []).length} ${(strand.match(/T/g) || []).length}`;
}