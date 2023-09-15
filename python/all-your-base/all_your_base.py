def rebase(input_base, digits, output_base):
    """
    Converts a number from one base to another.

    Args:
        input_base (int): The base of the input number (must be >= 2).
        digits (list): A list of digits representing the input number in the input base.
        output_base (int): The desired base for the output number (must be >= 2).

    Returns:
        list: A list of digits representing the output number in the output base.

    Raises:
        ValueError: If the input base or output base is less than 2.
        ValueError: If any digit is outside the range [0, input_base).

    Example:
        >>> rebase(10, [1, 0], 2)
        [1, 0]
    """
    # Check if input and output bases are valid
    if input_base < 2:
        raise ValueError("input base must be >= 2")
    
    if output_base < 2:
        raise ValueError("output base must be >= 2")

    # Check if all digits are within the valid range
    for digit in digits:
        if digit < 0 or digit >= input_base:
            raise ValueError("all digits must satisfy 0 <= d < input base")

    i = 1
    number = 0
    output = []

    # Convert input digits to decimal
    for digit in reversed(digits):
        number += i * digit
        i *= input_base

    # Convert decimal number to output base
    while number > 0:
        output.append(number % output_base)
        number //= output_base

    # Handle the case when the output is zero
    if output == []:
        return [0]

    # Reverse the output list to get the correct order
    return output[::-1]