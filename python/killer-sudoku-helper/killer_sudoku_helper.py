from itertools import combinations as it_combinations

def combinations(target: int, size: int, exclude: set = None) -> list:
    """
    Generate all valid combinations for a given cage in Killer Sudoku.

    :param target: The target sum for the cage.
    :param size: The size of the cage.
    :param exclude: A set of digits to exclude from the combinations.
    :return: A list of valid combinations for the cage.
    """
    if exclude is None:
        exclude = set()

    def backtrack(start, current_combination):
        if len(current_combination) == size and sum(current_combination) == target:
            result.append(tuple(sorted(current_combination)))
            return

        if len(current_combination) >= size or sum(current_combination) > target:
            return

        for digit in range(start, 10):
            if digit not in exclude:
                current_combination.append(digit)
                backtrack(digit + 1, current_combination)
                current_combination.pop()

    result = []
    backtrack(1, [])
    return sorted(result)