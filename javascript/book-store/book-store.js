//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const BOOK_PRICE = 800; // 800 cents or $8.00 for a single book
const DISCOUNT = [1, 0.95, 0.9, 0.8, 0.75]; // Discounts for 0 to 5 different books

export const cost = (books) => {
  const bookSet = [];
  
  // Create an array 'bookSet' to store the count of unique books in each set

  while (books.length > 0) {
    // Continue this loop while there are books in the 'books' array
    const set = new Set(books);
    // Create a set to store the unique books in the current set
    bookSet.push(set.size);
    // Add the count of unique books to 'bookSet'

    for (let element of set) {
      // Iterate through the unique books in the set
      books.splice(books.indexOf(element), 1);
      // Remove one instance of the book from the 'books' array
    }
  }

  while (bookSet.includes(3) && bookSet.includes(5)) {
    // Check if there is a set of 3 and a set of 5 books
    bookSet.splice(bookSet.indexOf(3), 1);
    bookSet.splice(bookSet.indexOf(5), 1);
    // Replace the sets of 3 and 5 books with two sets of 4 books
    bookSet.push(4, 4);
  }

  return bookSet.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue * BOOK_PRICE * DISCOUNT[currentValue - 1],
    0
  );
  // Calculate the total cost by summing the cost of each set
};
