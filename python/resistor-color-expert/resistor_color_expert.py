def resistor_label(colors):
    # Dictionary mapping color names to their numerical values.
    resistors = {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9,
    }

    # Dictionary mapping tolerance color names to their tolerance values.
    tolerance_values = {
        "grey": 0.05,
        "violet": 0.1,
        "blue": 0.25,
        "green": 0.5,
        "brown": 1,
        "red": 2,
        "gold": 5,
        "silver": 10,
    }

    # Calculate resistance value based on the first three colors.
    resistance_value = int(f"{resistors[colors[0]]}{resistors[colors[1]]}")

    # Check if there is a multiplier (fourth color) present.
    if len(colors) > 3 and colors[3] != "black":
        multiplier = 10 ** resistors[colors[3]]
        resistance_value *= multiplier

    # Determine tolerance value based on the last color.
    tolerance = tolerance_values[colors[-1]]

    # Format resistance value based on magnitude (kiloohms, megaohms).
    if resistance_value >= 1000000:
        magnitude = "megaohms"
        resistance_value /= 1000000
    elif resistance_value >= 1000:
        magnitude = "kiloohms"
        resistance_value /= 1000
    else:
        magnitude = "ohms"

    # Format the result string with resistance value and tolerance.
    result = f"{int(resistance_value)} {magnitude} ±{tolerance}%"

    return result
