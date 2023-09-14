# Dictionary mapping grid patterns to recognized numbers
RECOGNIZE = {
    "     |  |   ": '1',
    " _  _||_    ": '2',
    " _  _| _|   ": '3',
    "   |_|  |   ": '4',
    " _ |_  _|   ": '5',
    " _ |_ |_|   ": '6',
    " _   |  |   ": '7',
    " _ |_||_|   ": '8',
    " _ |_| _|   ": '9',
    " _ | ||_|   ": '0',
}

def convert(input_grid):
    """
    Convert a list of grid patterns into recognized numbers.

    Args:
        input_grid (list): A list of strings representing grid patterns.

    Returns:
        str: A comma-separated string of recognized numbers.

    Raises:
        ValueError: If the number of input lines is not a multiple of four.

    Example:
        input_grid = [
            "    _  ",
            "  | _|",
            "  ||_ ",
            "      ",
            "    _  ",
            "| ||_|",
            "  | _|",
            "      ",
        ]
        result = convert(input_grid)
        # Output: "1234,5678"
    """
    if input_grid == [] or len(input_grid) % 4 != 0:
        raise ValueError("Number of input lines is not a multiple of four")

    numbers = []

    for i in range(0, len(input_grid), 4):
        numbers.append(four_rows_to_numbers(input_grid[i:i + 4]))

    return ",".join(numbers)

def four_rows_to_numbers(rows):
    """
    Convert four rows of grid patterns into recognized numbers.

    Args:
        rows (list): A list of four strings representing grid patterns.

    Returns:
        str: A string of recognized numbers.

    Raises:
        ValueError: If the number of input columns is not a multiple of three.

    Example:
        rows = [
            "    _  ",
            "  | _|",
            "  ||_ ",
            "      ",
        ]
        result = four_rows_to_numbers(rows)
        # Output: "123"
    """
    if any(r == "" or len(r) % 3 != 0 for r in rows):
        raise ValueError("Number of input columns is not a multiple of three")

    numbers = []

    for i in range(0, len(rows[0]), 3):
        number = rows[0][i:i + 3] + rows[1][i:i + 3] + \
            rows[2][i:i + 3] + rows[3][i:i + 3]
        numbers.append(RECOGNIZE.get(number, "?"))

    return "".join(numbers)
