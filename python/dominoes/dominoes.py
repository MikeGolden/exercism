from itertools import permutations

def can_chain(dominoes):
    # Check if the input list of dominoes is empty
    if dominoes == []:
        return []

    # Iterate through all possible permutations of the input dominoes
    for permutation in permutations(dominoes):
        chain = [permutation[0]]  # Initialize a chain with the first domino in the permutation

        # Iterate through the remaining dominoes in the permutation
        for x, y in permutation[1:]:
            z = chain[-1][1]  # Get the second number of the last domino in the chain

            # Check if the first number of the current domino matches the second number of the last domino
            if x == z:
                chain.append((x, y))  # Append the current domino to the chain
            # Check if the second number of the current domino matches the second number of the last domino
            elif y == z:
                chain.append((y, x))  # Append the current domino with reversed order to the chain
            else:
                break  # If no match is found, break the loop

        # Check if the chain has the same length as the permutation and forms a closed loop
        if len(chain) == len(permutation) and chain[0][0] == chain[-1][1]:
            return chain  # Return the valid chain

    # If no valid chain is found after checking all permutations, return None
    return None
