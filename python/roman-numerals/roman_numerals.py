def roman(number):
    """
    Convert an integer to a Roman numeral.

    Args:
        number (int): The integer to be converted (1 to 3,999).

    Returns:
        str: The Roman numeral representation of the input integer.

    This function converts a given integer to a Roman numeral representation.
    The input must be between 1 and 3,999.

    Example:
        int_to_roman(1984) returns 'MCMLXXXIV'.
    """
    if not (0 < number < 4000):
        raise ValueError("Input number must be between 1 and 3,999")

    # Define the Roman numeral symbols and their corresponding values.
    roman_symbols = [
        ("M", 1000),
        ("CM", 900),
        ("D", 500),
        ("CD", 400),
        ("C", 100),
        ("XC", 90),
        ("L", 50),
        ("XL", 40),
        ("X", 10),
        ("IX", 9),
        ("V", 5),
        ("IV", 4),
        ("I", 1)
    ]

    # Initialize an empty string to build the Roman numeral.
    roman_numeral = ""

    # Iterate through the Roman symbols and append them to the result.
    for symbol, value in roman_symbols:
        while number >= value:
            roman_numeral += symbol
            number -= value

    return roman_numeral