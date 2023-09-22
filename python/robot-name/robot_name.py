from random import choices
from string import ascii_uppercase, digits


class Robot:
    def __init__(self):
        # Initialize the robot's name as an empty string and create a set to store old names
        self.name = ''
        self.old_names = set()

        # Call the reset method to assign a new name during robot creation
        self.reset()

    def reset(self):
        while True:
            # Generate a new name with two uppercase letters and three digits
            self.name = ''.join(
                choices(ascii_uppercase, k=2) + choices(digits, k=3))

            # Check if the generated name has been used before
            if self.name not in self.old_names:
                # If it's a unique name, add it to the set of old names and break out of the loop
                self.old_names.add(self.name)
                break
