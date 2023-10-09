from functools import reduce

# Encode a list of numbers into a list of bytes
def encode(numbers):
    # Iterate over each number in the input list and encode it using encode_single_number
    return [x for number in numbers for x in encode_single_number(number)]

# Encode a single number into a list of bytes
def encode_single_number(number):
    # Initialize a list to store the encoded bytes
    bytes_ = [number % 0x80]  # Get the least significant 7 bits of the number
    number //= 0x80  # Shift the number right by 7 bits

    # Continue encoding until the number becomes zero
    while number > 0x0:
        bytes_.append(number % 0x80 + 0x80)  # Set the most significant bit to 1 and append
        number //= 0x80  # Shift the number right by 7 bits

    # Reverse the list of bytes to maintain the correct order
    return reversed(bytes_)

# Decode a list of bytes into a list of numbers
def decode(bytes_):
    i = 0
    numbers = []

    # Iterate over the bytes to decode the numbers
    for j in range(len(bytes_)):
        # If the byte has the most significant bit clear or it's the last byte
        if bytes_[j] < 0x80 or j == len(bytes_) - 1:
            # Decode the number using decode_single_number and add it to the list
            numbers.append(decode_single_number(bytes_[i:j + 1]))
            i = j + 1  # Update the starting index for the next number

    return numbers

# Decode a list of bytes into a single number
def decode_single_number(bytes_):
    # Perform error checks for incomplete sequences and invalid lengths
    if bytes_ == [] or bytes_[-1] > 0x7F or len(bytes_) > 5 \
            or (len(bytes_) == 5 and bytes_[0] > 0x8F):
        raise ValueError("incomplete sequence")

    # Use functools.reduce to decode the bytes into a single number
    return reduce(lambda acc, x: (acc << 7) + x % 0x80, bytes_, 0)
