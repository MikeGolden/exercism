def is_pangram(sentence):
    """
    Check if a sentence is a pangram (contains all 26 letters of the English alphabet).

    Args:
        sentence (str): The sentence to be checked.

    Returns:
        bool: True if the sentence is a pangram, False otherwise.
    """
    # Create a set to keep track of the unique letters in the sentence (case-insensitive)
    unique_letters = set()

    # Iterate through the sentence and add each letter to the set
    for char in sentence:
        if char.isalpha():
            unique_letters.add(char.lower())  # Convert to lowercase for case-insensitivity

    # Check if the set contains all 26 letters of the alphabet
    return len(unique_letters) == 26
