def flatten(iterable):
    """
    Flatten a nested iterable by recursively extracting all non-None elements.

    This function takes an iterable, such as a list containing nested lists, and returns
    a new list with all elements flattened. It recursively processes nested lists and
    extracts non-None elements, preserving their order.

    Args:
        iterable (iterable): The iterable to be flattened.

    Returns:
        list: A new list containing all non-None elements from the input iterable,
        with nesting flattened.

    Examples:
        >>> flatten([1, [2, 3], None, [4, [5, 6]], 7])
        [1, 2, 3, 4, 5, 6, 7]

        >>> flatten([[1, 2], None, [3, [4, None], 5]])
        [1, 2, 3, 4, 5]

    """
    # Initialize an empty list to store the flattened elements
    ret = []

    # Iterate over the elements in the input iterable
    for x in iterable:
        # Check if the element is a list
        if isinstance(x, list):
            # If it's a list, recursively call flatten to flatten its elements
            for y in flatten(x):
                # Append each flattened element to the result list
                ret.append(y)
        # Check if the element is not None
        elif x is not None:
            # If it's not None, append it to the result list
            ret.append(x)

    # Return the final list with all elements flattened
    return ret