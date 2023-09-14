def saddle_points(matrix):
    """
    Find saddle points in a given matrix.

    Args:
        matrix (list of lists): The input matrix represented as a list of lists.

    Returns:
        list of dict: A list of dictionaries containing the row and column indices
                      of saddle points in the matrix.

    Raises:
        ValueError: If the input matrix is irregular (not all rows have the same length).

    A saddle point in a matrix is an element that is both the maximum value in its row
    and the minimum value in its column.

    Example:
        matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
        saddle_points = saddle_points(matrix)
        # Output: [{'row': 1, 'column': 3}]
        
    In the example above, the saddle point is the number 3, located in the first row
    (row index 1) and the third column (column index 3).
    """
    if len(matrix) == 0 or len(matrix[0]) == 0:
        return []

    if any(len(row) != len(matrix[0]) for row in matrix):
        raise ValueError("irregular matrix")

    row_max = set()
    col_min = set()

    # Find the maximum value in each row and store its row and column indices
    for row in range(len(matrix)):
        max_val = max(matrix[row])

        for col, val in enumerate(matrix[row]):
            if val == max_val:
                row_max.add((row + 1, col + 1))

    # Find the minimum value in each column and store its row and column indices
    for col in range(len(matrix[0])):
        matrix_col = [matrix[row][col] for row in range(len(matrix))]
        min_val = min(matrix_col)

        for row, val in enumerate(matrix_col):
            if val == min_val:
                col_min.add((row + 1, col + 1))

    # Find the intersection of row_max and col_min to get saddle points
    return [{"row": row, "column": col} for row, col in row_max & col_min]
