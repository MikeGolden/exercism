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

MAGNITUDES = [
    (1000000, "mega"), 
    (1000, "kilo"), 
    (1, "")
]


def resistor_label(colors: list[str]) -> str:
    if len(colors) == 1:
        return "0 ohms"
    *value_colors, multiplier_color, tolerance_color = colors
    base_value = sum(COLOR_LIST.index(color) * 10 ** exponent for exponent, color in enumerate(value_colors[::-1]))
    multiplier = COLOR_LIST.index(multiplier_color)
    multiplied_value = base_value * 10 ** multiplier
    tolerance = COLOR_TOLERANCES[tolerance_color]
    for magnitude, prefix in MAGNITUDES:
        if multiplied_value > magnitude:
            return f"{multiplied_value / magnitude:g} {prefix}ohms ±{tolerance}%"