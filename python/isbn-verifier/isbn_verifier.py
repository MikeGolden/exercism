def is_valid(isbn):
    """
    Check if a string is a valid ISBN-10.

    Args:
        isbn (str): The ISBN-10 string to be checked.

    Returns:
        bool: True if the ISBN-10 is valid, False otherwise.
    """
    # Remove dashes and spaces
    isbn = isbn.replace("-", "").replace(" ", "")

    # Check if the ISBN has exactly 10 characters
    if len(isbn) != 10:
        return False

    # Calculate the check digit
    if isbn[-1] == 'X':
        check_digit = 10
    elif isbn[-1].isdigit():
        check_digit = int(isbn[-1])
    else:
        return False

    # Calculate the weighted sum of the first 9 digits
    weighted_sum = 0
    for i in range(9):
        if isbn[i].isdigit():
            weighted_sum += int(isbn[i]) * (10 - i)
        else:
            return False

    # Check if the weighted sum plus the check digit is divisible by 11
    return (weighted_sum + check_digit) % 11 == 0
