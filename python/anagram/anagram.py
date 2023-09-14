def find_anagrams(word, candidates):
    """
    Find anagrams of a given word within a list of candidate words.

    Args:
        word (str): The target word for which to find anagrams.
        candidates (list): A list of candidate words to check for anagrams.

    Returns:
        list: A list of words from the candidate list that are anagrams of the target word.

    Examples:
        word = "listen"
        candidates = ["enlist", "banana", "silent", "linest", "tinsel"]
        find_anagrams(word, candidates)
        # Output: ['enlist', 'silent', 'linest', 'tinsel']

    Explanation:
        The function finds anagrams of the word "listen" in the list of candidates.

    """
    result = []
    
    # Convert the target word to lowercase for case-insensitive comparison.
    word = word.lower()

    for candidate in candidates:
        # Skip if the candidate word is the same as the target word (case-insensitive).
        if candidate.lower() == word:
            continue

        # Skip if the candidate word has a different length than the target word.
        if len(candidate) != len(word):
            continue

        is_anagram = True
        candidate2 = candidate.lower()
        word2 = word

        for char in candidate2:
            if char not in word2:
                is_anagram = False
                break
            for i in range(len(word2)):
                if char == word2[i]:
                    if i == len(word2) - 1:
                        word2 = word2[:i]
                        break
                    word2 = word2[:i] + word2[i + 1:]
                    break

        if is_anagram:
            result.append(candidate)

    return result