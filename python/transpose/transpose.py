from itertools import zip_longest

def transpose(lines):
    """
    Transpose the input text, switching rows and columns while preserving characters.

    Args:
        lines (str): The input text containing multiple lines.

    Returns:
        str: The transposed text.

    Example:
        Input:
        "ABC\nDEF"

        Output:
        "AD\nBE\nCF"

    If the input has rows of different lengths, this function pads to the left with spaces
    to ensure that all characters from the input are present in the transposed output.

    """
    # Split the input text into rows
    rows = lines.split("\n")

    # Pad each line with spaces to match the length of the longest line
    lines = list(line.ljust(max(len(l) for l in rows[i+1:]), " ")
                 for i, line in enumerate(rows[:-1])) + [rows[-1]]

    # Transpose the lines and join them back into text
    transposed_text = "\n".join("".join(row) for row in
                                zip_longest(*lines, fillvalue=""))

    return transposed_text