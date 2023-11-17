// Main function to create a domino chain
export const chain = (dominoes) => {
  if (dominoes.length === 0) {
    return [];
  }
  
  // Get the last domino as the starting point for the chain
  const head = dominoes[dominoes.length - 1];
  return helperChain([head], dominoes.slice(0, -1));
};

// Recursive function to build the domino chain
const helperChain = (currentChain, dominoesLeft) => {
  // Get the head and tail values of the current chain
  const head = currentChain[0][0];
  const tail = currentChain[currentChain.length - 1][1];
  
  // Check if there are no dominoes left to add to the chain
  if (dominoesLeft.length === 0) {
    return head === tail ? currentChain : null;
  }
  
  // Iterate through the remaining dominoes
  for (let i = 0; i < dominoesLeft.length; i++) {
    const first = dominoesLeft[i][0];
    const second = dominoesLeft[i][1];
    const newDomLeft = [...dominoesLeft];
    newDomLeft.splice(i, 1);
    
    // Check if the current head matches the first or second value of the domino
    if (head === first) {
      const possibleChain = helperChain(
        [[second, first], ...currentChain],
        newDomLeft
      );
      if (possibleChain !== null) {
        return possibleChain;
      }
    } else if (head === second) {
      const possibleChain = helperChain(
        [[first, second], ...currentChain],
        newDomLeft
      );
      if (possibleChain !== null) {
        return possibleChain;
      }
    }
    
    // Check if the current tail matches the first or second value of the domino
    if (tail === first) {
      const possibleChain = helperChain(
        [...currentChain, [first, second]],
        newDomLeft
      );
      if (possibleChain !== null) {
        return possibleChain;
      }
    } else if (tail === second) {
      const possibleChain = helperChain(
        [...currentChain, [second, first]],
        newDomLeft
      );
      if (possibleChain !== null) {
        return possibleChain;
      }
    } 
  }
  return null;
};
