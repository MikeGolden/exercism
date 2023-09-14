def annotate(minefield):
    """
    Adds mine counts to a Minesweeper minefield and returns the annotated minefield.

    Args:
        minefield (list of str): A list of strings representing the Minesweeper minefield.
            ' ' represents an empty cell, and '*' represents a mine.

    Returns:
        list of str: Annotated minefield with mine counts as numbers. An empty cell
            will contain the count of adjacent mines, or remain empty if there are no mines nearby.

    Raises:
        ValueError: If the input minefield is not rectangular or contains invalid characters.

    Examples:
        input_minefield = [
            " * * ",
            "  *  ",
            "  *  ",
            "     "
        ]
        annotate(input_minefield)
        # Output: [' *3* ', '  *3 ', '  *2 ', ' 111 ']
    """

    # Convert the input minefield to a list of lists for easier manipulation.
    minefield = [list(row) for row in minefield]

    # Check if the minefield is rectangular.
    for row in range(len(minefield)):
        if len(minefield[row]) != len(minefield[0]):
            raise ValueError("The board is invalid with current input.")

    # Iterate through the minefield to count mines and annotate empty cells.
    for row in range(len(minefield)):
        for col in range(len(minefield[0])):
            if minefield[row][col] == ' ':
                counter = 0

                # Check adjacent cells for mines.
                for r in range(max(row - 1, 0), min(row + 2, len(minefield))):
                    for c in range(max(col - 1, 0), min(col + 2, len(minefield[0]))):
                        if minefield[r][c] == '*':
                            counter += 1

                # Annotate the empty cell with the mine count.
                if counter > 0:
                    minefield[row][col] = str(counter)
            elif minefield[row][col] != '*':
                raise ValueError("The board is invalid with current input.")

    # Convert the annotated minefield back to a list of strings.
    return [''.join(row) for row in minefield]
