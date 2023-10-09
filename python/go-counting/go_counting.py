# Constants to represent player colors and empty intersection
WHITE, BLACK, NONE = "W", "B", " "

class Board:

    def __init__(self, board):
        # Initialize the board as a list of lists
        # Each inner list represents a row on the board
        self.board = [list(row) for row in board]

    def territory(self, x, y):
        # Check if the given coordinates (x, y) are valid
        if x < 0 or x >= len(self.board[0]) or y < 0 or y >= len(self.board):
            raise ValueError('Invalid coordinate')

        # If the intersection is not empty, return (NONE, set())
        if self.board[y][x] != NONE:
            return (NONE, set())

        # Initialize lists and sets for tracking stones, territory, and seen intersections
        stones = [(x, y)]  # List of coordinates of intersections to explore
        stone = set()      # Set to store neighboring stone colors
        seen = set()       # Set to store already visited intersections
        territory = set()  # Set to store the player's territory

        while stones != []:
            x, y = stones.pop()
            if self.board[y][x] == NONE:
                # Check neighboring intersections
                if x > 0 and (x - 1, y) not in seen:
                    stones.append((x - 1, y))
                if x < len(self.board[0]) - 1 and (x + 1, y) not in seen:
                    stones.append((x + 1, y))
                if y > 0 and (x, y - 1) not in seen:
                    stones.append((x, y - 1))
                if y < len(self.board) - 1 and (x, y + 1) not in seen:
                    stones.append((x, y + 1))
                seen.add((x, y))
                territory.add((x, y))
            else:
                stone.add(self.board[y][x])

        # Determine the stone color (BLACK or WHITE) for the territory
        # If the number of unique neighboring stone colors is even, it's NONE
        # Otherwise, it's the unique stone color found
        stone = NONE if len(stone) % 2 == 0 else stone.pop()

        return (stone, territory)

    def territories(self):
        # Initialize a dictionary to store territories for each player
        territories = {BLACK: set(), WHITE: set(), NONE: set()}

        # Iterate through the board to find territories
        for y in range(len(self.board)):
            for x in range(len(self.board[0])):
                stone, territory = self.territory(x, y)
                territories[stone].update(territory)  # Update the corresponding player's territory set

        return territories
