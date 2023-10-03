from math import ceil, sqrt


def cipher_text(plain_text):
    # Normalize the input text: convert to lowercase and keep alphanumeric characters.
    chars = [ch.lower() for ch in plain_text if ch.isalnum()]

    # Calculate the number of columns (c) and rows (r) for the rectangle.
    # c is determined by the square root of the number of characters, and r depends on c.
    c = ceil(sqrt(len(chars)))
    r = ceil(len(chars) / c) if c > 0 else 0  # Ensure c is greater than 0 to avoid division by zero.

    # Create an empty matrix (list of lists) 'cols' to represent the rectangle.
    # Initialize each cell with a space character.
    cols = [[' '] * r for _ in range(c)]

    # Fill the matrix 'cols' by iterating over rows and columns.
    for i in range(r):
        for j in range(c):
            # Calculate the index of the character in 'chars' to be placed in the current cell.
            # Ensure that the index does not exceed the length of 'chars'.
            if i * c + j < len(chars):
                cols[j][i] = chars[i * c + j]
            else:
                cols[j][i] = ' '  # Fill empty cells with space characters.

    # Join the elements of each column to form the encoded message.
    # Join the columns with spaces to create chunks of text as specified.
    return ' '.join(''.join(col) for col in cols)