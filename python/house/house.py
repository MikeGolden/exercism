# Define the possible actions that each item in the nursery rhyme can perform.
ACTIONS = [
    "lay in",
    "ate",
    "killed",
    "worried",
    "tossed",
    "milked",
    "kissed",
    "married",
    "woke",
    "kept",
    "belonged to",
    "",
]

# Define the items that make up the nursery rhyme.
THINGS = [
    "house that Jack built.",
    "malt",
    "rat",
    "cat",
    "dog",
    "cow with the crumpled horn",
    "maiden all forlorn",
    "man all tattered and torn",
    "priest all shaven and shorn",
    "rooster that crowed in the morn",
    "farmer sowing his corn",
    "horse and the hound and the horn",
]

# Function to recite a range of verses from the nursery rhyme.
def recite(start_verse, end_verse):
    return [verse(n) for n in range(start_verse - 1, end_verse)]

# Function to generate a single verse of the nursery rhyme.
def verse(n):
    return ' '.join(
        ["This is the {}".format(THINGS[n])] +
        ["that {} the {}".format(ACTIONS[i], THINGS[i])
         for i in range(n)][::-1]
    )