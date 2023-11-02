// Define a function to check if brackets in a string are paired correctly
export const isPaired = (input) => {
  // Initialize an empty stack to store the opening brackets
  const stack = [];

  // Define an object that maps the closing brackets to their corresponding opening brackets
  const pairs = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  // Traverse the input string
  for (let char of input) {
    // If the current character is an opening bracket, push it onto the stack
    if (['[', '{', '('].includes(char)) {
      stack.push(char);
    } 
    // If the current character is a closing bracket, check the top of the stack
    else if ([']', '}', ')'].includes(char)) {
      // If the stack is empty or the top of the stack is not the matching opening bracket, return false
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, return true. If not, return false
  return stack.length === 0;
};
