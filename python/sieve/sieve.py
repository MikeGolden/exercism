def primes(limit):
    """
    Generate a list of prime numbers up to a specified limit.

    This function uses the Sieve of Eratosthenes algorithm to find prime numbers
    up to the given `limit`. It returns a list of all prime numbers found.

    Args:
        limit (int): The upper limit for finding prime numbers.

    Returns:
        list: A list containing all prime numbers less than or equal to `limit`.

    Example:
        >>> primes(10)
        [2, 3, 5, 7]  # Prime numbers from 2 to 10
    """
    is_prime = [True] * (limit + 1)

    for i in range(2, int(limit ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, limit + 1, i):
                is_prime[j] = False

    return [i for i in range(2, limit + 1) if is_prime[i]]
