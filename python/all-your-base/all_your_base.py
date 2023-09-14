def rebase(input_base, digits, output_base):
    """
    Convert a number from one base to another.

    Args:
        digits (str): The number represented as a string in the source base.
        input_base (int): The source base.
        output_base (int): The target base.

    Returns:
        str: The number represented as a string in the target base.

    Raises:
        ValueError: If input or output bases are invalid.
    """

    
    if input_base < 2 or output_base < 2 \
            or any(digit >= input_base or digit < 0 for digit in digits):
        raise ValueError("input base must be >= 2")

    if output_base < 2:
        raise ValueError("Output base must be >= 2")

    i = 1
    number = 0
    output = []

    for digit in reversed(digits):
        number += i * digit
        i *= input_base

    while number > 0:
        output.append(number % output_base)
        number //= output_base

    if output == []:
        return [0]

    return output[::-1]