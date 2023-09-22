def slices(series, length):
    """
    Generate slices of a specified length from an input series.

    Args:
        series (str): The input series from which slices are generated.
        length (int): The length of each slice to be generated.

    Returns:
        list: A list of slices, where each slice is a substring of the input
              series with the specified length.

    Raises:
        ValueError: If the slice length is negative, zero, or greater than
                    the length of the input series, or if the input series
                    is empty.

    Example:
        >>> slices("123456", 3)
        ['123', '234', '345', '456']
    """
    # Check if the specified slice length is negative
    if length < 0:
        raise ValueError("slice length cannot be negative")

    # Check if the specified slice length is zero
    if length == 0:
        raise ValueError("slice length cannot be zero")

    # Get the length of the input series
    len_series = len(series)

    # Check if the input series is empty
    if len_series == 0:
        raise ValueError("series cannot be empty")

    # Check if the specified slice length is greater than the series length
    if len_series < length:
        raise ValueError("slice length cannot be greater than series length")

    result = []

    # Iterate through the series to create slices of the specified length
    for i in range(len_series - length + 1):
        result.append(series[i:length + i])

    return result