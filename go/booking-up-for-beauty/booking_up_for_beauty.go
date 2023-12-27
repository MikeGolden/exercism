package booking

import (
	"fmt"
	"time"
)

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
	layout := "1/2/2006 15:04:05"

    t, _ := time.Parse(layout,date) 

    return t
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
	layout := "January 2, 2006 15:04:05"
	appointmentTime, _ := time.Parse(layout, date)
	currentTime := time.Now()
    
	return appointmentTime.Before(currentTime)
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
	layout := "Monday, January 2, 2006 15:04:05"
	appointmentTime, _ := time.Parse(layout, date)
	appointmentHour := appointmentTime.Hour()

	return appointmentHour >= 12 && appointmentHour < 18
}

// Description returns a formatted string of the appointment time.
func Description(dateStr string) string {
	// Define the input date layout that matches the format
	inputLayout := "1/2/2006 15:04:05"

	appointmentTime, _ := time.Parse(inputLayout, dateStr)
	outputLayout := "Monday, January 2, 2006, at 15:04"
	description := fmt.Sprintf("You have an appointment on %s.", appointmentTime.Format(outputLayout))

	return description
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
	openingDate := time.Date(2020, time.September, 15, 0, 0, 0, 0, time.UTC)
	currentYear := time.Now().Year()
	anniversaryDate := time.Date(currentYear, openingDate.Month(), openingDate.Day(), 0, 0, 0, 0, time.UTC)

	return anniversaryDate
}