package booking

import "time"

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
	layout := "1/2/2006 15:04:05"
	parsedTime, _ := time.Parse(layout, date)
	return parsedTime
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
	scheduledTime := Schedule(date)
	currentTime := time.Now()
	return scheduledTime.Before(currentTime)
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
	scheduledTime := Schedule(date)
	afternoonStart := time.Date(0, 1, 1, 12, 0, 0, 0, time.UTC)
	afternoonEnd := time.Date(0, 1, 1, 18, 0, 0, 0, time.UTC)
	return scheduledTime.After(afternoonStart) && scheduledTime.Before(afternoonEnd)
}

// Description returns a formatted string of the appointment time.
func Description(date string) string {
	scheduledTime := Schedule(date)
	return "You have an appointment on " + scheduledTime.Weekday().String() + ", " + scheduledTime.Format("January 2, 2006") + ", at " + scheduledTime.Format("15:04") + "."
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
	currentYear := time.Now().Year()
	anniversary := time.Date(currentYear, 9, 15, 0, 0, 0, 0, time.UTC)
	return anniversary
}
