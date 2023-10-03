class Clock:
    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute
        self.normalize_time()

    def __repr__(self):
        return f'Clock({self.hour}, {self.minute})'

    def __str__(self):
        return f'{self.format_digit(self.hour)}:{self.format_digit(self.minute)}'

    def __eq__(self, other):
        return self.hour == other.hour and self.minute == other.minute

    def __add__(self, minutes):
        self.minute += minutes
        self.normalize_time()
        return self

    def __sub__(self, minutes):
        self.minute -= minutes
        self.normalize_time()
        return self

    def normalize_time(self):
        self.hour += self.minute // 60
        self.minute %= 60
        self.hour %= 24

    def format_digit(self, value):
        return str(value).zfill(2)
