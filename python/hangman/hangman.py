# Game status categories
STATUS_WIN = 'win'
STATUS_LOSE = 'lose'
STATUS_ONGOING = 'ongoing'


class Hangman:
    def __init__(self, word):
        self.word = word
        self.remaining_guesses = 9
        self.guessed_chars = set()
        self.status = STATUS_ONGOING

    def guess(self, char):
        if self.status != STATUS_ONGOING:
            raise ValueError("The game has already ended.")

        char = char.lower()
        if char in self.guessed_chars:
            return

        self.guessed_chars.add(char)

        if char not in self.word:
            self.remaining_guesses -= 1

        if self.remaining_guesses < 0:
            self.status = STATUS_LOSE

        if set(self.word).issubset(self.guessed_chars):
            self.status = STATUS_WIN

    def get_masked_word(self):
        masked_word = ''
        for char in self.word:
            if char.lower() in self.guessed_chars:
                masked_word += char
            else:
                masked_word += '_'
        return masked_word

    def get_status(self):
        return self.status
