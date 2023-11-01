// Define an array of weekdays
const weekdays = [
 'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday'
]

// Define an object that maps descriptors to the corresponding range of days
const firstDates = { first: 1, second: 8, third: 15, fourth: 22, teenth: 13 } 

// Define the meetup function
export const meetup = (year, month, descriptor, weekday) => {
 // Get the index of the weekday in the weekdays array
 const dayIndex = weekdays.indexOf(weekday)

 // Get the first date in the range based on the descriptor
 const firstDateInRange = firstDates[descriptor] || new Date(year, (month), 0).getDate() - 6

 // Get the day of the week of the first date in the range
 const firstDay = new Date(year, month-1, firstDateInRange).getDay()

 // Calculate the date of the meetup
 const date = firstDateInRange + (dayIndex - firstDay + 7) % 7

 // Return the date of the meetup
 return new Date(year, month-1, date)
}
