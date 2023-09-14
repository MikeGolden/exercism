def commands(binary_str):
    """
    Convert a binary string to a list of secret handshake actions.

    Args:
        binary_str (str): A binary string representing a sequence of secret handshake actions.
            The rightmost digit corresponds to the first action, and the leftmost digit to the last action.

    Returns:
        list: A list of secret handshake actions.

    Examples:
        commands("11010")
        # Output: ['jump', 'double blink']

    Explanation:
        The input binary_str represents the actions 'jump' and 'double blink' in this order.

    """
    # Reverse the binary string to start with the rightmost digit.
    rvs = binary_str[::-1]

    result = []
    
    # Define a dictionary to map binary digits to actions.
    adict = {
        0: "wink",
        1: "double blink",
        2: "close your eyes",
        3: "jump",
    }

    # Iterate through the reversed binary string to extract actions.
    for i in range(len(rvs) - 1):
        if rvs[i] == "1":
            result.append(adict[i])

    # Check the leftmost digit to determine if actions should be reversed.
    if binary_str[0] == "1":
        result = result[::-1]

    return result