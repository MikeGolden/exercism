# Define the list of animals in the song
animals = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"]

# Define phrases associated with each verse
phrases = [
    "It wriggled and jiggled and tickled inside her.",
    "How absurd to swallow a bird!",
    "Imagine that, to swallow a cat!",
    "What a hog, to swallow a dog!",
    "Just opened her throat and swallowed a goat!",
    "I don't know how she swallowed a cow!",
    "She's dead, of course!",
]

# Function to generate the specified range of verses
def recite(start_verse, end_verse):
    ret = []  # Initialize an empty list to store the verses

    # Loop through the requested verses
    for n in range(start_verse, end_verse + 1):
        # Extend the list with the lines of the current verse and an empty line
        ret.extend(verse(n) + [""])

    return ret[:-1]  # Remove the trailing empty line

# Function to generate a single verse
def verse(n):
    ret = ["I know an old lady who swallowed a {}.".format(animals[n - 1])]  # Initialize with the first line of the verse

    # Add additional lines based on the verse number
    if n > 1:
        ret.append("{}".format(phrases[n - 2]))  # Add the associated phrase for the verse
    if n < 8:
        for i in range(n - 1):
            ret.append("She swallowed the {} to catch the {}.".format(
                animals[n - i - 1], animals[n - i - 2]))
            if ret[-1].endswith("spider."):
                ret[-1] = ret[-1][:-1] + " that" + phrases[0][2:]  # Replace "spider." with the spider-related phrase
        ret.append("I don't know why she swallowed the fly. Perhaps she'll die.")  # Add the final line for the verse

    return ret  # Return the lines of the verse as a list
