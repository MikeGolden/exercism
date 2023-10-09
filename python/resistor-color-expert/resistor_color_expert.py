# List of valid resistor color names.
COLOR_LIST = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
]

# Dictionary mapping tolerance color names to tolerance values.
COLOR_TOLERANCES = {
    "grey": 0.05,
    "violet": 0.1,
    "blue": 0.25,
    "green": 0.5,
    "brown": 1,
    "red": 2,
    "gold": 5,
    "silver": 10
}

# List of magnitude prefixes and their corresponding multipliers.
MAGNITUDES = [
    (1000000, "mega"),
    (1000, "kilo"),
    (1, "")
]

# Main function for translating resistor band colors into a label.
def resistor_label(colors: list[str]) -> str:
    # Check if there is only one color, which represents 0 ohms.
    if len(colors) == 1:
        return "0 ohms"

    # Split the input colors into value_colors, multiplier_color, and tolerance_color.
    *value_colors, multiplier_color, tolerance_color = colors

    # Calculate the base resistance value based on value_colors.
    base_value = sum(COLOR_LIST.index(color) * 10 ** exponent for exponent, color in enumerate(value_colors[::-1]))

    # Determine the multiplier based on the multiplier_color.
    multiplier = COLOR_LIST.index(multiplier_color)

    # Calculate the final resistance value by applying the multiplier.
    multiplied_value = base_value * 10 ** multiplier

    # Get the tolerance value based on the tolerance_color.
    tolerance = COLOR_TOLERANCES[tolerance_color]

    # Determine the appropriate magnitude (kiloohms, megaohms) and format the result.
    for magnitude, prefix in MAGNITUDES:
        if multiplied_value >= magnitude:
            return f"{multiplied_value / magnitude:g} {prefix}ohms ±{tolerance}%"
