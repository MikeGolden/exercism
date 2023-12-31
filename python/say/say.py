def say(number):
    # Check if the input number is out of the valid range (0 to 999,999,999,999)
    if number < 0 or number > 999_999_999_999:
        raise ValueError("input out of range")

    # Call the say_billion function to handle the main conversion
    return say_billion(number)


# Helper function to convert numbers into English words with the given scale and text
def say_x(number, x, text, f):
    if number < x:
        return f(number)
    elif number % x == 0:
        return f(number // x) + " " + text
    else:
        return f(number // x) + " " + text + " " + f(number % x)


# Helper functions for different scales: hundred, thousand, million, and billion
def say_hundred(number):
    return say_x(number, 100, "hundred", say_0_99)


def say_thousand(number):
    return say_x(number, 1_000, "thousand", say_hundred)


def say_million(number):
    return say_x(number, 1_000_000, "million", say_thousand)


def say_billion(number):
    return say_x(number, 1_000_000_000, "billion", say_million)


# Helper function to convert numbers from 0 to 99 into English words
def say_0_99(number):
    nums_le20 = ["zero", "one", "two", "three", "four",
                 "five", "six", "seven", "eight", "nine",
                 "ten", "eleven", "twelve", "thirteen", "fourteen",
                 "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    tens = ["twenty", "thirty", "forty", "fifty",
            "sixty", "seventy", "eighty", "ninety"]

    if number < 20:
        return nums_le20[number]
    elif number % 10 == 0:
        return tens[number // 10 - 2]
    else:
        return say_0_99(number // 10 * 10) + "-" + say_0_99(number % 10)
