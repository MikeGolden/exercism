# Dictionary mapping resistor color names to their corresponding numerical values.
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

# Dictionary mapping metric prefixes to their corresponding multipliers.
metric_prefix = {1000000000: "giga", 1000000: "mega", 1000: "kilo"}

def label(colors):
    # Convert the resistor color names to their numerical values using the 'resistors' dictionary.
    res = [resistors[v] for v in colors]

    # Calculate the resistance value by combining the first two digits.
    resistance = int(f"{res[0]}{res[1]}")

    # Calculate the magnitude of the resistance value based on the third color (multiplier).
    magnitude = int(f"{resistance}{'0'*res[2]}")

    # Initialize the resistance unit suffix as "ohms".
    suffix = "ohms"

    # Check if the magnitude of resistance exceeds the threshold for using metric prefixes.
    for base, prefix in metric_prefix.items():
        if magnitude >= base:
            # Update the suffix with the appropriate metric prefix.
            suffix = f"{prefix}{suffix}"

            # Adjust the magnitude by dividing it by the base value.
            magnitude = int(magnitude / base)
            break

    # Format and return the resistance value and suffix as a string.
    return f"{magnitude} {suffix}"
