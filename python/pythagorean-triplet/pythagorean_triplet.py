def triplets_with_sum(number):
    """
    Find Pythagorean triplets whose sum is equal to the given number.

    This function finds Pythagorean triplets (three positive integers a, b, and c)
    such that a^2 + b^2 = c^2 and their sum (a + b + c) equals the specified `number`.
    
    Args:
        number (int): The target sum for the Pythagorean triplets.
        
    Returns:
        list: A list of Pythagorean triplets, each represented as a list [a, b, c].

    Example:
        >>> triplets_with_sum(12)
        [[3, 4, 5]]  # The Pythagorean triplet [3, 4, 5] with a sum of 12
    """
    triplets = []

    for a in range(1, number // 3):
        l = a + 1
        r = (number - a - 1) // 2

        while l <= r:
            b = (l + r) // 2
            c = number - a - b

            if a * a + b * b < c * c:
                l = b + 1
            elif a * a + b * b > c * c:
                r = b - 1
            else:
                triplets.append([a, b, c])
                break

    return triplets