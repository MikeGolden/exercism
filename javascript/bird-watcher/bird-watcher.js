// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // Use the reduce method to sum up all the bird counts
  const total = birdsPerDay.reduce((accumulator, currentCount) => accumulator + currentCount, 0);
  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // Ensure week is within a valid range
  if (week < 1 || week > Math.ceil(birdsPerDay.length / 7)) {
    return 0; // Invalid week, return 0 birds
  }

  // Calculate the starting and ending indices for the specified week
  const startIndex = (week - 1) * 7;
  const endIndex = startIndex + 7;

  // Use slice to extract the bird counts for the specified week
  const birdCountsInWeek = birdsPerDay.slice(startIndex, endIndex);

  // Use reduce to calculate the total bird count for the week
  const totalInWeek = birdCountsInWeek.reduce((accumulator, currentCount) => accumulator + currentCount, 0);

  return totalInWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // Start from the first day and increment counts for every second day
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }

  return birdsPerDay;
}
