def spiral_matrix(size):
    """
    Generate a clockwise spiral matrix of the given size.

    Args:
        size (int): The size of the square spiral matrix to generate.

    Returns:
        list of lists: A 2D matrix filled with integers in a clockwise spiral pattern.

    Raises:
        ValueError: If the input size is less than or equal to 0.

    Example:
        >>> spiral_matrix(3)
        [[1, 2, 3],
         [8, 9, 4],
         [7, 6, 5]]
    """

    if size < 0:
        raise ValueError("Size must be greater than 0")

    # Initialize the matrix with zeros.
    mat = [[0] * size for _ in range(size)]

    num = 1  # Initialize a counter to keep track of the numbers to be placed in the matrix.
    left, right, top, bottom = 0, size - 1, 0, size - 1

    while num <= size * size:
        # Fill the top row.
        for c in range(left, right + 1):
            mat[top][c] = num
            num += 1
        top += 1

        # Fill the rightmost column.
        for r in range(top, bottom + 1):
            mat[r][right] = num
            num += 1
        right -= 1

        # Fill the bottom row.
        for c in range(right, left - 1, -1):
            mat[bottom][c] = num
            num += 1
        bottom -= 1

        # Fill the leftmost column.
        for r in range(bottom, top - 1, -1):
            mat[r][left] = num
            num += 1
        left += 1

    return mat
