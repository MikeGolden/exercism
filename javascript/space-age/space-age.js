//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  // Define the orbital periods relative to Earth's orbital period (in seconds)
  const earthYear = 31557600; // Earth's orbital period in seconds

  const orbitalPeriods = {
    'earth': earthYear, 
    'mercury': 0.2408467 * earthYear,
    'venus': 0.61519726 * earthYear,
    'mars': 1.8808158 * earthYear,
    'jupiter': 11.862615 * earthYear,
    'saturn': 29.447498 * earthYear,
    'uranus': 84.016846 * earthYear,
    'neptune': 164.79132 * earthYear,
  };

  // Calculate the age on the specified planet
  const ageOnPlanet = ageInSeconds / orbitalPeriods[planet];

  // Round the age to two decimal places
  return parseFloat(ageOnPlanet.toFixed(2));
};
