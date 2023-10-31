export const answer = (question) => {
  // Remove question marks and split the input into words
  const words = question.replace('?', '').split(' ');

  // Initialize variables to keep track of the current number and operation
  let currentNumber = null;
  let currentOperation = null;

  // Iterate through the words to parse and evaluate the math problem
  for (const word of words) {
    const number = parseInt(word);

    if (!isNaN(number)) {
      // If the word is a number, update the currentNumber
      if (currentNumber === null) {
        currentNumber = number;
      } else {
        // If there is a currentOperation, perform the operation
        if (currentOperation === 'plus') {
          currentNumber += number;
        } else if (currentOperation === 'minus') {
          currentNumber -= number;
        } else if (currentOperation === 'multiplied') {
          currentNumber *= number;
        } else if (currentOperation === 'divided') {
          if (number === 0) {
            throw new Error('Division by zero is not allowed.');
          }
          currentNumber /= number;
        }
        currentOperation = null; // Reset the currentOperation
      }
    } else if (word === 'plus' || word === 'minus' || word === 'multiplied' || word === 'divided') {
      // If the word is an operation, set it as the currentOperation
      currentOperation = word;
    } else {
      // Handle unsupported operations or invalid syntax
      throw new Error('I do not understand the question.');
    }
  }

  // Return the final result
  return currentNumber;
};
