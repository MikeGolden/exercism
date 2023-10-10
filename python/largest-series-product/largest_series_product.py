def largest_product(series, size):
    if size < 0:
        raise ValueError("span must not be negative")

    if size > len(series):
        raise ValueError("span must be smaller than string length")

    if not series.isdigit():
        raise ValueError("digits input must only contain digits")

    max_product = 0

    for i in range(len(series) - size + 1):
        sub_series = series[i:i + size]
        product = 1

        for digit in sub_series:
            product *= int(digit)

        max_product = max(max_product, product)

    return max_product