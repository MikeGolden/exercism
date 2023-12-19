// Keep function takes a collection and a predicate function,
// returns a new collection containing elements where the predicate is true.
export const keep = (collection, predicate) => {
  // Initialize an empty array to store elements that satisfy the predicate.
  const kept = [];
  
  // Iterate through each element in the collection.
  for (const element of collection) {
    // Check if the predicate returns true for the current element.
    if (predicate(element)) {
      // If the predicate is true, add the element to the kept array.
      kept.push(element);
    }
  }
  
  // Return the array containing elements that satisfy the predicate.
  return kept;
};

// Discard function takes a collection and a predicate function,
// returns a new collection containing elements where the predicate is false.
export const discard = (collection, predicate) => {
  // Initialize an empty array to store elements that do not satisfy the predicate.
  const discarded = [];
  
  // Iterate through each element in the collection.
  for (const element of collection) {
    // Check if the predicate returns false for the current element.
    if (!predicate(element)) {
      // If the predicate is false, add the element to the discarded array.
      discarded.push(element);
    }
  }
  
  // Return the array containing elements that do not satisfy the predicate.
  return discarded;
};
