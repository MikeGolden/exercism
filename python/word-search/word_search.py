# Define a Point class to represent coordinates (x, y)
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

# Define the WordSearch class
class WordSearch:
    def __init__(self, puzzle):
        # Initialize puzzle size and create lists for horizontal, vertical, diagonal left-to-right, and diagonal right-to-left words
        self.sizey = len(puzzle)
        self.sizex = len(puzzle[0])
        self.horizontal = puzzle
        self.vertical = []
        self.diagonal_l2r = []
        self.diagonal_r2l = []

        # Create vertical and diagonal words lists based on the puzzle
        for x in range(self.sizex):
            self.vertical.append(
                "".join(puzzle[y][x] for y in range(self.sizey)))
        for x in range(1 - self.sizey, self.sizex):
            y = max(-x, 0)
            x = max(x, 0)
            self.diagonal_l2r.append("".join(
                puzzle[y + i][x + i]
                for i in range(min(self.sizey - y, self.sizex - x))))
            self.diagonal_r2l.append("".join(
                puzzle[y + i][-x - i - 1]
                for i in range(min(self.sizey - y, self.sizex - x))))

    # Define the search function to find a word in the puzzle
    def search(self, word, reverse=False):
        # Search for the word in horizontal rows
        for y in range(self.sizey):
            if word in self.horizontal[y]:
                x = self.horizontal[y].find(word)
                return (Point(x, y), Point(x + len(word) - 1, y))

        # Search for the word in vertical columns
        for x in range(self.sizex):
            if word in self.vertical[x]:
                y = self.vertical[x].find(word)
                return (Point(x, y), Point(x, y + len(word) - 1))

        # Search for the word in diagonal left-to-right and right-to-left directions
        for z in range(len(self.diagonal_l2r)):
            if word in self.diagonal_l2r[z]:
                i = self.diagonal_l2r[z].find(word)
                x = z - self.sizey + 1
                y = max(-x, 0) + i
                x = max(x, 0) + i
                return (Point(x, y), Point(x + len(word) - 1, y + len(word) - 1))
            elif word in self.diagonal_r2l[z]:
                i = self.diagonal_r2l[z].find(word)
                x = z - self.sizey + 1
                y = max(-x, 0) + i
                x = self.sizex - 1 - max(x, 0) - i
                return (Point(x, y), Point(x - len(word) + 1, y + len(word) - 1))

        # If the word is not found and reverse is not True, try searching in reverse
        if not reverse:
            search_rev = self.search(word[::-1], True)
            if search_rev is not None:
                return (search_rev[1], search_rev[0])

        # Return None if the word is not found
        return None
