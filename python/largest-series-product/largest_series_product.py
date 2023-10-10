def largest_product(series: str, size: int) -> int:
    # Check if the span (size) is negative and raise a ValueError if it is.
    if size < 0:
        raise ValueError("span must not be negative")

    # Check if the span (size) is larger than the length of the series and raise a ValueError if it is.
    if size > len(series):
        raise ValueError("span must be smaller than string length")

    # Check if the series contains only digits and raise a ValueError if it doesn't.
    if not series.isdigit():
        raise ValueError("digits input must only contain digits")

    # Initialize the maximum product to 0.
    max_product = 0

    # Iterate through the series using a sliding window of size 'size'.
    for i in range(len(series) - size + 1):
        sub_series = series[i:i + size]
        product = 1

        # Calculate the product of the digits in the sub-series.
        for digit in sub_series:
            product *= int(digit)

        # Update the maximum product if the current product is greater.
        max_product = max(max_product, product)

    # Return the maximum product found in the series.
    return max_product
