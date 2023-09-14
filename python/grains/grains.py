def square(number):
    # Checking if the number entered is between the accepted range
    if number < 1 or number > 64:
        # When the square value is not in the acceptable range
        raise ValueError("square must be between 1 and 64")
    # Returning the math of 2 ^ n - 1, with 'n' being the number of a given square
    return 2 ** (number - 1)

def total():
    total_grains = 0
    for grain in range(1, 65):
        total_grains += square(grain)
        grain += 1
    return total_grains
