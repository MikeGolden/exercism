export const translate = (rna) => {
  if (!rna) {
    return [];
  }

  const codonMap = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP",
  };

  const codons = rna.match(/.{1,3}/g) || [];

  const proteins = [];
  for (const codon of codons) {
    if (!codonMap[codon]) {
      throw new Error("Invalid codon");
    }

    if (codonMap[codon] === "STOP") {
      break;
    }

    proteins.push(codonMap[codon]);
  }

  return proteins;
};
