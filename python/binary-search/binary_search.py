def find(search_list, value):
    """
    Perform binary search to find a target element in a sorted array.

    Args:
        search_list (list): A sorted list of elements.
        value: The element to search for in the array.

    Returns:
        int: The index of the target element in the array if found, or -1 if not found.
    """  
    left, right = 0, len(search_list) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if search_list[mid] == value:
            return mid  # Target found, return the index.
        elif search_list[mid] < value:
            left = mid + 1  # Target is in the right half.
        else:
            right = mid - 1  # Target is in the left half.

    raise ValueError("value not in array") # Target not found in the array.