# Import necessary modules from the Python standard library
from calendar import day_name, monthrange, weekday
from datetime import date

# Define a custom exception class for MeetupDayException
class MeetupDayException(Exception):
    pass

# Define a dictionary to map week descriptors to their starting days
START_DAY = {
    'first': 1,
    'second': 8,
    'third': 15,
    'fourth': 22,
    'fifth': 29,
    'teenth': 13,
    'last': None
}

# Define the meetup function
def meetup(year, month, which, week_day):
    # Check if the provided week descriptor is valid
    if which not in START_DAY:
        raise MeetupDayException(f'What is {which}?')

    # Check if the provided week day is valid
    if week_day not in day_name:
        raise MeetupDayException(f'Unknown day: {week_day}')

    # Determine the starting day of the meetup based on the week descriptor
    start_day = START_DAY[which] or monthrange(year, month)[1] - 6

    try:
        # Calculate the weekday (0 = Monday, 1 = Tuesday, etc.) of the starting day
        start_day_wday = weekday(year, month, start_day)
        # Calculate the desired weekday (0 = Monday, 1 = Tuesday, etc.)
        wanted_wday = list(day_name).index(week_day)
        # Calculate the delta between the desired weekday and starting day's weekday
        delta = (wanted_wday - start_day_wday) % 7
        # Calculate the meetup date by adding the delta to the starting day
        return date(year, month, start_day + delta)

    except ValueError:
        # Handle the case where the date is invalid, such as February 30
        raise MeetupDayException("That day does not exist.")
