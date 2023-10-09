def rows(row_count):
    # Check for the base case when row_count is 0
    if row_count == 0:
        return []

    # Recursive case: Generate the previous row
    prev_triangle = rows(row_count - 1)

    # Calculate the current row based on the previous row
    current_row = [1]  # The first element is always 1
    for i in range(1, row_count):
        current_element = prev_triangle[row_count - 1][i - 1] + prev_triangle[row_count - 1][i]
        current_row.append(current_element)

    current_row.append(1)  # The last element is always 1

    # Append the current row to the previous triangle
    prev_triangle.append(current_row)

    return prev_triangle

def generate_pascals_triangle_rows(row_count):
    triangle = rows(row_count)
    return triangle
