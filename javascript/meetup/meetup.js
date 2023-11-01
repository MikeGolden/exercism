export const meetup = (year, month, dayOfWeek, descriptor) => {
  // Map of descriptors to the corresponding range of days
  const descriptorMap = {
    'first': 1,
    'second': 8,
    'third': 15,
    'fourth': 22,
    'fifth': 29,
    'last': 35,
    'montheenth': 13,
    'tuesteenth': 19,
    'wednesteenth': 25,
    'thursteenth': 31,
    'friteenth': 26,
    'saturteenth': 23,
    'sunteenth': 30,
  };

  // Map of days of the week to the corresponding numbers
  const dayOfWeekMap = {
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
    'sunday': 0,
  };

  // Create a new Date object for the first day of the specified month and year
  let date = new Date(year, month - 1, descriptorMap[descriptor]);

  // Use a loop to find the correct day of the week
  while (date.getDay() !== dayOfWeekMap[dayOfWeek]) {
    date.setDate(date.getDate() + 1);
  }

  // Return the date
  return date;
};
