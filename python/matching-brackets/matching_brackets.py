def is_paired(input_string):
    """
    Verify if brackets, braces, and parentheses are correctly matched and nested in a string.

    Args:
        input_string (str): The input string containing brackets, braces, and parentheses.

    Returns:
        bool: True if all pairs are correctly matched and nested, False otherwise.
    """
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in input_string:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack.pop() != mapping[char]:
                return False

    return not stack  # True if the stack is empty, meaning all pairs are matched
