class Matrix:
    def __init__(self, matrix_string):
        # Initialize the matrix as an empty list
        self.matrix = []

        # Split the input string by newline character to get rows
        for row in matrix_string.split('\n'):
            # Split each row by space and convert the elements to integers, then append to the matrix
            self.matrix.append([int(x) for x in row.split()])

    def row(self, index):
        # Return the specified row of the matrix (1-based index)
        return self.matrix[index - 1]

    def column(self, index):
        # Return the specified column of the matrix (1-based index)
        # Extract the elements at the specified column index from each row
        return [row[index - 1] for row in self.matrix]
