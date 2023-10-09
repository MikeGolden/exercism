class Point:
    def __init__(self, x, y):
        self.x = x  # Initialize the x-coordinate of the Point object
        self.y = y  # Initialize the y-coordinate of the Point object

    def __eq__(self, other):
        # Define the equality comparison method for Point objects
        return self.x == other.x and self.y == other.y


class WordSearch:
    def __init__(self, puzzle):
        self.puzzle = puzzle

    def search(self, word):
        word = word.lower()  # Convert the word to lowercase for case-insensitive search

        # Define possible directions (horizontal, vertical, diagonal, and reverse diagonal)
        directions = [
            (0, 1),  # Right
            (1, 0),  # Down
            (1, 1),  # Diagonal down-right
            (-1, 1),  # Diagonal down-left
        ]

        for row in range(len(self.puzzle)):
            for col in range(len(self.puzzle[row])):
                for dx, dy in directions:
                    x, y = col, row  # Initialize starting point
                    found = True  # Assume the word is found
                    for letter in word:
                        if (
                            x < 0
                            or x >= len(self.puzzle[0])
                            or y < 0
                            or y >= len(self.puzzle)
                            or self.puzzle[y][x].lower() != letter
                        ):
                            found = False  # Word not found
                            break
                        x += dx  # Move in the current direction
                        y += dy
                    if found:
                        # Calculate the starting and ending points of the word
                        start = Point(col, row)
                        end = Point(x - dx, y - dy)
                        return start, end  # Return the first occurrence

        # Return None if the word is not found
        return None