def response(hey_bob):
    """
    Determine Bob's response based on the given remark.

    Bob responds to remarks in the following ways:
    - If the remark is empty or contains only whitespace characters, Bob responds with "Fine. Be that way!"
    - If the remark is in all capital letters (YELLING), Bob responds with:
      - "Whoa, chill out!" if it's not a question
      - "Calm down, I know what I'm doing!" if it's a question
    - If the remark is a question, Bob responds with "Sure."
    - For any other remark, Bob responds with "Whatever."

    Parameters:
    remark (str): The remark or question given to Bob.

    Returns:
    str: Bob's response to the input remark.
    """
    # Check if the remark is empty or contains only whitespace characters
    if not hey_bob.strip():
        return "Fine. Be that way!"
    
    # Check if the remark is in all capital letters (YELLING)
    if hey_bob.isupper():
        # Check if the remark is a question (ends with a question mark)
        if hey_bob.endswith("?"):
            return "Calm down, I know what I'm doing!"
        else:
            return "Whoa, chill out!"
    
    # Check if the remark is a question
    if hey_bob.strip().endswith("?"):
        return "Sure."

    # Default response
    return "Whatever."