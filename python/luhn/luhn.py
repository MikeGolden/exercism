class Luhn:
    def __init__(self, card_num):
        self.card_num = card_num

    def valid(self):
        # Remove spaces and check if the string is empty or contains non-digit characters
        card_num = self.card_num.replace(" ", "")
        if not card_num.isdigit() or len(card_num) <= 1:
            return False

        # Convert the card number to a list of integers in reverse order
        digits = [int(digit) for digit in card_num[::-1]]

        # Double every second digit, starting from the right
        for i in range(1, len(digits), 2):
            digits[i] *= 2
            if digits[i] > 9:
                digits[i] -= 9

        # Sum all the digits
        total = sum(digits)

        # Check if the total is divisible by 10
        return total % 10 == 0