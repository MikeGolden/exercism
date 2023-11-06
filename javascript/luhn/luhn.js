export const valid = (number) => {
  number = number.replace(/\D/g, '');
  
  if (number.length <= 1) {
    return false;
  }

  let sum = 0;
  let doubleUp = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let curDigit = parseInt(number.charAt(i));

    if (doubleUp) {
      curDigit *= 2;

      if (curDigit > 9) {
        curDigit -= 9;
      }
    }
  
    sum += curDigit;

    doubleUp = !doubleUp;
  }

  return sum % 10 === 0;
};
