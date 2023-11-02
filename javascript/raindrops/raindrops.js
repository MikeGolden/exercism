export const convert = (number) => {
  // Initialize an empty string to store the raindrop sounds
  let sounds = '';

  // Check if the number has 3, 5 or 7 as a factor
  if (number % 3 === 0) {
    sounds += 'Pling';
  }
  if (number % 5 === 0) {
    sounds += 'Plang';
  }
  if (number % 7 === 0) {
    sounds += 'Plong';
  }

  // If the number does not have any of 3, 5 or 7 as a factor,
  // convert the number to a string and add it to the string
  if (sounds === '') {
    sounds = number.toString();
  }

  return sounds;
};
