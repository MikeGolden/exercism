# Globals for the directions
# Change the values as you see fit
EAST = 1
NORTH = 0
WEST = 3
SOUTH = 2


# Robot class definition
class Robot:
    # Constructor to initialize the robot's direction and coordinates
    def __init__(self, direction=NORTH, x=0, y=0):
        self.coordinates = (x, y)  # Initialize coordinates as a tuple (x, y)
        self.direction = direction  # Initialize direction (NORTH by default)

    # Method to turn the robot right
    def turn_right(self):
        self.direction = (self.direction + 1) % 4  # Update direction clockwise

    # Method to turn the robot left
    def turn_left(self):
        for _ in range(3):
            self.turn_right()  # Equivalent to turning right three times (270-degree left turn)

    # Method to move the robot forward one step in its current direction
    def advance(self):
        x, y = self.coordinates  # Get current coordinates (x, y)

        # Update coordinates based on the current direction
        if self.direction == NORTH:
            self.coordinates = (x, y + 1)  # Move one step north (increment y)
        elif self.direction == EAST:
            self.coordinates = (x + 1, y)  # Move one step east (increment x)
        elif self.direction == SOUTH:
            self.coordinates = (x, y - 1)  # Move one step south (decrement y)
        elif self.direction == WEST:
            self.coordinates = (x - 1, y)  # Move one step west (decrement x)

    # Method to execute a sequence of instructions (R: turn right, L: turn left, A: advance)
    def move(self, instructions):
        for ins in instructions:
            if ins == 'R':
                self.turn_right()  # Turn right
            elif ins == 'L':
                self.turn_left()  # Turn left (270-degree left turn)
            elif ins == 'A':
                self.advance()  # Move one step forward