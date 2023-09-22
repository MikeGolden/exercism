class PhoneNumber:
    def __init__(self, number):
        # Remove common separators and create a list of digits
        number_lst = list(number)
        for char in ["(", ")", ".", "-", " ", "+"]:
            while char in number_lst:
                number_lst.remove(char)

        # Get the length of the cleaned number
        length = len(number_lst)

        # Convert the list back to a string
        number = "".join(number_lst)

        # Check the length of the cleaned number
        if length < 10:
            raise ValueError("must not be fewer than 10 digits")

        if length > 11:
            raise ValueError("must not be greater than 11 digits")

        # If the length is 11, check if it starts with '1'
        if length == 11:
            if number[0] != "1":
                raise ValueError("11 digits must start with 1")

            # Remove the leading '1' from both the number and the list
            number = number[1:]
            number_lst = number_lst[1:]

        # Check each character in the cleaned number
        for char in number:
            if char.isnumeric():
                continue
            if char.isalpha():
                raise ValueError("letters not permitted")
            if not char.isalnum():
                raise ValueError("punctuations not permitted")

        # Check if the area code and exchange code are valid
        if number[0] == "0":
            raise ValueError("area code cannot start with zero")
        if number[0] == "1":
            raise ValueError("area code cannot start with one")
        if number[3] == "0":
            raise ValueError("exchange code cannot start with zero")
        if number[3] == "1":
            raise ValueError("exchange code cannot start with one")

        # Store the cleaned number and area code
        self.number = number
        self.area_code = self.number[:3]

    def pretty(self):
        # Format the phone number as (XXX)-XXX-XXXX
        return f"({self.number[:3]})-{self.number[3:6]}-{self.number[6:10]}"
