def is_isogram(string):
    """
    Check if a word or phrase is an isogram (contains no repeated letters).

    Args:
        string (str): The word or phrase to be checked.

    Returns:
        bool: True if the word/phrase is an isogram, False otherwise.
    """
    # Create a set to store unique letters encountered
    seen_letters = set()

    # Iterate through each letter in the word/phrase
    for letter in string:
        # Convert the letter to lowercase to be case-insensitive
        letter = letter.lower()

        # Check if the letter is a letter of the alphabet (ignore non-alphabetic characters)
        if letter.isalpha():
            # If the letter is already in the set, it's a repeat, so return False
            if letter in seen_letters:
                return False
            # Otherwise, add it to the set of seen letters
            seen_letters.add(letter)

    # If we didn't find any repeated letters, it's an isogram
    return True
