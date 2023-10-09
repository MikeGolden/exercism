def rows(row_count: int) -> list[list[int]]:
    # Check for invalid input (negative row_count)
    if row_count < 0:
        raise ValueError("number of rows is negative")
    
    # Base case 1: If row_count is 0, return an empty list (empty triangle)
    if row_count == 0:
        return []
    
    # Base case 2: If row_count is 1, return a list containing the first row [1]
    if row_count == 1:
        return [[1]]

    # Recursive case:
    # - Calculate the previous rows using recursion (excluding the last row)
    # - Compute the new row based on the last row
    # - Return the concatenation of previous rows, last row, and the new row
    *prefix, last = rows(row_count - 1)  # Recursive call to get previous rows
    new = [a + b for a, b in zip(last + [0], [0] + last)]  # Compute the new row

    # Return the concatenation of previous rows, last row, and the new row
    return [*prefix, last, new]
