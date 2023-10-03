import random
import string

class Cipher:
    def __init__(self, key=None):
        """
        Initialize a Cipher object.

        Args:
            key (str): The encryption key. If None, a random key of at least 100 lowercase characters will be generated.
        """
        if key:
            if not key.isalpha() or not key.islower():
                raise ValueError("Invalid key. Key must contain only lowercase letters.")
            self.key = key
        else:
            self.key = ''.join(random.choice(string.ascii_lowercase) for _ in range(100))

    def encode(self, text):
        """
        Encode a message using the Caesar Cipher.

        Args:
            text (str): The message to be encoded.

        Returns:
            str: The encoded message.
        """
        result = ''
        for i, char in enumerate(text):
            shift = ord(self.key[i % len(self.key)]) - ord('a')
            encoded_char = chr(((ord(char) - ord('a') + shift) % 26) + ord('a'))
            result += encoded_char
        return result

    def decode(self, text):
        """
        Decode a message encoded with the Caesar Cipher.

        Args:
            text (str): The encoded message to be decoded.

        Returns:
            str: The decoded message.
        """
        result = ''
        for i, char in enumerate(text):
            shift = ord(self.key[i % len(self.key)]) - ord('a')
            decoded_char = chr(((ord(char) - ord('a') - shift) % 26) + ord('a'))
            result += decoded_char
        return result
