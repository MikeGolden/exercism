export const isPaired = (input) => {
  // Initialize an empty stack
  let stack = [];

  // Define strings of opening and closing brackets
  let openingBrackets = '([{';
  let closingBrackets = ')]}';

  // Traverse the input string
  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0 || openingBrackets.indexOf(stack[stack.length -1]) !== closingBrackets.indexOf(char)) {
        return true;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};
