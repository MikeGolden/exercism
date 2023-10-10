from typing import List

def combinations(target: int, size: int, exclude: List[int]) -> List[List[int]]:
    """
    Generate all valid combinations for a given cage in Killer Sudoku.

    :param target: The target sum for the cage.
    :param size: The size of the cage.
    :param exclude: A list of digits to exclude from the combinations.
    :return: A list of valid combinations for the cage.
    """
    if size == 1:
        if 1 <= target <= 9 and target not in exclude:
            return [[target]]
        else:
            return []
    else:
        results = []
        for n in range(1, 10):
            if n not in exclude:
                for c in combinations(target - n, size - 1, exclude + [n]):
                    combination = sorted([n, *c])
                    if combination not in results:
                        results.append(combination)
        return results
