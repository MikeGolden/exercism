def rotate(text, key):
    """
    Encrypt a plaintext message using a rotational cipher (Caesar cipher).

    Args:
        text (str): The plaintext message to be encrypted.
        key (int): The number of positions to shift each letter in the alphabet.

    Returns:
        str: The encrypted message.
    """
    encrypted_message = ""
    
    for char in text:
        if char.isalpha():  # Check if the character is a letter
            # Determine whether to shift up or down the alphabet
            if char.islower():
                shifted_char = chr(((ord(char) - ord('a') + key) % 26) + ord('a'))
            else:
                shifted_char = chr(((ord(char) - ord('A') + key) % 26) + ord('A'))
        else:
            shifted_char = char  # Non-alphabet characters remain unchanged
        encrypted_message += shifted_char
    
    return encrypted_message
