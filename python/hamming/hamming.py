def distance(strand_a, strand_b):
    # Get the length of both input strands
    length_a = len(strand_a)
    
    # Check if the strands have equal length, raise an error if not
    if length_a != len(strand_b):
        raise ValueError("Strands must be of equal length.")
    
    # Initialize a variable to store the Hamming distance
    result = 0
    
    # Iterate over the characters of the input strands
    for i in range(length_a):
        # Compare the characters at the same position in both strands
        if strand_a[i] != strand_b[i]:
            # If they are different, increment the Hamming distance
            result += 1
    
    # Return the final Hamming distance between the two strands
    return result