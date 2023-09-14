def count_words(sentence):
    """
    Count the frequency of words in a given sentence.

    This function takes a sentence as input and returns a dictionary where keys
    are unique words in the sentence, and values are the corresponding word counts.

    Args:
        sentence (str): The input sentence to count words in.

    Returns:
        dict: A dictionary where keys are words and values are word counts.

    Example:
        >>> count_words("This is a simple example. This is another example.")
        {'this': 2, 'is': 2, 'a': 1, 'simple': 1, 'example': 2, 'another': 1}
    """
    # Create an empty dictionary to store word counts.
    word_count = {}

    # Convert the sentence to lowercase.
    sentence = sentence.lower()

    # Define a set of punctuation characters to split the sentence.
    punctuation = " \t\n,._&!@%^$:"
    
    # Initialize a word buffer.
    word_buffer = []

    for char in sentence:
        if char not in punctuation:
            # Append characters to the word buffer.
            word_buffer.append(char)
        else:
            # If a punctuation character is encountered, process the word buffer.
            if word_buffer:
                word = ''.join(word_buffer)
                # Remove leading and trailing single quotes.
                word = word.strip("'")
                
                # Update the word count dictionary.
                if word:
                    word_count[word] = word_count.get(word, 0) + 1
                
                # Reset the word buffer.
                word_buffer = []

    # Process the last word in the sentence.
    if word_buffer:
        word = ''.join(word_buffer)
        word = word.strip("'")
        if word:
            word_count[word] = word_count.get(word, 0) + 1

    return word_count





