def score(word):
    """
    Calculate the Scrabble score for a given word.

    Letter Values:
    - A, E, I, O, U, L, N, R, S, T: 1 point
    - D, G: 2 points
    - B, C, M, P: 3 points
    - F, H, V, W, Y: 4 points
    - K: 5 points
    - J, X: 8 points
    - Q, Z: 10 points

    Args:
        word (str): The word for which the Scrabble score needs to be calculated.

    Returns:
        int: The total Scrabble score for the word.

    Examples:
        >>> score("cabbage")
        14
        >>> score("hello")
        8
    """
    # Define the letter values using a dictionary
    letter_values = {
        'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
        'D': 2, 'G': 2,
        'B': 3, 'C': 3, 'M': 3, 'P': 3,
        'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
        'K': 5,
        'J': 8, 'X': 8,
        'Q': 10, 'Z': 10
    }

    # Convert the word to uppercase to handle both upper and lower case letters
    word = word.upper()

    # Initialize the total score to 0
    total_score = 0

    # Calculate the score for each letter in the word and sum them up
    for letter in word:
        total_score += letter_values.get(letter, 0)  # Use get to handle unknown characters

    return total_score