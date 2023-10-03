class Clock:
    def __init__(self, hour, minute):
        # Initialize the Clock object with the given hour and minute
        self.hour = hour
        self.minute = minute
        # Normalize the time to ensure it's within the valid range
        self.normalize_time()

    def __repr__(self):
        # Define the __repr__ method to provide a string representation of the Clock object
        return f'Clock({self.hour}, {self.minute})'

    def __str__(self):
        # Define the __str__ method to provide a human-readable string representation of the Clock object
        return f'{self.format_digit(self.hour)}:{self.format_digit(self.minute)}'

    def __eq__(self, other):
        # Define the __eq__ method to compare two Clock objects for equality
        return self.hour == other.hour and self.minute == other.minute

    def __add__(self, minutes):
        # Define the __add__ method to add minutes to the Clock object
        self.minute += minutes
        # Normalize the time to ensure it's within the valid range
        self.normalize_time()
        return self

    def __sub__(self, minutes):
        # Define the __sub__ method to subtract minutes from the Clock object
        self.minute -= minutes
        # Normalize the time to ensure it's within the valid range
        self.normalize_time()
        return self

    def normalize_time(self):
        # Normalize the time to ensure hours and minutes are within the valid range
        self.hour += self.minute // 60
        self.minute %= 60
        self.hour %= 24

    def format_digit(self, value):
        # Helper method to format a single digit value as a two-digit string (e.g., '9' -> '09')
        return str(value).zfill(2)
