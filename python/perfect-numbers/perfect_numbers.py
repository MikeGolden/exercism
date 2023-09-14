def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    :raise: ValueError: Classification is only possible for positive integers.
    """
    if number < 1:
        raise ValueError("Classification is only possible for positive integers.")

    divisor_sum = sum([divisor for divisor in range(1, number) if number % divisor == 0])

    if divisor_sum == number:
        return "perfect"
    elif divisor_sum > number:
        return "abundant"
    else:
        return "deficient"

