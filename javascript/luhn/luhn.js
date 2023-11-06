//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  str = str.replace(/ /g, "");
  if(str.length < 2){
    return false;
  }

  let digits = [...str].map(c => parseInt(c));
  for(let i = digits.length - 2; i >= 0; i -= 2){
   digits[i] = (digits[i] * 2 > 9) ? digits[i] * 2 - 9 : digits[i] * 2;
  }
  return digits.reduce((sum, digit) => sum + digit) % 10 === 0;
};