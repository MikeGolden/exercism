def proteins(strand):
    """
    Translate an RNA sequence into a protein sequence.

    Args:
        strand (str): The input RNA sequence to be translated.

    Returns:
        list: A list of amino acids in the protein sequence.

    Raises:
        ValueError: If an invalid codon is encountered in the RNA sequence.

    Example:
        strand = "AUGUUUUCU"
        protein = proteins(strand)
        # Output: ['Methionine', 'Phenylalanine', 'Serine']

    This function translates an RNA sequence into a protein sequence by reading
    codons of three letters each. It uses a codon-to-amino-acid mapping to
    determine the corresponding amino acid for each codon. Translation stops
    when a stop codon is encountered.

    """
    # Define the codon-to-amino-acid mapping.
    codon_to_amino_acid = {
        "AUG": "Methionine",
        "UUU": "Phenylalanine",
        "UUC": "Phenylalanine",
        "UUA": "Leucine",
        "UUG": "Leucine",
        "UCU": "Serine",
        "UCC": "Serine",
        "UCA": "Serine",
        "UCG": "Serine",
        "UAU": "Tyrosine",
        "UAC": "Tyrosine",
        "UGU": "Cysteine",
        "UGC": "Cysteine",
        "UGG": "Tryptophan",
        "UAA": "STOP",
        "UAG": "STOP",
        "UGA": "STOP",
    }

    protein_sequence = []
    i = 0

    while i < len(strand):
        codon = strand[i:i + 3]

        if codon in codon_to_amino_acid:
            amino_acid = codon_to_amino_acid[codon]
            if amino_acid == "STOP":
                break  # Terminate translation on stop codon
            protein_sequence.append(amino_acid)
        else:
            raise ValueError("Invalid codon")

        i += 3

    return protein_sequence