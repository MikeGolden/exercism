//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const BOOK_PRICE = 800; // 800 cents or $8.00 for a single book
const DISCOUNT = [1, 0.95, 0.9, 0.8, 0.75]; // Discounts for 0 to 5 different books

export const cost = (books) => {
  const bookSet = [];
  
  while (books.length > 0) {
    const set = new Set(books);
    bookSet.push(set.size);

    for (let element of set) {
      books.splice(books.indexOf(element), 1);
    }
  }

  while (bookSet.includes(3) && bookSet.includes(5)) {
    bookSet.splice(bookSet.indexOf(3), 1);
    bookSet.splice(bookSet.indexOf(5), 1);
    bookSet.push(4, 4);
  }

  return bookSet.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue * BOOK_PRICE * DISCOUNT[currentValue - 1],
    0
  );
};
