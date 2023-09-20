def square_of_sum(number):
    # Calculate the square of the sum of the first 'number' natural numbers.
    # Formula: (1 + 2 + ... + number) ** 2
    return ((number * (number + 1)) // 2) ** 2

def sum_of_squares(number):
    # Calculate the sum of the squares of the first 'number' natural numbers.
    result = 0
    for i in range(1, number + 1):
        result += i ** 2
    return result

def difference_of_squares(number):
    # Calculate the difference between the square of the sum and the sum of squares.
    # Formula: (1 + 2 + ... + number) ** 2 - (1^2 + 2^2 + ... + number^2)
    return square_of_sum(number) - sum_of_squares(number)