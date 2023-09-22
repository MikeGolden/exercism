def decode(string):
    """
    Decode a run-length encoded string.

    Args:
    string (str): A run-length encoded string containing letters and counts.

    Returns:
    str: The decoded string with repeated characters expanded according to their counts.
    """

    # Check if the input string is empty
    if not string:
        return ""

    decoded = []  # Initialize an empty list to store the decoded characters
    count = 0

    for char in string:
        if char.isdigit():
            # If the character is a digit, accumulate it to form a count
            count = count * 10 + int(char)
        else:
            if count == 0:
                count = 1  # If count is zero, set it to 1
            # Append the character repeated 'count' times to the decoded list
            decoded.append(char * count)
            count = 0  # Reset count for the next character

    return "".join(decoded)  # Join the decoded characters into a string


def encode(string):
    """
    Encode a string using the run-length encoding algorithm.

    Args:
    string (str): A string to be run-length encoded.

    Returns:
    str: The encoded string with counts for consecutive repeated characters.
    """

    # Check if the input string is empty
    if not string:
        return ""

    encoded = []  # Initialize an empty list to store the encoded characters
    count = 1

    for i in range(1, len(string)):
        if string[i] == string[i - 1]:
            # If the current character is the same as the previous one, increment count
            count += 1
        else:
            if count > 1:
                # If count is greater than 1, append it to the encoded list as a string
                encoded.append(str(count))
            # Append the previous character to the encoded list
            encoded.append(string[i - 1])
            count = 1  # Reset count for the next character

    if count > 1:
        # If count is greater than 1 for the last character, append it to the encoded list
        encoded.append(str(count))
    # Append the last character to the encoded list
    encoded.append(string[-1])

    return "".join(encoded)  # Join the encoded characters into a string