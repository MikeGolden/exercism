def sum_of_multiples(limit, multiples):
    """
    Calculate the sum of multiples of given numbers up to a specified limit.

    This function takes an integer `limit` and a list of integers `multiples`.
    It calculates the sum of all multiples of the numbers in the `multiples` list
    that are less than the specified `limit`. Multiples of zero are not considered.

    Args:
        limit (int): The upper limit for finding multiples.
        multiples (list): A list of integers to find multiples of.

    Returns:
        int: The sum of all unique multiples of the numbers in the `multiples` list
             that are less than the specified `limit`.

    Example:
        >>> sum_of_multiples(10, [3, 5])
        23  # Multiples of 3: 3, 6, 9; Multiples of 5: 5
           # Sum: 3 + 5 + 6 + 9 = 23
    """
    if multiples == [0]:
        return 0
    try:
        multiples.remove(0)
    except:
        pass
    return sum(set(i for i in range(limit) for multiple in multiples if i % multiple == 0))