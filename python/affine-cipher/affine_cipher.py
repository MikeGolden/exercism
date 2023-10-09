def encode(plain_text, a, b):
    # Check if 'a' and 26 (size of the English alphabet) are coprime (have a modular multiplicative inverse).
    if modular_multiplicative_inverse(a, 26) is None:
        raise ValueError("a and m must be coprime.")

    # Remove non-alphanumeric characters and convert to lowercase.
    chars = [c for c in plain_text.lower() if c.isalnum()]

    # Apply the affine cipher encoding formula to each character.
    for i in range(len(chars)):
        if chars[i].islower():
            chars[i] = chr((a * (ord(chars[i]) - 97) + b) % 26 + 97)

    # Insert space every 5 characters for better readability.
    for i in reversed(range(5, len(chars), 5)):
        chars.insert(i, " ")

    # Join the characters back into a string.
    return "".join(chars)


def decode(ciphered_text, a, b):
    # Calculate the modular multiplicative inverse of 'a' modulo 26.
    n = modular_multiplicative_inverse(a, 26)

    # Check if 'a' and 26 are coprime.
    if n is None:
        raise ValueError("a and m must be coprime.")

    # Remove non-alphanumeric characters.
    chars = [c for c in ciphered_text if c.isalnum()]

    # Apply the affine cipher decoding formula to each character.
    for i in range(len(chars)):
        if chars[i].islower():
            chars[i] = chr(n * ((ord(chars[i]) - 97) - b) % 26 + 97)

    # Join the characters back into a string.
    return "".join(chars)


def modular_multiplicative_inverse(a, m):
    # Find the modular multiplicative inverse of 'a' modulo 'm'.
    for n in range(1, m):
        if a * n % m == 1:
            return n

    # If no modular multiplicative inverse is found, return None.
    return None
