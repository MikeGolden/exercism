def score(x, y):
    """
    Calculate the earned points in a single toss of a Darts game.

    The function takes the Cartesian coordinates (x, y) of where the dart
    lands on the target and calculates the earned points based on the
    following criteria:
    
    - If the dart lands outside the target, player earns 0 points.
    - If the dart lands in the outer circle of the target, player earns 1 point.
    - If the dart lands in the middle circle of the target, player earns 5 points.
    - If the dart lands in the inner circle of the target, player earns 10 points.

    Args:
        x (float): The X-coordinate of the dart's landing point.
        y (float): The Y-coordinate of the dart's landing point.

    Returns:
        int: The earned points based on the dart's location on the target.
    """
    # Calculate the distance from the center (0, 0) to the dart's coordinates (x, y)
    distance = (x**2 + y**2)**0.5
    
    # Check which region the dart landed in and assign points accordingly
    if distance > 10:
        return 0
    elif distance > 5:
        return 1
    elif distance > 1:
        return 5
    else:
        return 10