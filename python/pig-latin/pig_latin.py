def translate(text):
    """
    Translate an English word to Pig Latin.

    Args:
        text (str): The English word to be translated.

    Returns:
        str: The Pig Latin translation of the input word.
    """
    suffix = "ay"
    lst_text = text.split()
    temp_list = []

    for word in lst_text:
        copied_word = word
        pre_suffix = ""
        first_2letters = copied_word[0:2]

        if first_2letters == "xr":
            temp_list.append(copied_word + pre_suffix + suffix)
            continue

        if first_2letters == "ye":
            temp_list.append(copied_word[1:] + "y" + suffix)
            continue

        # move leading consonants to the back & add suffix
        while copied_word[0] not in "aeiouy":
            # "qu" are handled together
            if copied_word[0:2] == "qu":
                pre_suffix += "qu"
                copied_word = copied_word[2:]
                continue
            # moving single letters
            pre_suffix += copied_word[0]
            copied_word = copied_word[1:]

        temp_list.append(copied_word + pre_suffix + suffix)

    return " ".join(temp_list)