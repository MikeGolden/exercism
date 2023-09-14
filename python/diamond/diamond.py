def rows(letter):
    """
    Prints a diamond pattern with the supplied letter at the widest point.

    Args:
        letter (str): The letter for the widest point of the diamond.

    Returns:
        Diamon shape of letters
    """
    length = ord(letter) - ord("A")
    result = []
    for i in range(length + 1):
        if i == 0:
            result.append(" " * (length - i) + chr(i+ord("A")) + " " * (length - i))
            continue
        result.append(" " * (length - i) + chr(i+ord("A")) + (2*i-1) * " " + chr(i+ord("A")) + " " * (length - i))
    return result + result[-2::-1]