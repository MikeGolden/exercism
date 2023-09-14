def is_armstrong_number(number):
    """
    Check if a number is an Armstrong number.

    An Armstrong number (also known as a narcissistic number) is a number that is equal to
    the sum of its own digits, each raised to the power of the number of digits in the number.

    Parameters:
    number (int): The number to be checked for being an Armstrong number.

    Returns:
    bool: True if the input number is an Armstrong number, False otherwise.
    """
    # Convert the number to a string to find its length (number of digits)
    num_str = str(number)
    num_digits = len(num_str)
    
    # Calculate the sum of digits raised to the power of the number of digits
    armstrong_sum = sum(int(digit) ** num_digits for digit in num_str)
    
    # Check if the sum is equal to the original number
    return armstrong_sum == number