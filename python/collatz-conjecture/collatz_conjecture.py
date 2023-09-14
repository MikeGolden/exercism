def steps(number):
    """
    Calculate the number of steps required to reach 1 using the Collatz Conjecture.

    The Collatz Conjecture involves repeatedly applying the following rules to a
    positive integer n until it reaches 1:
    - If n is even, divide n by 2 (n / 2).
    - If n is odd, multiply n by 3 and add 1 (3n + 1).

    Args:
        number (int): The positive integer to start with.

    Returns:
        int: The number of steps required to reach 1.
    """
    if number <= 0:
        raise ValueError("Only positive integers are allowed")

    total_steps = 0
    while number != 1:
        if number % 2 == 0:
            number //= 2
        else:
            number = (number * 3) + 1
        total_steps += 1

    return total_steps