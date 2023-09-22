def is_prime(number):
    """
    Check if a given number is a prime number.

    Args:
        number (int): The number to check for primality.

    Returns:
        bool: True if the number is prime, False otherwise.
    """
    # Check if the number is less than 2, which is not prime
    if number < 2:
        return False
    # Check if the number is exactly 2, which is prime
    if number == 2:
        return True
    # Check if the number is even, excluding 2 which is already checked
    if number % 2 == 0:
        return False

    # Check for factors up to the square root of the number
    for i in range(3, int(number**0.5) + 1, 2):
        if number % i == 0:
            return False

    # If none of the checks above returned False, the number is prime
    return True

def prime(number):
    """
    Find the nth prime number.

    Args:
        number (int): The position of the prime number to find.

    Returns:
        int: The nth prime number.
    
    Raises:
        ValueError: If the input number is non-positive.
    """
    # Check if the input number is non-positive, and if so, raise an error
    if number <= 0:
        raise ValueError('there is no zeroth prime')

    primes = []  # List to store prime numbers
    num = 2  # Start checking numbers from 2, the first prime number

    while len(primes) < number:
        if is_prime(num):
            primes.append(num)  # If the number is prime, add it to the list of primes
        num += 1

    # Return the last (nth) prime number found
    return primes[-1]