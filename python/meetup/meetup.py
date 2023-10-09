# subclassing the built-in ValueError to create MeetupDayException
from datetime import date, timedelta

class MeetupDayException(ValueError):
    """Exception raised when the Meetup weekday and count do not result in a valid date.

    message: explanation of the error.

    """
    def __init__(self):
        pass

def meetup(year, month, week, day_of_week):
    weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if week == 'teenth':
        day = 13
        while True:
            meetup_date = date(year, month, day)
            if weekdays[meetup_date.weekday()] == day_of_week:
                return meetup_date
            day += 1

    count = 0
    meetup_date = date(year, month, 1)

    while count < 4:
        if weekdays[meetup_date.weekday()] == day_of_week:
            count += 1
            if count == week:
                return meetup_date
        meetup_date += timedelta(days=1)

    if week == 'last':
        while meetup_date.month == month:
            last_meetup_date = meetup_date
            meetup_date += timedelta(days=1)
            if meetup_date.month != month:
                return last_meetup_date

    raise MeetupDayException()
