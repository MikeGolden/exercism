from itertools import permutations
from string import digits

def solve(puzzle):
    # Split the puzzle into left and right sides of the equation
    left, right = puzzle.split("==")
    # Split the left side into individual terms
    left = [s.strip() for s in left.split("+")]
    right = right.strip()
    # Extract unique letters from the puzzle
    letters = "".join(set(c for c in puzzle if c.isalpha()))

    # Check if there are more than 10 unique letters (no unique mapping)
    if len(letters) > 10:
        return None

    # Generate permutations of digits for the letters
    for p in permutations(digits, len(letters)):
        # Create a translation table to map letters to digits
        trans = str.maketrans(letters, "".join(p))

        # Check if any word has a leading zero when translated
        if any(len(w) > 1 and trans[ord(w[0])] == 48 for w in left + [right]):
            continue

        # Evaluate the left side of the equation and the right side
        if sum(int(w.translate(trans)) for w in left) \
                == int(right.translate(trans)):
            # Return the mapping of letters to digits
            return {chr(letter): digit - 48 for letter, digit in trans.items()}

    # If no solution is found, return None
    return None
