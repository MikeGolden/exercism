from collections import Counter

# Discount prices based on the number of unique items in the basket
DISCOUNT_PRICE = [0, 800, 1520, 2160, 2560, 3000]

def total(basket):
    """
    Calculate the total cost of books in a shopping basket.

    This function calculates the total cost of books in a shopping basket, taking into
    account possible discounts for purchasing multiple copies of unique books.

    Args:
        basket (list): A list of integers representing different books by their IDs.

    Returns:
        int: The total cost of the books in the basket.

    Example:
        >>> total([1, 2, 3, 4, 5])
        3000  # Discounted price for 5 unique books
    """
    price = len(basket) * 800  # Default price for each book
    counter = Counter(basket)

    for i in range(2, len(counter) + 1):
        # Remove i most common books and calculate the price for the remaining books
        remain = counter - Counter(k for k, _ in counter.most_common(i))
        price = min(price, DISCOUNT_PRICE[i] + total(list(remain.elements())))

    return price