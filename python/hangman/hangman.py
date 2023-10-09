# Game status categories
STATUS_WIN = 'win'
STATUS_LOSE = 'lose'
STATUS_ONGOING = 'ongoing'

class Hangman:
    def __init__(self, word):
        # Initialize the game with 9 remaining guesses and an ongoing status.
        self.remaining_guesses = 9
        self.status = STATUS_ONGOING
        self.word = word  # The word to be guessed.
        self.masked_word = ["_"] * len(word)  # Initialize a masked word with underscores.

    def guess(self, char):
        # Check if the game has already ended, and if so, raise an error.
        if self.status != STATUS_ONGOING:
            raise ValueError("The game has already ended.")

        if char in self.word and char not in self.masked_word:
            # If the guessed character is in the word and not already guessed:
            for i in range(len(self.word)):
                if self.word[i] == char:
                    self.masked_word[i] = char  # Reveal the character in the masked word.

            if all(c != "_" for c in self.masked_word):
                # If there are no underscores left in the masked word, the player has won.
                self.status = STATUS_WIN
        else:
            if self.remaining_guesses == 0:
                # If there are no remaining guesses left, the player has lost.
                self.status = STATUS_LOSE
            else:
                self.remaining_guesses -= 1  # Decrement the remaining guesses.

    def get_masked_word(self):
        # Get the current state of the masked word as a string.
        return "".join(self.masked_word)

    def get_status(self):
        # Get the current game status (win, lose, or ongoing).
        return self.status
