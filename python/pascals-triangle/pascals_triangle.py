def rows(row_count: int) -> list[list[int]]:
    if row_count < 0:
        raise ValueError("number of rows is negative")
    if row_count == 0:
        return []
    if row_count == 1:
        return [[1]]
    *prefix, last = rows(row_count-1)
    new = [a+b for a,b in zip(last + [0], [0] + last)]
    return [*prefix, last, new]