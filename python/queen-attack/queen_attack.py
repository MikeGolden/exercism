class Queen:
    # Class variable to keep track of the positions of all queens
    position_queens = []

    def __init__(self, row, column):
        # Check if the row is positive
        if row < 0:
            raise ValueError("row not positive")
        
        # Check if the row is within the board limits (0-7)
        if row > 7:
            raise ValueError("row not on board")
        
        # Check if the column is positive
        if column < 0:
            raise ValueError("column not positive")
        
        # Check if the column is within the board limits (0-7)
        if column > 7:
            raise ValueError("column not on board")
        
        # Create a tuple to represent the queen's position
        aux = (row, column)
        
        # Check if there is already a queen in the same position
        if aux in Queen.position_queens:
            raise ValueError("Invalid queen position: both queens in the same square")
        
        # Initialize the queen's position and add it to the list of positions
        self.position = aux
        Queen.position_queens.append(aux)

    def can_attack(self, another_queen):
        # Clear the list of queen positions to ensure there are no conflicts
        Queen.position_queens.clear()
        
        # Get the positions of both queens
        queen1 = self.position
        queen2 = another_queen.position
        
        # Check if the queens are in the same row or column
        if queen1[0] == queen2[0] or queen1[1] == queen2[1]:
            return True
        
        # Check if the queens are on the same diagonal
        if (queen1[0] - queen2[0]) ** 2 == (queen1[1] - queen2[1]) ** 2:
            return True
        
        # If neither condition is met, the queens cannot attack each other
        return False
