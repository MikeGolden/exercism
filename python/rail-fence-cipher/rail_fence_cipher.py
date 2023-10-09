def encode(message, rails):
    # Calculate the period which is the length of a "zig-zag" cycle
    period = 2 * rails - 2
    
    # Create empty rows to hold characters for each rail
    rows = [[] for _ in range(rails)]

    # Distribute characters from the message to the appropriate rails
    for i, c in enumerate(message):
        # Calculate the rail for the current character
        rail = min(i % period, period - i % period)
        
        # Append the character to the corresponding rail
        rows[rail].append(c)

    # Join characters from all rails to form the encoded message
    return ''.join(''.join(row) for row in rows)


def decode(encoded_message, rails):
    # Calculate the period which is the length of a "zig-zag" cycle
    period = 2 * rails - 2
    
    # Initialize a list to store the size of each rail
    rows_size = [0] * rails
    
    # Initialize a list to store characters in rows
    rows = []
    
    # Initialize a list to store the decoded characters
    text = []

    # Count the number of characters in each rail
    for i in range(len(encoded_message)):
        # Calculate the rail for the current character
        rail = min(i % period, period - i % period)
        
        # Increment the size of the corresponding rail
        rows_size[rail] += 1

    # Create an iterator for the encoded message
    encoded_message = iter(encoded_message)

    # Populate the rows with characters in reverse order
    for size in rows_size:
        rows.append([next(encoded_message) for _ in range(size)][::-1])

    # Decode characters by following the rail pattern
    for i in range(sum(rows_size)):
        # Calculate the rail for the current character
        rail = min(i % period, period - i % period)
        
        # Pop the character from the rail and append to the decoded text
        text.append(rows[rail].pop())

    # Join the decoded characters to form the original message
    return ''.join(text)
