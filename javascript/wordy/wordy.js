export const answer = (question) => {
  const REGEX = /([-]?[0-9]*)\s(plus|minus|divided\sby|multiplied\sby)\s([-]?[0-9]*)/gm;
  const OPERATION = {
    'plus': '+',
    'minus': '-',
    'divided by': '/',
    'multiplied by': '*',
  }
  // Single number
  {
    let regexResult = /What is ([0-9]*)\?$/gm.exec(question)
    if (regexResult?.length) {
      return Number(regexResult[1])
    }
  }
  // Empty question or Double numbers or Missing operand
  {
    if (/What is\?$/gm.exec(question) || /(\s[0-9]){2,}/gm.exec(question) || /([0-9]+)\s(plus|minus|divided\sby|multiplied\sby)+(\?|\s[a-z]+)/gm.exec(question)) {
      throw new Error('Syntax error')
    }
  }
  let stringMatch = REGEX.exec(question);
  // Unknown operation
  if (!stringMatch?.length) {
    throw new Error('Unknown operation')
  }
  let total = 0;
  while (stringMatch !== null) {
    let left = null;
    let right = null;
    let operator = null;
    for (let index = 1; index < stringMatch.length; index++) {
      let currentValue = stringMatch[index];
      if (index % 2) {
        if (left === null && !currentValue) {
          left = total;
        } else if (left === null) {
          left = currentValue;
        } else {
          right = currentValue;
        }
      } else {
        operator = OPERATION[currentValue]
      }
    }
    total = eval(`${Number(left)} ${operator} ${Number(right)}`)
    stringMatch = REGEX.exec(question)
  }
  return total;
};