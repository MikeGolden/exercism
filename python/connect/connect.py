
class ConnectGame:
    def __init__(self, board):
        # Initialize the game board by removing spaces and splitting lines
        self.board = [row.replace(" ", "") for row in board.splitlines()]

    def get_winner(self):
        # Check if player 'O' wins, return 'O' if true
        if self.is_winner("O"):
            return "O"
        # Check if player 'X' wins, return 'X' if true
        elif self.is_winner("X"):
            return "X"
        else:
            # If no player wins, return an empty string to indicate a draw
            return ""

    def is_winner(self, player):
        # Prepare the board for the specified player ('O' or 'X')
        board = self.board if player == "O" else [
            [self.board[r][c] for r in range(len(self.board))]
            for c in range(len(self.board[0]))]
        # Find the starting positions for the specified player ('O' or 'X')
        positions = [(0, c) for c, s in enumerate(board[0]) if s == player]
        # Create a set to keep track of checked positions
        checked = set(positions)

        # Use a depth-first search (DFS) to check for a winning path
        while positions != []:
            r, c = positions.pop()

            # If the current position is in the last row, the player wins
            if r == len(board) - 1:
                return True

            # Check neighboring positions in all directions
            for i, j in [(-1, 1), (-1, 0), (0, -1), (0, 1), (1, -1), (1, 0)]:
                r_ = r + i
                c_ = c + j

                # Ensure the neighboring position is within the board boundaries
                if 0 <= r_ < len(board) and 0 <= c_ < len(board[0]) \
                        and board[r_][c_] == player and (r_, c_) not in checked:
                    positions.append((r_, c_))
                    checked.add((r_, c_))

        # If no winning path is found, return False
        return False
