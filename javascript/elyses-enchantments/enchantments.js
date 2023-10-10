// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
    // Check if the position is within the valid range
    if (position < 0 || position >= cards.length) {
      throw new Error('Invalid position');
    }
  
    // Create a copy of the original cards array
    const newCards = [...cards];
  
    // Replace the card at the specified position with the replacementCard
    newCards[position] = replacementCard;
  
    // Return the modified array
    return newCards;
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  // Create a copy of the original cards array
  const newCards = [...cards];

  // Add the newCard to the end of the array
  newCards.push(newCard);

  // Return the modified array
  return newCards;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  // Create a copy of the original cards array
  const newCards = [...cards];

  // Remove the card at the 0-based position
  newCards.shift();

  return newCards;
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  const newCards = [...cards];
  newCards.pop()
  return newCards;
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  const newCards = [...cards];
  newCards.unshift(newCard);
  return newCards;
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  const newCards = [...cards];
  newCards.shift();
  return newCards;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  // Check if the length of the cards array is equal to stackSize
  return cards.length === stackSize;
}
