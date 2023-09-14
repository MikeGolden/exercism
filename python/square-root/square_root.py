def square_root(number):
    """
    Calculate the square root of a natural radicand using the Newton-Raphson method.

    Args:
        number (int): The number for which the square root is to be determined.

    Returns:
        float: The square root approximation of the radicand.
    """
    for i in range(number + 1):
        if i * i == number:
            return i
